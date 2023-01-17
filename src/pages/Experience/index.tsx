import React, { useState } from "react";
import "./styles.scss";

// Assets
import MountainsSvg from "../../assets/project-images/mountains.svg";
import adusSvg from "../../assets/icons/workPlaces/adus.svg";
import andesSvg from "../../assets/icons/workPlaces/andes.svg";
import globantSvg from "../../assets/icons/workPlaces/globant.svg";
import muniSvg from "../../assets/icons/workPlaces/muni.svg";
import { WavesSvg } from "../../components/atoms/WaveSvg";

// Components
import GlobantDescription from "./GlobantDescription";
import { Description, DescriptionText } from "../Main/styles";
import { Body, BottomSection, UnderWavesSection } from "../../Styles/Styles";

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
      <Body className="animate--appear about">
        {/* MountainsSvg */}
        <img className="dissapearCenter absolute left-24 -scale-x-100" src={MountainsSvg} alt="Mountains background" />

        {/* Info on right side */}
        <div className="flex flex-col dissapearRight absolute right-24 justify-end">
          <MainTitle />

          <div className="flex justify-end items-center align-middle">
            {workPlacesLogos.map(work => {
              return <img onClick={() => updateDescription(work.description)} className="p-2 grayToColor cursor-pointer" src={work.src} alt={work.alt} />
            })}
          </div>

          <div className="w-2/5 text-right self-end" style={{ color: '#EEEEEE' }}>
            {description && description}
          </div>
        </div>
      </Body>

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

function MainTitle() {
  return <Description>
    <DescriptionText className="text-right">
      Where
    </DescriptionText>
    <DescriptionText className="text-right">
      I've worked at
    </DescriptionText>
  </Description>;
}
