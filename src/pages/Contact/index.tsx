import { useRef, useState } from "react";
import { gsap } from "gsap";
import { WavesSvg } from "../../components/atoms/WaveSvg";
import { BottomSection, UnderWavesSection } from "../../Styles/Styles";
import OnlySun from "../../components/atoms/OnlySun";

export default function Contact() {

  return (
    <div className="animate--appear flex flex-col dissapearCenter">
      <OnlySun className='self-center m-32' />
      <BottomSection className="dissapearCenter">
        <WavesSvg />
        <UnderWavesSection style={{ height: '100vh' }}>
          <div className="flex flex-col">
            <ContactForm />
          </div>
        </UnderWavesSection>
      </BottomSection>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function ContactForm() {
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

  const disabledPrev = (disabled: boolean) => {
    if (!prevArrow.current) return;
    (prevArrow.current as HTMLButtonElement).disabled = disabled;
  };

  const disabledNext = (disabled: boolean) => {
    if (!nextArrow.current) return;
    (nextArrow.current as HTMLButtonElement).disabled = disabled;
  };

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

  return <div className="dissapearLeft" style={{ gridColumn: '7/12' }}>
    <div>Enviame Un Mensaje!</div>
    <form onSubmit={(e) => e.preventDefault}>
      <div ref={inputName}>
        <div>Como te llamas?</div>
        <input type="text" />
      </div>
      <div className="relative translate-x-96" ref={inputMail}>
        <div>Cual es su Mail?</div>
        <input type="text" />
      </div>
      <div className="relative translate-x-96 bottom-16" ref={inputBody}>
        <div>Como te puedo ayudar?</div>
        <input type="text" />
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
          value="Enviar!" />
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
  </div>;
}

