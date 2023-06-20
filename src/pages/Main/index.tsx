import { Suspense, useEffect, useState } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas, Euler, Vector3 } from '@react-three/fiber'
import { device } from "../../utils/breakpoints";
import { useMediaQuery } from "../../utils/useMediaQuery";

import Model from '../../components/atoms/Santi'
import { DescriptionButton } from './styles'
import { MainModelContainer } from "./MainModelContainer"
import { Text } from '../../components/atoms/Text'
import styled from 'styled-components';

const MainContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: repeat(8, minmax(0, 1fr));
    @media ${device.maxTablet} {
      display: flex;
      height: 100vh;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  `

const Greetings = styled.div`
    grid-column: 2/8;
    @media ${device.tablet} {
      grid-row: 4/7;
    }
    @media ${device.laptop} {
      grid-row: 5/8;
    }
    @media ${device.maxTablet} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      width: 90%
    }
    &>button {
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      @media ${device.maxTablet} {
        width: 50%;
        margin: auto;
        background: #0000003c;

      }
    }
  `

// 3D Model values
const defaultPosition: Vector3 = [2.5, 0, 0]
const defaultRotation: Euler = [0.2, -0.6, 0.2]
const defaultScale = 0.7

export default function Main() {
  const matchesTabletAndUp = useMediaQuery(device.tablet)
  // 3D Model values
  const [position, setPosition] = useState<Vector3>(defaultPosition)
  const [rotation, setRotation] = useState<Euler>(defaultRotation)
  const [scale] = useState<number>(defaultScale)

  useEffect(() => {
    if (!matchesTabletAndUp) {
      setPosition([0.5, 0.5, -2])
      setRotation([.5, 0.6, -0.2])
    } else {
      setPosition(defaultPosition)
      setRotation(defaultRotation)
    }
  }, [matchesTabletAndUp])

  return (
    <MainContainer
      className='animate--appear'
    >
      {/* Left */}
      <Greetings
        className='dissapearLeft z-10'
      >
        <Text size='medium'>
          Hi! I'm Santi
        </Text>
        <br />
        <Text size='large' style={{
          textShadow: '5px 4px 0px rgba(255, 199, 0, 0.25), 2px 4px 0px rgba(255, 0, 0, 0.25)'
        }}>
          Web UI Developer
        </Text>
        <DescriptionButton style={{ fontSize: 16 }}>
          download cv
        </DescriptionButton>
      </Greetings>
      {/* Right */}
      <MainModelContainer style={{
        opacity: matchesTabletAndUp ? 1 : .5
      }} className="animate--appear dissapearRight" >
        <Suspense fallback={null}>
          <Canvas>
            <OrbitControls />
            <hemisphereLight groundColor={'#00ADB5'} intensity={0.1} />
            <directionalLight color={'#00ADB5'} position={[5, 1, -19]} intensity={0.4} />
            <directionalLight color={'#00ADB5'} position={[-500, 1, -100]} intensity={0.3} />
            <directionalLight position={[5, 1, 10]} intensity={1} />
            <Model bbanchor={true} laptop={true} position={position} rotation={rotation} scale={scale} />
          </Canvas>
        </Suspense>
      </MainModelContainer >
    </MainContainer >
  )
}
