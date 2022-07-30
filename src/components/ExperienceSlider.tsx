import gsap from "gsap";
import { ReactElement, useEffect, useRef, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function ExperienceSlider({
  children,
  rightSide = false,
}: {
  children: ReactElement[] | ReactElement;
  rightSide: boolean;
}) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const currentSlideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(currentSlideRef.current, {
      opacity: "100%",
      duration: 0.3,
      x: "0%",
      ease: "power3.inOut",
    });
  }, [currentSlide]);

  const handleLeftArrowClick = () => {
    if (!Array.isArray(children)) return;

    let currentSlide_ = currentSlide;
    if (children[currentSlide_ - 1]) {
      currentSlide_ -= 1;
    } else currentSlide_ = children.length - 1;

    gsap
      .timeline()
      .to(currentSlideRef.current, {
        opacity: 0,
        duration: 0.3,
        x: "100%",
        ease: "power3.in",
      })
      .to(currentSlideRef.current, { duration: 0, x: "-100%" })
      .eventCallback("onComplete", () => setCurrentSlide(currentSlide_));
  };

  const handleRightArrowClick = () => {
    if (!Array.isArray(children)) return;

    let currentSlide_ = currentSlide;
    if (children[currentSlide_ + 1]) {
      currentSlide_ += 1;
    } else currentSlide_ = 0;

    gsap
      .timeline()
      .to(currentSlideRef.current, {
        opacity: 0,
        duration: 0.3,
        x: "-100%",
        ease: "power3.in",
      })
      .to(currentSlideRef.current, { duration: 0, x: "100%" })
      .eventCallback("onComplete", () => setCurrentSlide(currentSlide_));
  };

  return (
    <div
      className={`${
        !rightSide ? "dissapearLeft" : "dissapearRight"
      } flex flex-col h-40 items-center`}
    >
      <div>
        <div className="flex flex-row h-40">
          {Array.isArray(children) && (
            <div className="flex h-full items-center mr-5">
              <div
                onClick={handleLeftArrowClick}
                className="cursor-pointer h-1/3 flex items-center"
              >
                <AiOutlineLeft />
              </div>
            </div>
          )}
          <div className="h-fit overflow-hidden rounded-lg">
            <div ref={currentSlideRef}>
              {Array.isArray(children) ? children[currentSlide] : children}
            </div>
            <div className="flex justify-center mt-4">
              <div className="w-1/2 flex justify-around">
                {Array.isArray(children) &&
                  children.map((el, i) => {
                    return (
                      <div
                        key={el.props.alt + i}
                        onClick={() =>
                          currentSlide !== i &&
                          (currentSlide < i
                            ? handleRightArrowClick()
                            : handleLeftArrowClick())
                        }
                        className={`w-4 h-4 cursor-pointer border-gray-200 border-2 rounded-full ${
                          i === currentSlide && "bg-slate-100"
                        }`}
                      ></div>
                    );
                  })}
              </div>
            </div>
          </div>
          {Array.isArray(children) && (
            <div className="flex h-full items-center ml-5">
              <div
                onClick={handleRightArrowClick}
                className="cursor-pointer h-1/3 flex items-center"
              >
                <AiOutlineRight />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
