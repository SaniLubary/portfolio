import { MutableRefObject, Suspense, useEffect, useRef, useState } from "react";

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
import { gsap } from "gsap";
import { WavesSvg } from "../../components/atoms/WaveSvg";
import { Text } from "../../components/atoms/Text";
import { device } from "../../utils/breakpoints";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { colors } from "../../components/enums";

// 3D Model values
const position: Vector3 = [-0.3, 1, 0]
const rotation: Euler = [0.8, -5.9, -0.5]
const scale = 0.65

const TextShadow = ({ children }: any) => {
  return (
    <b style={{ color: colors.orange, textShadow: "3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>
      {children}
    </b>
  )
}

const TEXTS = [
  <Text size='medium'>projects with a <TextShadow>positive impact</TextShadow></Text>,
  <Text size='medium'>working along <TextShadow>cool people</TextShadow></Text>,
  <Text size='medium'>continuously  <TextShadow>improving</TextShadow></Text>
]

export default function About() {
  const canvasRef = useRef<any | null>(null)
  const textRef = useRef<any | null>(null)
  const [textI, setTextI] = useState(0)
  const matchesLaptopAndUp = useMediaQuery(device.laptop)

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

  const loopTextsAnimation = (ref: MutableRefObject<any>) => {
    const tl = gsap.timeline()
    tl.repeat(-1)
    tl
      .fromTo(ref.current, { opacity: 0 }, {
        opacity: 1,
        duration: 2
      })
      .fromTo(ref.current, { opacity: 1 }, {
        duration: 0.5,
        opacity: 0,
        ease: 'power2.ease'
      })
      .eventCallback('onRepeat', nextText)
  }

  const nextText = () => {
    setTextI((lastTextI) => TEXTS[lastTextI + 1] ? lastTextI + 1 : 0)
  }

  useEffect(() => {
    if (canvasRef) {
      floatAnimation(canvasRef)
    }
    if (textRef) {
      loopTextsAnimation(textRef)
    }
  }, [])

  return (
    <>
      <InfoWithMountains>
        <>
          <div className="dissapearLeft z-50" style={{
            gridColumn: matchesLaptopAndUp ? '2/8' : '2/12',
            gridRow: matchesLaptopAndUp ? '2/2' : '1/3',
            marginTop: matchesLaptopAndUp ? '' : '6em'
          }}>
            <div className="z-50">
              <Text size='large'>I love</Text>
              <div style={{ display: 'flex' }}>
                <Text size='medium'>
                  {`>`}
                </Text>
                <div style={{ marginLeft: '24px' }} ref={textRef}>{TEXTS[textI]}</div>
              </div>
            </div>
          </div>
          <BottomSection className="dissapearCenter" style={{
            gridColumn: '1/13',
            gridRow: matchesLaptopAndUp ? '4/9' : '3/9'
          }}>
            <WavesSvg />

            <UnderWavesSection>
              <h1 className="hobbies__title">
                On my free time I also love
              </h1>

              <div className="hobbies__cards">
                <Card data={art}></Card>
                <Card data={catos}></Card>
                <Card data={music}></Card>
              </div>

              <ModelContainer style={{
                top: matchesLaptopAndUp ? '' : '-2em',
                transform: matchesLaptopAndUp ? '' : 'scale(0.6)',
                left: matchesLaptopAndUp ? '' : '3  em'
              }} leftSide={true} className="dissapearRight">
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
      </InfoWithMountains>

    </>
  );
}
