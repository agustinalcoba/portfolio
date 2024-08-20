/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 .\public\models\Stapler.glb 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Stapler(props) {
  const { scene } = useGLTF('./models/Stapler.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.Bone} />
      <skinnedMesh geometry={nodes.Bottom.geometry} material={materials.Stapler} skeleton={nodes.Bottom.skeleton} />
      <skinnedMesh geometry={nodes.Teeth.geometry} material={materials.StaplerMetal} skeleton={nodes.Teeth.skeleton} />
      <skinnedMesh geometry={nodes.Top.geometry} material={materials.Stapler} skeleton={nodes.Top.skeleton} />
    </group>
  )
}

useGLTF.preload('./models/Stapler.glb')
