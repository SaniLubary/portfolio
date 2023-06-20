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
import { device } from "../../utils/breakpoints";
import { useMediaQuery } from "../../utils/useMediaQuery";

const workPlacesLogos = [
  { src: globantSvg, alt: 'Globant logo', description: <GlobantDescription /> },
  { src: andesSvg, alt: 'Andes logo', description: <AndesDescription /> },
  { src: muniSvg, alt: 'Muni logo', description: <MuniDescription /> },
  { src: adusSvg, alt: 'Adus logo', description: <AdusDescription /> },
]

export default function Experience() {
  const [description, setDescription] = useState<null | string | React.ReactElement>(workPlacesLogos[0].description)
  const matchesLaptopAndUp = useMediaQuery(device.laptop)

  function handleLogoClick(elem: null | string | React.ReactElement) {
    setDescription(elem)
  }

  return (
    <>
      <InfoWithMountains flip={true}>
        <>
          <div className="dissapearRight z-50"
            style={{
              gridColumn: matchesLaptopAndUp ? '6/12' : '1/12',
              gridRow: '2/4',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <ExperienceTitle />

            <div
              className="flex justify-end items-center align-middle"
              style={{
                flexDirection: matchesLaptopAndUp ? 'row' : 'column',
                alignItems: matchesLaptopAndUp ? 'center' : 'end',
              }}>
              {workPlacesLogos.map(work => {
                return <img key={work.alt} onClick={() => handleLogoClick(work.description)} className="p-2 grayToColor cursor-pointer" src={work.src} alt={work.alt} />
              })}
            </div>

            <div className="w-4/5 flex flex-col text-right self-end" style={{ color: '#EEEEEE' }}>
              {description && description}
            </div>
          </div>
        </>
      </InfoWithMountains>

    </>
  );
}


