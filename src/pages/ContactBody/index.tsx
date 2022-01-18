import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export default function ContactBody() {

  const inputName = useRef<HTMLDivElement>(null)
  const inputMail = useRef<HTMLDivElement>(null)
  const inputBody = useRef<HTMLDivElement>(null)

  const prevArrow = useRef<HTMLButtonElement>(null)
  const nextArrow = useRef<HTMLButtonElement>(null)

  const [inputs, setInputs] = useState([{ input: inputName, visible: true }, { input: inputMail, visible: false }, { input: inputBody, visible: false }])

  useEffect(() => {
    (inputMail.current as HTMLDivElement).style.opacity = "0";
    (inputBody.current as HTMLDivElement).style.opacity = "0";
  }, [])

  const getInputsPos = () => {
    const inputs_ = inputs
    const visible_input_i = inputs_.findIndex(elem => elem.visible)

    const current = visible_input_i
    const next = inputs_[visible_input_i + 1] ? visible_input_i + 1 : null
    const prev = inputs_[visible_input_i - 1] ? visible_input_i - 1 : null
    return [current, next, prev]
  }

  const handleNextClick = () => {
    const [current, next] = getInputsPos()
    const inputs_ = inputs
    if (next !== null && current !== null) {
      inputs_[next].visible = true
    } else return

    inputs_[current].visible = false
    setInputs([...inputs_])

    gsap.timeline()
      .eventCallback("onStart", () => disabledNext(true))
      .to(inputs_[current].input.current, { opacity: 0, duration: 0.3, x: '-100%', ease: 'power3' })
      .to(inputs_[next].input.current, { duration: 0.3, x: 0, ease: 'power3', opacity: '100%' })
      .eventCallback("onComplete", () => disabledNext(false))
  }

  const handlePrevClick = () => {
    const [current, , prev] = getInputsPos()
    const inputs_ = inputs
    if (prev !== null && current !== null) {
      inputs_[prev].visible = true
    } else return

    inputs_[current].visible = false
    setInputs([...inputs_])

    gsap.timeline()
      .eventCallback("onStart", () => disabledPrev(true))
      .to(inputs_[current].input.current, { opacity: 0, duration: 0.3, x: '100%', ease: 'power3' })
      .to(inputs_[prev].input.current, { duration: 0.3, x: 0, ease: 'power3', opacity: '100%' })
      .eventCallback("onComplete", () => disabledPrev(false))
  }

  const disabledPrev = (disabled: boolean) => {
    if (!prevArrow.current) return
    (prevArrow.current as HTMLButtonElement).disabled = disabled
  }
  
  const disabledNext = (disabled: boolean) => {
    if (!nextArrow.current) return
    (nextArrow.current as HTMLButtonElement).disabled = disabled
  }

  return (
    <div className="overflow-hidden show body flex lg:flex-row sm:flex-col justify-around p-8 mx-auto px-36">
      <div className="p-6 lg:w-3/5 text-center sm:w-full flex justify-center flex-col bg-black bg-opacity-20 rounded-3xl">
        <div className='text-2xl'>
          Enviame Un Mensaje!
        </div>
        <form className='form overflow-hidden' onSubmit={e => e.preventDefault}>
          <div className='relative top-16' ref={inputName}>
            <div>Como te llamas?</div>
            <input type="text" className='text-center mt-3 bg-transparent border-b-2 border-dotted focus:border-none' />
          </div>
          <div className='relative translate-x-96' ref={inputMail}>
            <div>Mail?</div>
            <input type="text" className='text-center mt-3 bg-transparent border-b-2 border-dotted focus:border-none' />
          </div>
          <div className='relative translate-x-96 bottom-16' ref={inputBody}>
            <div>Cuerpo del Mensaje?</div>
            <input type="text" className='text-center mt-3 bg-transparent border-b-2 border-dotted focus:border-none' />
          </div>
        </form>
        <div className='flex flex-row mx-auto relative bottom-10'>
          {getInputsPos()[2] !== null 
            && <button onClick={() => handlePrevClick()} ref={prevArrow} className={'cursor-pointer px-5 border-2 rounded-3xl mx-2 mt-3'}>
              Atras
            </button>
          }
          {getInputsPos()[1] === null
            ? <input className='cursor-pointer flex px-5 border-2 rounded-3xl mx-2 mt-3' type="submit" value="Enviar!" />
            : <button onClick={() => handleNextClick()} ref={nextArrow} className="cursor-pointer flex px-5 border-2 rounded-3xl mx-2 mt-3">
              Siguiente
            </button>
          }
        </div>
      </div>
      <div className="lg:w-2/5 sm:w-full sm:mt-11 flex justify-center">
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}
