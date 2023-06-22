import React, { useState } from "react";
import "./styles.scss";

// Assets
import adusSvg from "/assets/icons/workPlaces/adus.svg";
import andesSvg from "/assets/icons/workPlaces/andes.svg";
import globantSvg from "/assets/icons/workPlaces/globant.svg";
import muniSvg from "/assets/icons/workPlaces/muni.svg";
import globantLogo from "/assets/globantLogo.png"

// Components
import GlobantDescription from "./GlobantDescription";
import InfoWithMountains from "../../components/templates/InfoWithMountains";
import ExperienceTitle from "../../components/molecules/ExperienceTitle";
import AndesDescription from "./AndesDescription";
import MuniDescription from "./MuniDescription";
import AdusDescription from "./AdusDescription";
import { device } from "../../utils/breakpoints";
import { useMediaQuery } from "../../utils/useMediaQuery";
import { colors } from "../../components/enums";
import Card from "../../components/organisms/Card";

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
              gridColumn: matchesLaptopAndUp ? '6/12' : '2/12',
              gridRow: matchesLaptopAndUp ? '2/4' : '2/6',
              display: 'flex',
              flexDirection: 'column',
              alignItems: matchesLaptopAndUp ? 'end' : 'center',
              gap: matchesLaptopAndUp ? '' : '50px',
            }}
          >
            <ExperienceTitle />

            {!matchesLaptopAndUp && (
              <Card cardInfoInit={
                {
                  images: [
                    {
                      path: globantLogo,
                      selected: true,
                      id: 'globant',
                      alt: 'globant logo'
                    },
                    {
                      path: globantLogo,
                      id: 'other',
                      selected: false,
                      alt: 'globant logo'
                    }
                  ],
                  title: 'Globant',
                  details: [{ imgId: 'globant', text: 'I worked at globant doing this and that' }, { imgId: 'other', text: 'Other place' }]
                }
              } />
            )}

            {matchesLaptopAndUp && (
              <>
                <div
                  style={{
                    display: 'flex',
                    textAlign: 'center',
                    flexDirection: matchesLaptopAndUp ? 'row' : 'column',
                    alignItems: 'center',
                    justifyContent: matchesLaptopAndUp ? 'end' : 'center',
                    gap: matchesLaptopAndUp ? '' : '50px',
                  }}>
                  {workPlacesLogos.map(work => {
                    return <img key={work.alt} onClick={() => handleLogoClick(work.description)} className="p-2 grayToColor cursor-pointer" src={work.src} alt={work.alt} />
                  })}
                </div>
                <div className="w-4/5 flex flex-col text-right self-end" style={{ color: colors.white }}>
                  {description && description}
                </div>
              </>
            )}
          </div>
        </>
      </InfoWithMountains>

    </>
  );
}


