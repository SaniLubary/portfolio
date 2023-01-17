import { OrbitControls } from '@react-three/drei'
import { Canvas, Euler, Vector3 } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import Model from '../../components/atoms/Santi'
import { Description, DescriptionText, DescriptionButton, MainModelContainer } from './styles'
import { Body } from '../../Styles/Styles'

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
    <Body className='animate--appear'>
      {/* Left */}
      <Description className='dissapearLeft'>
        <DescriptionText>
          Hola! Soy Santi
        </DescriptionText>
        <DescriptionText large>
          Desarrollador Web<br />
          Full - Stack
        </DescriptionText>
        <DescriptionButton style={{ fontSize: 16 }}>
          descargar cv
        </DescriptionButton>
      </Description>
      {/* Right */}
      <MainModelContainer className="animate--appear dissapearRight">
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
      </MainModelContainer>
    </Body>
  )
}
