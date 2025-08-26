import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

// Floating Cube Component
const FloatingCube = ({ position, rotation, color, size }: any) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.1}
        wireframe
        wireframeLinewidth={1}
      />
    </mesh>
  )
}

// Floating Sphere Component
const FloatingSphere = ({ position, color, size }: any) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.2
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.2
      meshRef.current.position.x = position[0] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.08}
        wireframe
        wireframeLinewidth={1}
      />
    </mesh>
  )
}

// Floating Torus Component
const FloatingTorus = ({ position, color, size }: any) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.4
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.7) * 0.4
      meshRef.current.position.z = position[2] + Math.sin(state.clock.elapsedTime * 0.6) * 0.4
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[size, size * 0.3, 8, 16]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.06}
        wireframe
        wireframeLinewidth={1}
      />
    </mesh>
  )
}

// Floating Octahedron Component
const FloatingOctahedron = ({ position, color, size }: any) => {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.9) * 0.6
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[size]} />
      <meshStandardMaterial 
        color={color} 
        transparent 
        opacity={0.07}
        wireframe
        wireframeLinewidth={1}
      />
    </mesh>
  )
}

// Main 3D Background Component
const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient Light */}
        <ambientLight intensity={0.4} />
        
        {/* Directional Light */}
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
        
        {/* Point Light */}
        <pointLight position={[-10, -10, -5]} intensity={0.3} />

        {/* Floating 3D Elements */}
        <FloatingCube 
          position={[-8, 2, -3]} 
          rotation={[0.5, 0.3, 0.2]} 
          color="#0ea5e9" 
          size={0.8} 
        />
        <FloatingCube 
          position={[6, -3, -2]} 
          rotation={[0.2, 0.8, 0.1]} 
          color="#eab308" 
          size={0.6} 
        />
        <FloatingCube 
          position={[-4, -4, -4]} 
          rotation={[0.7, 0.1, 0.5]} 
          color="#64748b" 
          size={0.7} 
        />

        <FloatingSphere 
          position={[7, 4, -3]} 
          color="#0ea5e9" 
          size={0.5} 
        />
        <FloatingSphere 
          position={[-6, -2, -2]} 
          color="#eab308" 
          size={0.4} 
        />
        <FloatingSphere 
          position={[3, -5, -4]} 
          color="#64748b" 
          size={0.6} 
        />

        <FloatingTorus 
          position={[-2, 5, -3]} 
          color="#0ea5e9" 
          size={0.4} 
        />
        <FloatingTorus 
          position={[8, -1, -2]} 
          color="#eab308" 
          size={0.3} 
        />
        <FloatingTorus 
          position={[-7, 1, -4]} 
          color="#64748b" 
          size={0.5} 
        />

        <FloatingOctahedron 
          position={[4, 3, -3]} 
          color="#0ea5e9" 
          size={0.4} 
        />
        <FloatingOctahedron 
          position={[-5, 4, -2]} 
          color="#eab308" 
          size={0.3} 
        />
        <FloatingOctahedron 
          position={[1, -6, -4]} 
          color="#64748b" 
          size={0.5} 
        />

        {/* Additional smaller elements for depth */}
        <FloatingCube 
          position={[9, 1, -5]} 
          rotation={[0.3, 0.6, 0.4]} 
          color="#0ea5e9" 
          size={0.3} 
        />
        <FloatingSphere 
          position={[-9, 3, -3]} 
          color="#eab308" 
          size={0.2} 
        />
        <FloatingTorus 
          position={[5, 6, -4]} 
          color="#64748b" 
          size={0.2} 
        />
        <FloatingOctahedron 
          position={[-3, -7, -2]} 
          color="#0ea5e9" 
          size={0.2} 
        />
      </Canvas>
    </div>
  )
}

export default ThreeDBackground
