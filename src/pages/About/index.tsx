import './styles.scss'
import MountainsSvg from '../../assets/project-images/mountains.svg'
import AboutWavesSeparator from '../../assets/project-images/AboutWavesSeparator.svg'
import AboutSectionBG from '../../assets/project-images/AboutSectionBG.svg'
import HobbieCard from '../../assets/project-images/hobbieCard.svg'

export default function About() {
  return (
    <div className="animate--appear about">
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
      {/* Right */}
      <img className='mountains dissapearCenter' src={MountainsSvg} alt="Mountains"/>

      {/* Hobbies Section */}
      <div className='hobbies dissapearCenter'>
        <div className='hobbies__content'> 
          <h1 className='hobbies__title'>Titulazo</h1>

          <div className='hobbies__music-card dissapearRight'>
            <a href="https://music.youtube.com/playlist?list=PLMurlrstkDbGlnshZxVDf9JuVo1qiSaRY&feature=share">Youtube Music link</a>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?controls=0&amp;list=PLMurlrstkDbGlnshZxVDf9JuVo1qiSaRY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        </div>
        
        {/* Hobbies BG */}
        <div className='hobbies__bg'>
          <img className="hobbies__bg__waves" src={AboutWavesSeparator} alt="Orange Waves"/>
          <img className='hobbies__bg__bg' src={AboutSectionBG} alt="Orange Background"/>
        </div>
      </div>

    </div>
  )
}
