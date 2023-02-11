import React, { useState } from "react";
import "./styles.scss";

// Assets
import adusSvg from "/assets/icons/workPlaces/adus.svg";
import andesSvg from "/assets/icons/workPlaces/andes.svg";
import globantSvg from "/assets/icons/workPlaces/globant.svg";
import muniSvg from "/assets/icons/workPlaces/muni.svg";

// Components
import GlobantDescription from "./GlobantDescription";
import InfoWithMountains from "../../components/templates/InfoWithMountains";
import ExperienceTitle from "../../components/molecules/ExperienceTitle";
import AndesDescription from "./AndesDescription";
import MuniDescription from "./MuniDescription";
import AdusDescription from "./AdusDescription";
import { WavesSvg } from "../../components/atoms/WaveSvg";
import { BottomSection } from "../../components/templates/BottomSection";

const workPlacesLogos = [
  { src: globantSvg, alt: 'Globant logo', description: <GlobantDescription /> },
  { src: andesSvg, alt: 'Andes logo', description: <AndesDescription /> },
  { src: muniSvg, alt: 'Muni logo', description: <MuniDescription /> },
  { src: adusSvg, alt: 'Adus logo', description: <AdusDescription /> },
]

export default function Experience() {
  const [description, setDescription] = useState<null | string | React.ReactElement>(workPlacesLogos[0].description)

  function handleLogoClick(elem: null | string | React.ReactElement) {
    setDescription(elem)
  }

  return (
    <>
      <InfoWithMountains flip={true}>
        <>
          <div className="dissapearRight z-50"
            style={{
              gridColumn: '6/12',
              gridRow: '2/4',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ExperienceTitle />

            <div className="flex justify-end items-center align-middle">
              {workPlacesLogos.map(work => {
                return <img key={work.alt} onClick={() => handleLogoClick(work.description)} className="p-2 grayToColor cursor-pointer" src={work.src} alt={work.alt} />
              })}
            </div>

            <div className="w-4/5 text-right self-end" style={{ color: '#EEEEEE' }}>
              {description && description}
            </div>
          </div>
          <BottomSection className="dissapearCenter" style={{
            gridColumn: '1/13',
            gridRow: '5/8'
          }}>
            <WavesSvg />
          </BottomSection>
        </>
      </InfoWithMountains>

    </>
  );
}


