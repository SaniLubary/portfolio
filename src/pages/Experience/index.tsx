import React, { useState } from "react";
import "./styles.scss";

// Assets
import adusSvg from "../../assets/icons/workPlaces/adus.svg";
import andesSvg from "../../assets/icons/workPlaces/andes.svg";
import globantSvg from "../../assets/icons/workPlaces/globant.svg";
import muniSvg from "../../assets/icons/workPlaces/muni.svg";
import { WavesSvg } from "../../components/atoms/WaveSvg";

// Components
import GlobantDescription from "./GlobantDescription";
import { BottomSection, UnderWavesSection } from "../../Styles/Styles";
import InfoWithMountains from "../../components/templates/InfoWithMountains";
import ExperienceTitle from "../../components/molecules/ExperienceTitle";

const workPlacesLogos = [
  { src: globantSvg, alt: 'Globant logo', description: <GlobantDescription /> },
  { src: andesSvg, alt: 'Andes logo', description: '' },
  { src: muniSvg, alt: 'Muni logo', description: '' },
  { src: adusSvg, alt: 'Adus logo', description: '' },
]

export default function Experience() {
  const [description, setDescription] = useState<null | string | React.ReactElement>(null)

  function updateDescription(elem: null | string | React.ReactElement) {
    setDescription(elem)
  }

  return (
    <>
      <InfoWithMountains flip={true}>
        <div className="flex flex-col dissapearRight absolute right-24 justify-end">
          <ExperienceTitle />

          <div className="flex justify-end items-center align-middle">
            {workPlacesLogos.map(work => {
              return <img onClick={() => updateDescription(work.description)} className="p-2 grayToColor cursor-pointer" src={work.src} alt={work.alt} />
            })}
          </div>

          <div className="w-2/5 text-right self-end" style={{ color: '#EEEEEE' }}>
            {description && description}
          </div>
        </div>
      </InfoWithMountains>

      {/* BottomSection Section */}
      <BottomSection className="dissapearCenter">
        <div style={{ marginTop: '8em' }}>
          <WavesSvg />
        </div>
        <UnderWavesSection>
          <h1 className="hobbies__title">
            En mis tiempos libres tambien disfruto
          </h1>
        </UnderWavesSection>
      </BottomSection>
    </>
  );
}


