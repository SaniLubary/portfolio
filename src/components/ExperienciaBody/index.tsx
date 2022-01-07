import './styles.scss'
import reactIcon from '../../assets/images/react-icon.png'
import nodejsIcon from '../../assets/images/nodejs-icon.png'
import dockerIcon from '../../assets/images/docker-icon.png'
import githubIcon from '../../assets/images/github-icon.png'
import linuxIcon from '../../assets/images/linux-icon.png'
import angularIcon from '../../assets/images/angular-icon.png'
import bootstrapIcon from '../../assets/images/bootstrap-icon.png'
import jqueryIcon from '../../assets/images/jquery-icon.png'
import phpIcon from '../../assets/images/php-icon.png'
import rabbitmqIcon from '../../assets/images/rabbitmq-icon.png'
import rxjsIcon from '../../assets/images/rxjs-icon.png'

export default function ExperienciaBody() {
  return (
    <div className="show body container relative flex flex-col p-8 mx-auto">

      {/* EXPERIENCE TIMELINE */}
      
      <div className="grid custom-grid-template-cols-left grid-cols-3">
        <div className='flex flex-col justify-center items-center'>
          <div className='font-medium text-center mb-10 text-lg'>Equipos de los que forme parte!</div>
          <div className="top-dotted-line h-16"></div>
        </div>
        <div className='col-start-2 col-end-4'></div>

        <div className='flex flex-col justify-center items-center'>
          <div>
            <div className="workplace-icono h-24 flex items-center justify-center text-center">Andes</div>
          </div>
          <div className="top-dotted-line h-28"></div>
        </div>
        <div className='w-1/2'>
          Actualmente Full Stack developer, aprendiendo Angular, RxJs y MongoDB
          <div className='flex flex-row mt-3'>
            <img className='w-8 h-8 mr-3' src={angularIcon} alt="icono de angular" />
            <img className='w-8 h-8 mr-3' src={rxjsIcon} alt="rxjs icon" />
            <img className='w-8 h-8' src={nodejsIcon} alt="nodejs icon" />
          </div>
        </div>
        <div>6</div>
        
        <div className='flex flex-col justify-center items-center'>
          <div className='flex'>
            <div className="workplace-icono h-24 flex items-center justify-center text-center">Muni NQN</div>
          </div>
          <div className="top-dotted-line h-28"></div>
        </div>
        <div className='w-1/2'>
          Full Stack developer, desarrollando aplicaciones en React, Bootstrap, PHP, Docker y manejando deploys.
          <div className='flex flex-row mt-3'>
            <img className='w-8 h-8 mr-3' src={reactIcon} alt="icono de react" />
            <img className='w-8 h-8 mr-3' src={phpIcon} alt="php icon" />
            <img className="w-8 h-8 mr-3" src={linuxIcon} alt="linux icon" />
            <img className='w-8 h-8 mr-3' src={dockerIcon} alt="docker icon" />
            <img className='w-8 h-8' src={rabbitmqIcon} alt="rabbitmq icon" />
          </div>
        </div>
        <div>12</div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex'>
            <div className="workplace-icono h-24 flex items-center justify-center text-center">ADUS / IPVU</div>
          </div>
          <div className="top-dotted-line h-16"></div>
        </div>
        <div className='w-1/2'>
          Pasante desarrollando funcionalidades menores y bug fixes en Yii2, Bootstrap, jQuery y Oracle.
          <div className='flex flex-row mt-3'>
            <img className='w-8 h-8 mr-3' src={bootstrapIcon} alt="bootstrap de react" />
            <img className='w-8 h-8' src={jqueryIcon} alt="jquery icon" />
          </div>
        </div>
        <div>18</div>
      </div>

      {/* PROJECTS TIMELINE */}

      <div className="grid custom-grid-template-cols-right grid-cols-3">
        
        <div className='col-start-1 col-end-3'></div>
        <div className='flex flex-col justify-center items-center'>
          <div className='font-medium text-center mb-10 text-lg'>Projectos personales en construccion!</div>
          <div className="top-dotted-line h-16"></div>
        </div>

        <div>6</div>
        <div className='w-1/2 ml-auto text-right'>
          Disfrute mucho diseniando y desarrollando este portfolio
          <div className="text-sm mt-5">Recibi feedback por el disenio de parte del Diseniador que paso el modelo del inicio a 3D!</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <div className="workplace-icono h-24 flex items-center justify-center text-center">Este portfolio</div>
          </div>
          <div className="top-dotted-line h-28"></div>
        </div>

        <div>12</div>
        <div className='w-1/2 ml-auto text-right'>
          Juego de tipeo pronto a tener perfiles y capacidad de compartir puntuacion entre usuarios.
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex'>
            <div className="workplace-icono h-24 flex items-center justify-center text-center">Typesu!</div>
          </div>
          <div className="top-dotted-line h-28"></div>
        </div>
        
        <div>18</div>
        <div className='w-1/2 ml-auto text-right'>
          Componente de react para crear templates de mensajes a partir de un CSV.
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex'>
            <div className="workplace-icono h-24 flex items-center justify-center text-center">Challenges</div>
          </div>
          <div className="top-dotted-line h-16"></div>
        </div>
      </div>

      
    </div>
  )
}
