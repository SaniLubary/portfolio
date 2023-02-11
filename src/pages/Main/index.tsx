import { Suspense, useEffect } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, Euler, Vector3 } from '@react-three/fiber'

import Model from '../../components/atoms/Santi'
import { DescriptionButton } from './styles'
import { MainModelContainer } from "./MainModelContainer"
import { Text } from '../../components/atoms/Text'

// 3D Model values
const position: Vector3 = [2.5, 0, 0]
const rotation: Euler = [0.2, -0.6, 0.2]
const scale = 0.7

export default function Main() {
  useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className='animate--appear'
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        gridTemplateRows: 'repeat(8, minmax(0, 1fr))'
      }}
    >
      {/* Left */}
      <div
        className='dissapearLeft z-10'
        style={{
          gridColumn: '2/8',
          gridRow: '5/8',
        }}
      >
        <Text size='medium'>
          Hi! I'm Santi
        </Text>
        <Text size='large'>
          Web UI Developer
        </Text>
        <DescriptionButton style={{ fontSize: 16 }}>
          descargar cv
        </DescriptionButton>
      </div>
      {/* Right */}
      <MainModelContainer className="animate--appear dissapearRight" >
        <Suspense fallback={null}>
          <Canvas>
            <OrbitControls />
            <hemisphereLight groundColor={'#00ADB5'} intensity={0.1} />
            <directionalLight color={'#00ADB5'} position={[5, 1, -19]} intensity={0.4} />
            <directionalLight color={'#00ADB5'} position={[-500, 1, -100]} intensity={0.3} />
            <directionalLight position={[5, 1, 10]} intensity={1} />
            <Model laptop={true} position={position} rotation={rotation} scale={scale} />
          </Canvas>
        </Suspense>
      </MainModelContainer >
    </div>
  )
}
