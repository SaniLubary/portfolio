import './styles.scss'

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

import andesLandingPage from '../../assets/project-images/andes landing page.png'
import andesApp from '../../assets/project-images/andes app.png'

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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

        <div className='flex flex-col justify-center items-center'>
          <div>
            <div className="workplace-icono h-24 w-24 flex items-center justify-center text-center">Andes</div>
          </div>
          <div className="top-dotted-line h-36"></div>
        </div>
        <div className='flex flex-col'>
            <div className='w-1/2'>
              Actualmente Full Stack developer, aprendiendo Angular, RxJs y MongoDB
            </div>
            <div className='flex flex-row mt-3'>
              <img className='w-8 h-8 mr-3' src={angularIcon} alt="icono de angular" />
              <img className='w-8 h-8 mr-3' src={rxjsIcon} alt="rxjs icon" />
              <img className='w-8 h-8' src={nodejsIcon} alt="nodejs icon" />
            </div>
            <div className='mt-3'>
              <button className='reference-buttons'>
                {'<'}Check out the code{'/>'}
              </button>
              <button className='reference-buttons ml-3'>Visit the Site!</button>
            </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex flex-row max-w-full min-w-min h-40 rounded-xl'>
            <div className='flex h-full items-center mr-5'>
            <AiOutlineLeft />
            </div>
            <img src={andesLandingPage} alt="" />
            <div className='flex h-40 items-center ml-5'>
              <AiOutlineRight />
            </div>
          </div>
        </div>
        
        <div className='flex flex-col justify-center items-center'>
          <div className='flex'>
            <div className="workplace-icono h-24 w-24 flex items-center justify-center text-center">Muni NQN</div>
          </div>
          <div className="top-dotted-line h-36"></div>
        </div>
        <div className=''>
          <div className='w-1/2'>
            Full Stack developer, desarrollando aplicaciones en React, Bootstrap, PHP, Docker y manejando deploys.
          </div>
          <div className='flex flex-row mt-3'>
            <img className='w-8 h-8 mr-3' src={reactIcon} alt="icono de react" />
            <img className='w-8 h-8 mr-3' src={phpIcon} alt="php icon" />
            <img className="w-8 h-8 mr-3" src={linuxIcon} alt="linux icon" />
            <img className='w-8 h-8 mr-3' src={dockerIcon} alt="docker icon" />
            <img className='w-8 h-8' src={rabbitmqIcon} alt="rabbitmq icon" />
          </div>
          <div className='flex flex-row mx-auto items-center mt-3'>
            <button className='reference-buttons'>
              {'<'}Check out the code{'/>'}
            </button>
            <button className='reference-buttons ml-3'>Visit the Site!</button>
          </div>
        </div>
        <div>12</div>

        <div className='flex flex-col justify-center items-center'>
          <div className='flex'>
            <div className="workplace-icono h-24 w-24 flex items-center justify-center text-center">ADUS / IPVU</div>
          </div>
          <div className="top-dotted-line h-28"></div>
        </div>
        <div className=''>
          <div className='w-1/2'>
            Pasante desarrollando funcionalidades menores y bug fixes en Yii2, Bootstrap, jQuery y Oracle.
          </div>
          <div className='flex flex-row mt-3'>
            <img className='w-8 h-8 mr-3' src={bootstrapIcon} alt="bootstrap de react" />
            <img className='w-8 h-8' src={jqueryIcon} alt="jquery icon" />
          </div>
          <div className='flex flex-row mx-auto items-center mt-3'>
            <button className='reference-buttons'>
              {'<'}Check out the code{'/>'}
            </button>
            <button className='reference-buttons ml-3'>Visit the Site!</button>
          </div>
        </div>
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
        <div className='w-1/2 ml-auto text-right'>
          Este es mi primer portfolio :D
          <div className="text-sm mt-5">Mi hermano modeló el 3D, también brindo feedback del diseño del sitio! Visita su perfil <a className='text-teal-400' href="#">aqui!</a></div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div>
            <div className="workplace-icono h-24 w-24 flex items-center justify-center text-center">Este portfolio</div>
          </div>
          <div className="top-dotted-line h-28"></div>
        </div>

        <div>12</div>
        <div className='w-1/2 ml-auto text-right'>
          Juego de tipeo pronto a tener perfiles y capacidad de compartir puntuacion entre usuarios.
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex'>
            <div className="workplace-icono h-24 w-24 flex items-center justify-center text-center">Typesu!</div>
          </div>
          <div className="top-dotted-line h-28"></div>
        </div>
        
        <div>18</div>
        <div className='w-1/2 ml-auto text-right'>
          Componente de react para crear templates de mensajes a partir de un CSV.
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex'>
            <div className="workplace-icono h-24 w-24 flex items-center justify-center text-center text-sm">CSV to Template Creator</div>
          </div>
          <div className="top-dotted-line h-16"></div>
        </div>
      </div>

    </div>
  )
}
