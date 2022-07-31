// Styles
import "./styles.scss";
import { Body } from "../../Styles/Styles";
import { Description, DescriptionText } from "../Main/styles";

// Components
import Card from "../../components/Card";

// Assets
import MountainsSvg from "../../assets/project-images/mountains.svg";
import AboutWavesSeparator from "../../assets/project-images/AboutWavesSeparator.svg";

import { catos, art, music } from "./cardsInfo";

export default function About() {
  return (
    <div>
      <Body className="animate--appear about">
        {/* MountainsSvg */}
        <img className="mountains" src={MountainsSvg} alt="Mountains" />

        {/* Left */}
        <div className="left-desc dissapearLeft">
          <div className="left-desc__desc">
            <Description>
              <DescriptionText>I love</DescriptionText>
            </Description>
          </div>
        </div>
      </Body>

      {/* Hobbies Section */}
      <div className="hobbies dissapearCenter">
        <img
          className="hobbies__orange-wave"
          src={AboutWavesSeparator}
          alt="Orange Waves"
        />
        <div className="hobbies__content">
          <h1 className="hobbies__title">
            En mis timepos libres tambien <span className="highlight-redish">amo</span>
          </h1>

          <div className="hobbies__cards">
            <Card cardInfoInit={art}></Card>
            <Card cardInfoInit={catos}></Card>
            <Card cardInfoInit={music}></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
