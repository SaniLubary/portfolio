import { Dispatch, ForwardedRef, MutableRefObject, RefObject, SetStateAction, forwardRef, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { WavesSvg } from "../../components/atoms/WaveSvg";
import { BottomSection, UnderWavesSection } from "../../Styles/Styles";
import OnlySun from "../../components/atoms/OnlySun";
import styled from "styled-components";
import { Text } from "../../components/atoms/Text";
import Plant from '/assets/plant.png'

const ContactFormContainer = styled.div`
padding-top: 8em;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Form = styled.form`
position: relative;
overflow: hidden;
margin-top: 4em;
width: 35%;
&>.hidden {
  position: absolute;
  left: 600px;
  top: 0;
}
`

const Input = styled.input`
text-decoration: none;
background: none;
border-bottom: 1px solid white;
&:focus-visible {
  outline: none;
}
`

type InputsType = {
  value: string;
  type: string;
  label: string;
  inputId: string;
  inputRef: RefObject<HTMLDivElement>;
  visible: boolean;
}

type InputWithLabelType = { value: string | number | string | [] | undefined, setInputs: Dispatch<SetStateAction<InputsType[]>>, type: string, visible: boolean, ref: RefObject<HTMLDivElement>, label: string, inputId: string };
const InputWithLabel = ({ label, inputId, visible, type, value, setInputs }: InputWithLabelType, ref: ForwardedRef<HTMLDivElement>) => {
  return <div ref={ref} className={visible ? 'visible' : 'hidden'} style={{ display: 'flex', flexDirection: 'column' }}>
    <label htmlFor={inputId}>{label}</label>
    <Input
      id={inputId}
      required
      type={type}
      onChange={
        (e) => setInputs(prevInputs => prevInputs.map(input => input.label === label ? { ...input, value: e.target.value as string } : input))
      }
      defaultValue={value}
    />
  </div>
}
const InputWithLabelWithRef = forwardRef(InputWithLabel)

const PlantImg = styled.img`
  width: 45vw;
  position: absolute;
  bottom: -625px;
  left: -100px;
  z-index: 10;
`

const Fish = styled.div<{ color: string }>`
  position: absolute;
  background: ${({ color }) => color};
  height: 100px;
  width: 100px;
  bottom: -300px;
  left: 150px;
  z-index: 9;
  transform: rotate(-45deg);
  &:after {
    position:relative;
    clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
    height: 80px;
    width: 80px;
    left: 84px;
    top: 83px;
    transform: rotate(-45deg);
    background: ${({ color }) => color};
    content: '';
    display: block;
  }
`
export default function Contact() {
  const fish1 = useRef<HTMLDivElement | null>(null)
  const fish2 = useRef<HTMLDivElement | null>(null)
  const fish3 = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    swimmingFishAnimation(fish1, 100, 30);
    swimmingFishAnimation(fish2, 10, 100, 4);
    swimmingFishAnimation(fish3, 10, 50, 2);
  }, [])


  return (
    <div className="animate--appear flex flex-col dissapearCenter overflow-hidden">
      <OnlySun className='self-center m-32' />
      <BottomSection className="dissapearCenter">
        <WavesSvg />
        <UnderWavesSection style={{ height: '100vh' }}>
          <ContactForm />
        </UnderWavesSection>
      </BottomSection>
      <PlantImg src={Plant} />
      <PlantImg style={{ transform: 'scaleX(-1)', left: '750px' }} src={Plant} />
      <Fish ref={fish1} color="yellow" style={{ transform: 'scale(0.3) rotate(-45deg)' }} />
      <Fish ref={fish2} color="blue" style={{ bottom: '-400px', left: '900px', transform: 'scale(0.3) rotate(-45deg)' }} />
      <Fish ref={fish3} color="green" style={{ bottom: '-500px', left: '1000px', transform: 'scale(0.3) rotate(-45deg)' }} />
    </div>
  );
}

const formButtonsClassNames = "cursor-pointer flex px-5 border-2 rounded-3xl mx-2 mt-3";

function swimmingFishAnimation(fish: MutableRefObject<HTMLDivElement | null>, goLeft: number, goRight: number, duration?: number) {
  if (!fish.current?.offsetLeft || !fish.current?.offsetTop) {
    return
  }

  const tl = gsap.timeline();
  tl.repeat(-1);
  // go left
  tl.to(fish.current,
    {
      duration: duration ? duration : 3,
      left: fish.current?.offsetLeft - goLeft + 'px',
      ease: 'power2.ease'
    });
  // update zindez and look right
  tl.to(fish.current,
    {
      duration: 0.3,
      zIndex: 15,
      transform: 'scaleX(-1) rotate(-45deg) scale(0.3)',
      ease: 'power2.ease'
    });
  // go right
  tl.to(fish.current,
    {
      duration: 3,
      left: fish.current?.offsetLeft + goRight + 'px',
      ease: 'power2.ease'
    });
  // rotate
  tl.to(fish.current,
    {
      duration: 0.3,
      transform: 'scaleX(1) rotate(-45deg) scale(0.3)',
      ease: 'power2.ease'
    });
  // go left 
  tl.to(fish.current,
    {
      duration: 3,
      left: fish.current?.offsetLeft - goLeft + 'px',
      ease: 'power2.ease'
    });
  // look right and update zindez
  tl.to(fish.current,
    {
      duration: 0.3,
      zIndex: 9,
      transform: 'scaleX(-1) rotate(-45deg) scale(0.3)',
      ease: 'power2.ease'
    });
  // go right
  tl.to(fish.current,
    {
      duration: 3,
      left: fish.current?.offsetLeft + goRight + 'px',
      ease: 'power2.ease'
    });
  // look left
  tl.to(fish.current,
    {
      duration: 0.3,
      transform: 'scaleX(1) rotate(-45deg) scale(0.3)',
      ease: 'power2.ease'
    });
}

// eslint-disable-next-line no-unused-vars
function ContactForm() {
  const inputName = useRef<HTMLDivElement>(null);
  const inputMail = useRef<HTMLDivElement>(null);
  const inputBody = useRef<HTMLDivElement>(null);

  const prevArrow = useRef<HTMLButtonElement>(null);
  const nextArrow = useRef<HTMLButtonElement>(null);

  const [inputs, setInputs] = useState<InputsType[]>([
    { value: '', type: 'text', label: "How do I call you?", inputId: 'name', inputRef: inputName, visible: true },
    { value: '', type: 'mail', label: "What is you mail?", inputId: 'mail', inputRef: inputMail, visible: false },
    { value: '', type: 'text', label: "What is your inquiry?", inputId: 'description', inputRef: inputBody, visible: false },
  ]);

  const [inputError, setInputError] = useState<null | string>(null)

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
    if (current !== null && inputs[current].value.length < 1) {
      setInputError('Please enter something here')
      return
    } else {
      setInputError(null)
    }
    const inputs_ = inputs;
    if (next !== null && current !== null) {
      inputs_[next].visible = true;
    } else return;

    gsap
      .timeline()
      .eventCallback("onStart", () => disabledNext(true))
      .to(inputs_[current].inputRef.current, {
        opacity: 0,
        duration: 0.3,
        x: -100,
        ease: "power3",
      })
      .to(inputs_[next].inputRef.current, {
        duration: 0.3,
        x: 0,
        ease: "power3",
        opacity: 1,
      })
      .eventCallback("onComplete", () => {
        disabledNext(false)
        inputs_[current].visible = false;
        setInputs([...inputs_]);
      });
  };

  const handlePrevClick = () => {
    const [current, , prev] = getInputsPos();
    const inputs_ = inputs;
    if (prev !== null && current !== null) {
      inputs_[prev].visible = true;
    } else return;


    gsap
      .timeline()
      .eventCallback("onStart", () => disabledPrev(true))
      .to(inputs_[current].inputRef.current, {
        opacity: 0,
        duration: 0.3,
        x: 100,
        ease: "power3",
      })
      .to(inputs_[prev].inputRef.current, {
        duration: 0.3,
        x: 0,
        ease: "power3",
        opacity: 1,
      })
      .eventCallback("onComplete", () => {
        disabledPrev(false)
        inputs_[current].visible = false;
        setInputs([...inputs_]);
      });
  };

  return <ContactFormContainer className="dissapearLeft">
    <Text size="large">Let’s <b style={{ color: '#DF3600' }}>work</b> together!</Text>
    <Text size="small">Any <b>feedback</b>, <b>questions</b> or <b>project</b> in mind?</Text>
    <Form id="contactForm" onSubmit={(e) => e.preventDefault}>
      {inputs.map(input => {
        return (
          <InputWithLabelWithRef
            ref={input.inputRef}
            setInputs={setInputs}
            value={input.value ? input.value : ''}
            type={input.type}
            key={input.inputId}
            visible={input.visible}
            inputId={input.inputId}
            label={input.label}
          />
        )
      })}
    </Form>
    {inputError && <>{inputError}</>}
    <div className="flex flex-row mx-auto relative">
      {getInputsPos()[2] !== null && (
        <button
          onClick={() => handlePrevClick()}
          ref={prevArrow}
          className={formButtonsClassNames}
        >
          Back
        </button>
      )}
      {getInputsPos()[1] === null ? (
        <button
          className={formButtonsClassNames}
          onClick={() => ''}
        >
          Send
        </button>
      ) : (
        <button
          onClick={() => handleNextClick()}
          ref={nextArrow}
          className={formButtonsClassNames}
        >
          Next
        </button>
      )}
    </div>
  </ContactFormContainer>;
}

