import { Canvas, Euler, Vector3 } from '@react-three/fiber'
import { Suspense, useEffect } from 'react'
import Model from '../../components/Santi'
import './styles.scss'

const position: Vector3 = [2.5, 0, 0]
const rotation: Euler = [0.2, -0.6, 0.2]
const scale = 0.7

export default function Main() {
  useEffect(() => {
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
  }, [])

  return (
    <div className='animate--appear main'>
      <div className='left-desc dissapearLeft'>
        <div className="left-desc__desc">
          <h1 className="left-desc__title">
            Hola! Soy Santi
          </h1>
          <div className="left-desc__work-title">
            Desarrollador Web<br />
            Full - Stack
          </div>
        </div>
        <button className="left-desc__download-resume-btn flex items-center justify-center">
          descargar cv
        </button>
      </div>
      {/* Right */}
      <div className="model dissapearRight">
        <Suspense fallback={null}>
          <Canvas className='animate--appear'>
              <directionalLight intensity={1} />
              <Model position={position} rotation={rotation} scale={scale} />
          </Canvas>
        </Suspense>
      </div>
    </div>
  )
}
