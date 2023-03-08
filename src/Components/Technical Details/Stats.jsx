/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/Modal/stats.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useStore } from "../../store/store";

const Stats = (props) => {
  const { nodes, materials } = useGLTF('./Modal/stats.gltf')
  let openExplode = useStore((r) => r.openExplode);

  return (
    <group {...props} dispose={null}>
      {openExplode && (
      <group position={[-0.36, 0.58, 1]}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} position={[-0.36, 0.58, 0]} scale={0.13} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.007']} position={[0, 0.24, 0]} scale={0.13} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.008']} position={[0.36, 0.43, 0]} scale={0.13} />
      <mesh geometry={nodes.Text001.geometry} material={nodes.Text001.material} position={[0.01, 1.54, 0.04]} rotation={[Math.PI / 2, 0, 0]} scale={0.18} />
    </group>
      )}
    </group>
  )
}

useGLTF.preload('./Modal/stats.gltf')

export default Stats;