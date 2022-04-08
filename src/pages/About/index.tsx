import './styles.scss'
import MountainsSvg from '../../assets/project-images/mountains.svg'
import AboutWavesSeparator from '../../assets/project-images/AboutWavesSeparator.svg'
import { Body } from '../../styles/styles'

export default function About() {
  return (
    <Body className="animate--appear about">
      {/* Left */}
      <div className="left-desc dissapearLeft">
        <div className="left-desc__desc">
          <h1 className="left-desc__title">
            Desarrollador <span className="highlight"> Full-Stack </span>
            <br />basado en la Patagonia
          </h1>
          <div className="left-desc__about-desc mt-5">
            Amo formar parte de projectos que tengan un<br /><span className="highlight">impacto positivo en la gente.</span><br />
          </div>
          <div className="left-desc__about-desc mt-2">
            Me interesa todo el proceso de desarrollo<br />
            Mi meta actual es fortalecerme en el <span className="highlight"> Front-End.</span>
          </div>
        </div>
      </div>

      {/* Hobbies Section */}
      <div className='hobbies dissapearCenter'>
        <img className='mountains' src={MountainsSvg} alt="Mountains" />

        <div styles={{}}>
          <img src={AboutWavesSeparator} alt="Orange Waves" />
          <div className='hobbies__content'>
            <h1 className='hobbies__title'>En mis timepos libres tambien <span>amo</span></h1>

            <div className='hobbies__cards'>
              <div className='hobbies__cards__card'>
                <div className="hobbies__cards__title">Art</div>
                Test text consectetur adipisicing elit. Laborum alias eos tenetur exercitationem pariatur cum fugiat
              </div>
              <div className='hobbies__cards__card'>
                <div className="hobbies__cards__title">Art</div>
                Test text consectetur adipisicing elit. Laborum alias eos tenetur exercitationem pariatur cum fugiat
              </div>
              <div className='hobbies__cards__card'>
                <div className="hobbies__cards__title">Art</div>
                Test text consectetur adipisicing elit. Laborum alias eos tenetur exercitationem pariatur cum fugiat
              </div>
              <div className='hobbies__cards__card'>
                <div className="hobbies__cards__title">Art</div>
                Test text consectetur adipisicing elit. Laborum alias eos tenetur exercitationem pariatur cum fugiat
              </div>
            </div>
          </div>
        </div>
      </div>

    </Body>
  )
}
