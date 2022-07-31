import "./styles.scss";

import ExperienceSlider from "../../components/ExperienceSlider";

import portfolioSketch from "../../assets/project-images/portfolio sketch.png";
import portfolioProcess1 from "../../assets/project-images/portfolio process 1.png";
import portfolioProcess2 from "../../assets/project-images/portfolio process 2.png";

export default function Experience() {
  return (
    <div className="show body">
      <ExperienceSlider rightSide={false}>
        <img
          className="rounded-xl h-40"
          src={portfolioSketch}
          alt="portfolio sketch"
        />
        <img
          className="rounded-xl h-40"
          src={portfolioProcess1}
          alt="portfolio process 1"
        />
        <img
          className="rounded-xl h-40"
          src={portfolioProcess2}
          alt="portfolio process 2"
        />
      </ExperienceSlider>
    </div>
  );
}
