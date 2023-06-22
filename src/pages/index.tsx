import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import { ShaderObject } from './ShaderObject'
import {  OrbitControls } from '@react-three/drei'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ul>
          <li>
            <Link href="/About">About</Link>
            <p>Hello Worlds</p>
          </li>
        </ul>
        <Canvas>
          <ShaderObject />
          <OrbitControls attach="orbitControls" />
        </Canvas>
      </div>
    </main>
  )
}