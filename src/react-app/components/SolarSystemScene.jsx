import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Stars, Html } from '@react-three/drei'
import { TextureLoader, DoubleSide } from 'three'

// Helper: load only the textures that are actually provided and map them back to keys
function useOptionalTextures(obj) {
  const keys = Object.keys(obj)
  const presentKeys = keys.filter(k => obj[k]) // keys with a truthy URL
  const urls = presentKeys.map(k => obj[k])
  // useLoader accepts an array (can be empty). It returns an array of textures in same order as urls.
  const loaded = useLoader(TextureLoader, urls)

  const result = {}
  let idx = 0
  keys.forEach(k => {
    if (obj[k]) {
      result[k] = loaded[idx++] || null
    } else {
      result[k] = null
    }
  })
  return result
}

function Planet({ name, radius = 1, distance = 0, rotationSpeed = 0.01, textures = {}, tilt = 0 }) {
  const mesh = useRef()
  const loaded = useOptionalTextures(textures)

  useFrame((state, delta) => {
    if (mesh.current) mesh.current.rotation.y += rotationSpeed * delta * 0.6
  })

  return (
    <group position={[distance, 0, 0]} rotation={[tilt, 0, 0]}>
      <mesh ref={mesh}>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial
          map={loaded.map || null}
          normalMap={loaded.normalMap || null}
          metalness={0}
          roughness={0.6}
        />
      </mesh>

      {/* Rings (e.g. Saturn) */}
      {loaded.ring && (
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[radius * 1.2, radius * 2.5, 64]} />
          <meshBasicMaterial map={loaded.ring} transparent={true} side={DoubleSide} />
        </mesh>
      )}

      <Html distanceFactor={10} position={[0, radius + 0.3, 0]}>
        <div style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>{name}</div>
      </Html>
    </group>
  )
}

export default function SolarSystemScene() {
  // texture filepaths in public/textures (change to match your filenames)
  const textures = {
    earth: { map: '/textures/earth_daymap.jpg', normalMap: '/textures/earth_normal.jpg', specularMap: '/textures/earth_specular.jpg' },
    mars: { map: '/textures/mars_daymap.jpg', normalMap: '/textures/mars_normal.jpg' },
    jupiter: { map: '/textures/jupiter_daymap.jpg' },
    saturn: { map: '/textures/saturn_daymap.jpg', ring: '/textures/saturn_ring.png' },
    neptune: { map: '/textures/neptune_daymap.jpg' },
    venus: { map: '/textures/venus_daymap.jpg' },
    mercury: { map: '/textures/mercury_daymap.jpg' },
  }

  return (
    <div style={{ width: '100vw', height: '100vh', background: 'radial-gradient(ellipse at center, #000010 0%, #000000 60%)' }}>
      <Canvas camera={{ position: [0, 6, 18], fov: 45 }}>
        <ambientLight intensity={0.15} />
        {/* Sun light at origin */}
        <pointLight position={[0, 0, 0]} intensity={2.25} decay={2} />

        <Suspense fallback={null}>
          <Stars radius={300} depth={60} count={4000} factor={7} fade={true} />

          {/* Sun - use Standard material so emissive props work */}
          <mesh>
            <sphereGeometry args={[1.6, 64, 64]} />
            <meshStandardMaterial emissive={'#ffd66b'} emissiveIntensity={2} toneMapped={false} />
          </mesh>

          {/* Planets */}
          <Planet name="Mercury" radius={0.38} distance={3.5} rotationSpeed={0.02} textures={textures.mercury} />
          <Planet name="Venus" radius={0.95} distance={5} rotationSpeed={0.008} textures={textures.venus} />
          <Planet name="Earth" radius={1} distance={7} rotationSpeed={0.02} textures={textures.earth} tilt={0.41} />
          <Planet name="Mars" radius={0.53} distance={9} rotationSpeed={0.018} textures={textures.mars} />
          <Planet name="Jupiter" radius={2.2} distance={12.5} rotationSpeed={0.06} textures={textures.jupiter} />
          <Planet name="Saturn" radius={1.85} distance={16} rotationSpeed={0.05} textures={textures.saturn} />
          <Planet name="Neptune" radius={1.2} distance={20} rotationSpeed={0.04} textures={textures.neptune} />

        </Suspense>

        <OrbitControls enablePan enableZoom enableRotate />
      </Canvas>
    </div>
  )
}