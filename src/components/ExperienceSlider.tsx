import { ReactElement, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function EcperienceSlider({children}: {children: ReactElement[]}) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleLeftArrowClick = () => {
    const currentSlide_ = currentSlide
    if (children[currentSlide_-1]) {
      setCurrentSlide(currentSlide_-1)
    } else setCurrentSlide(children.length-1)
  }

  const handleRightArrowClick = () => {
    const currentSlide_ = currentSlide
    if (children[currentSlide_+1]) {
      setCurrentSlide(currentSlide_+1)
    } else setCurrentSlide(0)
  }
  
  return (
    <div className='flex flex-col h-40 items-center'>
      <div>
        <div className="flex flex-row h-40">
          <div className='flex h-full items-center mr-5'>
            <div onClick={handleLeftArrowClick} className="cursor-pointer h-1/3 flex items-center">
              <AiOutlineLeft />
            </div>
          </div>
          <div>
            {children[currentSlide]}
            <div className="flex justify-center mt-4">
              <div className="w-1/2 flex justify-around">
                {children.map((el, i) => <div onClick={() => setCurrentSlide(i)} className={`w-4 h-4 cursor-pointer border-gray-200 border-2 rounded-full ${i === currentSlide && 'bg-slate-100'}`}></div>)}
              </div>
            </div>
          </div>
          <div className='flex h-full items-center ml-5'>
            <div onClick={handleRightArrowClick} className="cursor-pointer h-1/3 flex items-center">
              <AiOutlineRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
