import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import linkedInIcon from "./../../assets/icons/linkedin-icon.png";
import githubIcon from "./../../assets/icons/github-icon.png";

export default function Contact() {
  const inputName = useRef<HTMLDivElement>(null);
  const inputMail = useRef<HTMLDivElement>(null);
  const inputBody = useRef<HTMLDivElement>(null);

  const prevArrow = useRef<HTMLButtonElement>(null);
  const nextArrow = useRef<HTMLButtonElement>(null);

  const [inputs, setInputs] = useState([
    { input: inputName, visible: true },
    { input: inputMail, visible: false },
    { input: inputBody, visible: false },
  ]);

  useEffect(() => {
    (inputMail.current as HTMLDivElement).style.opacity = "0";
    (inputBody.current as HTMLDivElement).style.opacity = "0";
  }, []);

  const getInputsPos = () => {
    const inputs_ = inputs;
    const visible_input_i = inputs_.findIndex((elem) => elem.visible);

    const current = visible_input_i;
    const next = inputs_[visible_input_i + 1] ? visible_input_i + 1 : null;
    const prev = inputs_[visible_input_i - 1] ? visible_input_i - 1 : null;
    return [current, next, prev];
  };

  const handleNextClick = () => {
    const [current, next] = getInputsPos();
    const inputs_ = inputs;
    if (next !== null && current !== null) {
      inputs_[next].visible = true;
    } else return;

    inputs_[current].visible = false;
    setInputs([...inputs_]);

    gsap
      .timeline()
      .eventCallback("onStart", () => disabledNext(true))
      .to(inputs_[current].input.current, {
        opacity: 0,
        duration: 0.3,
        x: "-30%",
        ease: "power3",
      })
      .to(inputs_[next].input.current, {
        duration: 0.3,
        x: 0,
        ease: "power3",
        opacity: "100%",
      })
      .eventCallback("onComplete", () => disabledNext(false));
  };

  const handlePrevClick = () => {
    const [current, , prev] = getInputsPos();
    const inputs_ = inputs;
    if (prev !== null && current !== null) {
      inputs_[prev].visible = true;
    } else return;

    inputs_[current].visible = false;
    setInputs([...inputs_]);

    gsap
      .timeline()
      .eventCallback("onStart", () => disabledPrev(true))
      .to(inputs_[current].input.current, {
        opacity: 0,
        duration: 0.3,
        x: "30%",
        ease: "power3",
      })
      .to(inputs_[prev].input.current, {
        duration: 0.3,
        x: 0,
        ease: "power3",
        opacity: "100%",
      })
      .eventCallback("onComplete", () => disabledPrev(false));
  };

  const disabledPrev = (disabled: boolean) => {
    if (!prevArrow.current) return;
    (prevArrow.current as HTMLButtonElement).disabled = disabled;
  };

  const disabledNext = (disabled: boolean) => {
    if (!nextArrow.current) return;
    (nextArrow.current as HTMLButtonElement).disabled = disabled;
  };

  return (
    <div className="animate--appear flex lg:flex-row sm:flex-col lg:justify-around lg:items-center lg:p-21 p-8 mx-auto px-36">
      <div className="dissapearLeft p-6 lg:w-2/4 text-center sm:w-full flex justify-center flex-col bg-black bg-opacity-20 rounded-3xl">
        <div className="text-2xl">Enviame Un Mensaje!</div>
        <form className="overflow-hidden" onSubmit={(e) => e.preventDefault}>
          <div className="relative top-16" ref={inputName}>
            <div>Como te llamas?</div>
            <input
              type="text"
              className="focus-visible:outline-none text-center mt-3 bg-transparent border-b-2"
            />
          </div>
          <div className="relative translate-x-96" ref={inputMail}>
            <div>Cual es su Mail?</div>
            <input
              type="text"
              className="focus-visible:outline-none text-center mt-3 bg-transparent border-b-2"
            />
          </div>

          <div className="relative translate-x-96 bottom-16" ref={inputBody}>
            <div>Como te puedo ayudar?</div>
            <input
              type="text"
              className="focus-visible:outline-none text-center mt-3 bg-transparent border-b-2"
            />
          </div>
        </form>
        <div className="flex flex-row mx-auto relative bottom-10">
          {getInputsPos()[2] !== null && (
            <button
              onClick={() => handlePrevClick()}
              ref={prevArrow}
              className={"cursor-pointer px-5 border-2 rounded-3xl mx-2 mt-3"}
            >
              Atras
            </button>
          )}
          {getInputsPos()[1] === null ? (
            <input
              className="cursor-pointer flex px-5 border-2 rounded-3xl mx-2 mt-3"
              type="submit"
              value="Enviar!"
            />
          ) : (
            <button
              onClick={() => handleNextClick()}
              ref={nextArrow}
              className="cursor-pointer flex px-5 border-2 rounded-3xl mx-2 mt-3"
            >
              Siguiente
            </button>
          )}
        </div>
      </div>
      <div className="dissapearRight p-6 lg:w-2/5 sm:w-full lg:mt-0 sm:mt-11 flex justify-center flex-col bg-black bg-opacity-20 rounded-3xl">
        <div className="flex flex-row justify-around">
          <img className="w-14" src={linkedInIcon} alt="icon linked in" />
          <img
            className="w-14 bg-white rounded-full"
            src={githubIcon}
            alt="icon github"
          />
        </div>
        <div className="flex flex-col text-center mt-4">
          <a
            className="border-2 rounded-3xl p-2"
            href="mailto:hola@santilubary.com.ar"
          >
            hola@santilubary.com.ar
          </a>
          <a className="border-2 rounded-3xl p-2 mt-2" href="tel:+542996736887">
            +54 299 673 6887
          </a>
        </div>
      </div>
    </div>
  );
}
