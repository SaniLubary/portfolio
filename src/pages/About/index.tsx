import { MutableRefObject, Suspense, useEffect, useRef } from "react";

// Styles
import "./styles.scss";
import { BottomSection, UnderWavesSection } from "../../Styles/Styles";
import { ModelContainer } from "./styles";
import InfoWithMountains from "../../components/templates/InfoWithMountains"

// Components
import Card from "../../components/organisms/Card";

// Assets
import { catos, art, music } from "./cardsInfo";
import { Canvas, Euler, Vector3 } from "@react-three/fiber";
import Model from "../../components/atoms/Santi";
import gsap from "gsap";
import { WavesSvg } from "../../components/atoms/WaveSvg";
import { Text } from "../../components/atoms/Text";

// 3D Model values
const position: Vector3 = [-0.3, 1, 0]
const rotation: Euler = [0.8, -5.9, -0.5]
const scale = 0.65


export default function About() {
  const canvasRef = useRef<any | null>(null)

  const floatAnimation = (ref: MutableRefObject<any>) => {
    const tl = gsap.timeline()
    tl.repeat(-1)
    tl.yoyo(true)
    tl.to(ref.current,
      {
        duration: 3,
        scale: 1.1,
        y: '+=4',
        x: '+=3',
        rotation: '-=2',
        ease: 'power2.ease'
      })
  }

  useEffect(() => {
    if (canvasRef) {
      floatAnimation(canvasRef)
    }
  }, [])

  return (
    <>
      <InfoWithMountains>
        <div className="left-desc dissapearLeft">
          <div className="left-desc__desc">
            <Text size='large'>I love</Text>
            <Text size='large'>{`>`}</Text>
          </div>
        </div>
      </InfoWithMountains>

      <BottomSection className="dissapearCenter">
        <WavesSvg />

        <UnderWavesSection>
          <h1 className="hobbies__title">
            En mis tiempos libres tambien disfruto
          </h1>

          <div className="hobbies__cards">
            <Card cardInfoInit={art}></Card>
            <Card cardInfoInit={catos}></Card>
            <Card cardInfoInit={music}></Card>
          </div>

          <ModelContainer onLeft={true} className="dissapearRight">
            <Suspense fallback={null}>
              <Canvas ref={canvasRef} className='animate--appear'>
                <directionalLight color={'#00ADB5'} position={[5, 1, -19]} intensity={0.2} />
                <directionalLight color={'#00ADB5'} position={[-500, 1, -100]} intensity={1} />
                <directionalLight position={[5, 1, 10]} intensity={1} />
                <Model position={position} rotation={rotation} scale={scale} />
              </Canvas>
            </Suspense>
          </ModelContainer>
        </UnderWavesSection>
      </BottomSection>
    </>
  );
}
