import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei/core'

const Cube = () =>{

    return(
        <mesh>
            <boxBufferGeometry />
            <meshBasicMaterial color={"red"}/>
        </mesh>
    )
} 

function Box() {
  return (
    <div>
      <Canvas >
        <Cube />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default Box