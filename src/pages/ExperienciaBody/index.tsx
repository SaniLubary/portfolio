import ExperienceDetails from '../../components/ExperienceDetails';
import './styles.scss'

import andesLandingPage from '../../assets/project-images/andes landing page.png'
import andesApp from '../../assets/project-images/andes app.png'

import reactIcon from '../../assets/icons/react-icon.png'
import nodejsIcon from '../../assets/icons/nodejs-icon.png'
import dockerIcon from '../../assets/icons/docker-icon.png'
import githubIcon from '../../assets/icons/github-icon.png'
import linuxIcon from '../../assets/icons/linux-icon.png'
import angularIcon from '../../assets/icons/angular-icon.png'
import bootstrapIcon from '../../assets/icons/bootstrap-icon.png'
import jqueryIcon from '../../assets/icons/jquery-icon.png'
import phpIcon from '../../assets/icons/php-icon.png'
import rabbitmqIcon from '../../assets/icons/rabbitmq-icon.png'
import rxjsIcon from '../../assets/icons/rxjs-icon.png'
import TimelineIcon from "../../components/TimelineIcon";
import ExperienceSlider from '../../components/ExperienceSlider';


export default function ExperienciaBody() {
  return (
    <div className="show body container relative flex flex-col p-8 mx-auto">

      {/* EXPERIENCE TIMELINE */}

      <div className="grid custom-grid-template-cols-left grid-cols-3">
        <div className="flex flex-col jusfify-center items-center col-start-1 col-end-4 text-xl mb-36">
          Equipos de los que forme parte!
        </div>

        <div className='flex flex-col justify-center items-center'>
          <div className="top-dotted-line h-16"></div>
        </div>
        <div className='col-start-2 col-end-4'></div>

        <TimelineIcon text='Andes' />
        <ExperienceDetails
          detail={<>
            Full Stack developer, aprendiendo Angular, RxJs y MongoDB
          </>}
          imgs={<>
            <img className='w-8 h-8 mr-3' src={angularIcon} alt="icono de angular" />
            <img className='w-8 h-8 mr-3' src={rxjsIcon} alt="rxjs icon" />
            <img className='w-8 h-8' src={nodejsIcon} alt="nodejs icon" />
          </>} code={""} visit={""} toRight={false} />
        <ExperienceSlider>
          <img className="rounded-xl h-40" src={andesLandingPage} alt="andes landing page" />
          <img className="rounded-xl h-40" src={andesApp} alt="andes landing page" />
        </ExperienceSlider>

        <TimelineIcon text='Muni NQN' />
        <ExperienceDetails
          detail={<>
            Desarrolle proyectos de cero, en un ambiente rapido y dinamico.
            <br />Asesore y guie a los nuevos integrantes del equipo.
          </>}
          imgs={<>
            <img className='w-8 h-8 mr-3' src={reactIcon} alt="icono de react" />
            <img className='w-8 h-8 mr-3' src={phpIcon} alt="php icon" />
            <img className='w-8 h-8 mr-3' src={dockerIcon} alt="docker icon" />
            <img className='w-8 h-8' src={rabbitmqIcon} alt="rabbitmq icon" />
          </>} code={""} visit={""} toRight={false} />
        <div>12</div>

        <TimelineIcon text='ADUS / IPVU' />
        <ExperienceDetails
          detail={<>
            Aprendi tecnicas de trabajo en equipo y la aplicacion profesional de mis conocimientos.
          </>}
          imgs={<>
            <img className='w-8 h-8 mr-3' src={bootstrapIcon} alt="bootstrap de react" />
            <img className='w-8 h-8' src={jqueryIcon} alt="jquery icon" />
          </>} code={""} visit={""} toRight={false} />
        <div>18</div>
      </div>

      {/* PROJECTS TIMELINE */}

      <div className="grid mt-16 custom-grid-template-cols-right grid-cols-3">

        <div className="flex flex-col justify-center items-center col-start-1 col-end-4 text-xl mb-36">
          Projectos Personales!
        </div>

        <div className='col-start-1 col-end-3'></div>
        <div className='flex flex-col justify-center items-center'>
          <div className="top-dotted-line h-16"></div>
        </div>

        <div>6</div>
        <ExperienceDetails
          toRight={true}
          detail={<>
            Este es mi primer portfolio :D
            <div className="text-sm mt-5">Mi hermano modeló el 3D, también brindo feedback del diseño del sitio!Visita su perfil <a className='text-teal-400' href="#">aqui!</a></div>
          </>} imgs={undefined} code={"https://github.com/SaniLubary/portfolio"} visit={""} />
        <TimelineIcon text='Este Portfolio!' />

        <div>12</div>
        <ExperienceDetails
          toRight={true}
          detail={<>
            Juego de tipeo pronto a tener perfiles y capacidad de compartir puntuacion entre usuarios.
          </>} imgs={undefined} code={"https://github.com/SaniLubary/TypeSu"} visit={"https://typesu.vercel.app/"} />
        <TimelineIcon text='Typesu!' />

        <div>18</div>
        <ExperienceDetails
          toRight={true}
          detail={<>
            Componente de react para crear templates de mensajes a partir de un CSV.
          </>} imgs={undefined} code={""} visit={""} />
        <TimelineIcon text='CSV To Template' />

      </div>

    </div>
  )
}
