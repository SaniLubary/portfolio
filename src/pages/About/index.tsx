import { MutableRefObject, Suspense, useEffect, useRef } from "react";

// Styles
import "./styles.scss";
import { Body } from "../../Styles/Styles";
import { Description, DescriptionText } from "../Main/styles";
import { ModelContainer } from "./styles";
import tw from "tailwind-styled-components"

// Components
import Card from "../../components/Card";

// Assets
import MountainsSvg from "../../assets/project-images/mountains.svg";

import { catos, art, music } from "./cardsInfo";
import styled from "styled-components";
import { Canvas, Euler, Vector3 } from "@react-three/fiber";
import Model from "../../components/Santi";
import gsap from "gsap";

const Hobbies = tw.div`
  relative
  text-white
  overflow-hidden
`
const UnderWavesSection = styled.div`
  top: 24%;
  padding-bottom: 10em;
  background: linear-gradient(180deg, #45B888 0%, #40A479 21.57%, #00565A 108.2%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `

// 3D Model values
const position: Vector3 = [-0.3, 1, 0]
const rotation: Euler = [0.8, -5.9, -0.5]
const scale = 0.65


export default function About() {
  useEffect(() => {
    var c = document.getElementById("myCanvas") as HTMLCanvasElement;
    var ctx = c.getContext("2d");
    if (!ctx) return

    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
  }, []);

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
    <div>
      <Body className="animate--appear about">
        {/* MountainsSvg */}
        <img className="mountains dissapearCenter" src={MountainsSvg} alt="Mountains" />

        {/* Left */}
        <div className="left-desc dissapearLeft">
          <div className="left-desc__desc">
            <Description>
              <DescriptionText>I love</DescriptionText>
            </Description>
          </div>

          <canvas
            id="myCanvas"
            width="200"
            height="100"
            style={{ border: "1px solid #d3d3d3" }}
          >
            Your browser does not support the HTML canvas tag.
          </canvas>
        </div>
      </Body>

      {/* Hobbies Section */}
      <Hobbies className="dissapearCenter">
        <svg className="m-auto scale-x-150" width="1512" height="185" viewBox="0 0 1512 185" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_589_91)">
            <path className="dissapearLeft" opacity="0.25" d="M1512 185L1512 113.636C1451.78 79.4112 1381.48 64.0408 1312.92 70.4695C1224.27 78.7483 1141.14 121.822 1052.35 128.282C959.314 135.004 866.452 102.259 777.42 73.9229C690.14 46.1729 603.162 35.5662 513.576 53.7579C468.027 63.0079 425.565 81.2613 381.969 98.9904C265.243 146.458 109.62 207.031 -7.07174e-06 104.109L0 185L1512 185Z" fill="#45B888" />
            <path className="dissapearRight" opacity="0.5" d="M1512 185L1512 160.626C1495.62 128.082 1477.17 97.3408 1451.91 73.9228C1386.74 13.4586 1304.1 13.8749 1229.03 43.8141C1189.78 59.462 1153.32 84.0054 1116.05 105.172C1064.49 134.464 1009.29 176.089 951.199 181.747C905.512 186.141 861.865 167.225 826.963 133.092C786.933 93.9492 748.44 37.5087 696.389 20.5504C645.435 3.91579 593.888 30.8641 546.286 57.9821C498.683 85.1 451.584 118.107 398.966 124.351C323.707 133.37 256.234 89.0775 186.152 64.4725C148.1 51.1217 111.812 54.9604 76.4191 76.0351C48.1572 92.8238 15.939 117.552 -2.88962e-06 151.947L0 185L1512 185Z" fill="#45B888" />
            <path className="dissapearLeft" d="M1512 185L1512 176.32C1323.09 94.0416 1116.25 75.0483 912.454 119.371C858.274 131.15 806.324 150.39 751.666 160.164C677.326 173.468 609.941 141.294 543.06 105.589C468.808 65.9525 395.64 38.1717 313.488 46.25C204.46 57.0417 96.1883 116.72 -6.99492e-07 176.999L0 185L1512 185Z" fill="#45B888" />
          </g>
          <defs>
            <clipPath id="clip0_589_91">
              <rect width="1512" height="185" fill="white" transform="translate(1512 185) rotate(180)" />
            </clipPath>
          </defs>
        </svg>

        <UnderWavesSection>
          <h1 className="hobbies__title">
            En mis tiempos libres tambien <span className="highlight-redish">amo</span>
          </h1>

          <div className="hobbies__cards">
            <Card cardInfoInit={art}></Card>
            <Card cardInfoInit={catos}></Card>
            <Card cardInfoInit={music}></Card>
          </div>

          <ModelContainer onLeft className="dissapearRight">
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
      </Hobbies>
    </div>
  );
}
