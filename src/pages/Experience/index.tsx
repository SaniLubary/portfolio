// Assets
import globantLogo from "/assets/icons/workPlaces/globantLogo.png"
import andesLogo from "/assets/icons/workPlaces/andesLogo.png"
import muniLogo from "/assets/icons/workPlaces/muni.png";
import adusLogo from "/assets/icons/workPlaces/adus.jpg";


// Components
import GlobantDescription from "./GlobantDescription";
import InfoWithMountains from "../../components/templates/InfoWithMountains";
import ExperienceTitle from "../../components/molecules/ExperienceTitle";
import { device } from "../../utils/breakpoints";
import { useMediaQuery } from "../../utils/useMediaQuery";
import Card from "../../components/organisms/Card";
import AndesDescription from "./AndesDescription";
import MuniDescription from "./MuniDescription";
import AdusDescription from "./AdusDescription";

const cardData = {
  images: [
    {
      path: globantLogo,
      selected: true,
      id: 'globant',
      alt: 'globant logo'
    },
    {
      path: andesLogo,
      id: 'andes',
      selected: false,
      alt: 'andes logo'
    },
    {
      path: muniLogo,
      id: 'muni',
      selected: false,
      alt: 'municipallity logo'
    },
    {
      path: adusLogo,
      id: 'adus',
      selected: false,
      alt: 'adus logo'
    }
  ],
  details: [
    { title: 'Globant', imgId: 'globant', text: <GlobantDescription /> },
    { title: 'Andes', imgId: 'andes', text: <AndesDescription /> },
    { title: 'Municipality of Neuquen', imgId: 'muni', text: <MuniDescription /> },
    { title: 'ADUS / IPVU', imgId: 'adus', text: <AdusDescription /> }
  ]
}

export default function Experience() {
  const matchesLaptopAndUp = useMediaQuery(device.laptop)

  return (
    <>
      <InfoWithMountains flip={true}>
        <>
          <div className="dissapearRight z-50"
            style={{
              gridColumn: matchesLaptopAndUp ? '6/12' : '2/12',
              gridRow: matchesLaptopAndUp ? '2/5' : '2/6',
              display: 'flex',
              flexDirection: 'column',
              alignItems: matchesLaptopAndUp ? 'end' : 'center',
              gap: matchesLaptopAndUp ? '2rem' : '50px',
            }}
          >
            <ExperienceTitle />

            <Card data={cardData} />

          </div>
        </>
      </InfoWithMountains>

    </>
  );
}


