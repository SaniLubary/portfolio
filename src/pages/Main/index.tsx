import { OrbitControls } from '@react-three/drei'
import { Canvas, Euler, Vector3 } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import Model from '../../components/Santi'
import { Description, DescriptionText, DescriptionButton, ModelContainer } from './styles'
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
      <div className='dissapearLeft'>
        {/* Left */}
        <Description>
          <DescriptionText>
            Hola! Soy Santi
          </DescriptionText>
          <DescriptionText large>
            Desarrollador Web<br />
            Full - Stack
          </DescriptionText>
          <DescriptionButton>
            descargar cv
          </DescriptionButton>
        </Description>
      </div>
      {/* Right */}
      <ModelContainer className="dissapearRight">
        <Suspense fallback={null}>
          <Canvas className='animate--appear'>
            {/* <hemisphereLight /> */}
            <OrbitControls />
            <directionalLight position={[5, 1, 10]} intensity={1} />
            <Model position={position} rotation={rotation} scale={scale} />
          </Canvas>
        </Suspense>
      </ModelContainer>
    </Body>
  )
}
