import { folder, useControls } from 'leva'
import React, { VFC } from 'react'
import * as THREE from 'three'
import { Icosahedron } from '@react-three/drei'
import { noise } from '../libs/shader'
import { useFrame } from '@react-three/fiber'

export const ShaderObject = () => {
	const datas = useControls({
		noise: folder({
			speed: { value: 0.5, min: 0.1, max: 1, step: 0.01 },
			density: { value: 2, min: 0, max: 10, step: 0.01 },
			strength: { value: 0.2, min: 0, max: 2, step: 0.01 }
		}),
		mesh: folder({
			wireframe: true
		})
	})

	const material = new THREE.ShaderMaterial({
		uniforms: {
			u_time: { value: 0 },
			u_speed: { value: datas.speed },
			u_density: { value: datas.density },
			u_strength: { value: datas.strength }
		},
		vertexShader: vertexShader,
		fragmentShader: fragmentShader,
		wireframe: datas.wireframe
	})

	useFrame(({ clock }) => {
		material.uniforms.u_time.value = clock.getElapsedTime()
	})

	return <Icosahedron args={[1, 64]} material={material} />
}

// ===================================================
// shader
const vertexShader = `  
uniform float u_time;
uniform float u_speed;
uniform float u_density;
uniform float u_strength;

varying vec3 v_normal;

${noise}

void main() {
  // noise
  float t = u_time * u_speed;
  float distortion = pnoise((normal + t) * u_density, vec3(10.0)) * u_strength;
  vec3 pos = position + (normal * distortion);

	v_normal = normal;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}
`

const fragmentShader = `
varying vec3 v_normal;

void main() {
	vec3 color = v_normal;

  gl_FragColor = vec4(color, 1.0);
}
`
