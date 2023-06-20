import { MutableRefObject, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const SeparatorLine = styled.div`
  width: 80%;
  height: 4px;
  margin: 6px auto;
  background-color: #263645;
  align-self: flex-start;
`

interface CardProps {
  cardInfoInit: {
    images: {
      path: string;
      selected: boolean;
      alt?: string;
    }[];
    title: string;
    details: string;
    icons?: { path: string, icon: string }[];
  };
}
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const floatAnimation = (ref: MutableRefObject<any>) => {
  const tl = gsap.timeline()
  tl.repeat(-1)
  tl.yoyo(true)
  tl.to(ref.current,
    {
      duration: getRandomInt(3, 5),
      scale: 1.5,
      y: '+=4',
      x: '+=3',
      rotation: `-=${getRandomInt(-3, 3)}`,
      ease: "power1.ease"
    })
}

const Card = ({ cardInfoInit }: CardProps) => {
  const [cardInfo, setCardInfo] = useState(cardInfoInit);

  const refImage = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    centerCardImage()
    if (refImage.current) {
      floatAnimation(refImage)
    }
  }, [])

  const handleButtonClick = (img: CardProps["cardInfoInit"]["images"][0]) => {
    if (img.selected || !refImage?.current) return

    img.selected = true
    refImage.current.src = img.path;
    fadeOutCardImage(refImage.current)
    centerCardImage()

    setCardInfo({
      images: cardInfo.images.map((oldImg) =>
        oldImg.path === img.path
          ? { path: img.path, selected: true }
          : { path: oldImg.path, selected: false }
      ),
      title: cardInfo.title,
      details: cardInfo.details,
    });
  }

  function fadeOutCardImage(elem: HTMLElement) {
    gsap.to(elem, {
      opacity: "100%",
      duration: 0.5,
      ease: "power3.inOut",
    })
  }

  function centerCardImage() {
    if (!refImage.current) return

    const imgWidth = refImage.current.width

    if (refImage.current.height < 180) {
      refImage.current.style.top = '-175px'
    } else {
      refImage.current.style.top = `-${imgWidth / 1.5}px`
    }
  }

  const handleImageClick = () => {
    if (cardInfo.images.length === 1) return

    const images = cardInfo.images;

    // Logic to loop over images on click
    for (let i = 0; i < images.length; i++) {
      // Current is false? do nothing
      if (images[i].selected === false) continue;

      if (
        images[i - 1] === undefined ||
        (images[i - 1].selected === false && images[i + 1] !== undefined)
      ) {
        // Current is true? last one false? set next one to true
        images[i + 1].selected = true;
        continue;
      } else if (
        images[i - 1] !== undefined &&
        images[i - 1].selected === true
      ) {
        // Current is true? last one also true? set last one to false
        images[i - 1].selected = false;
        break;
      } else if (
        images[i - 1] !== undefined &&
        images[i - 1].selected === false &&
        i === images.length - 1 &&
        images[i].selected === true
      ) {
        // Last elem of array? start over
        images[i].selected = false;
        images[i - 1].selected = false;
        images[0].selected = true;
        break;
      }
    }

    // Update img properties 
    images.forEach((img) => {
      if (img.selected === true && refImage.current) {
        refImage.current.src = img.path;
        centerCardImage()
        fadeOutCardImage(refImage.current)
      }
    });

    setCardInfo({
      images: images,
      title: cardInfo.title,
      details: cardInfo.details,
      icons: cardInfo.icons
    });
  }

  return (
    <div className="hobbies__cards__card z-50 overflow-hidden text-white">
      {/* Image */}
      <div
        onClick={() => handleImageClick()}
        className="hobbies__cards__card__img h-2/5 overflow-hidden"
      >
        <div className="innerShadow z-10 w-full h-full relative"></div>
        <img
          ref={refImage}
          className="relative m-auto w-full scale-150"
          src={cardInfoInit.images[0].path}
          alt={cardInfoInit.images[0].alt ? cardInfoInit.images[0].alt : 'Imagen sin descripcion'}
        />
      </div>

      {/* Image selection */}
      <div className="hobbies__cards__card__selection">
        {cardInfo.images.map((img) => {
          let selected = img.selected ? "selected" : "not-selected";
          return (
            <div
              key={img.alt}
              onClick={() => handleButtonClick(img)}
              className={`transition-all hobbies__cards__card__selection__${selected}`}
            ></div>
          );
        })}
      </div>

      <SeparatorLine />

      {/* Card Body */}
      <section className="hobbies__cards__card__body">
        <h1 className="hobbies__cards__card__body__title">{cardInfo.title}</h1>
        <p>{cardInfo.details}</p>
      </section>

      {(cardInfo?.icons && cardInfo.icons.length > 0) && <>
        <div className="mt-auto mb-2">
          <SeparatorLine />
          <div className="flex justify-center">
            {cardInfo.icons.map(icon => <>
              <a target="_blank" key={icon.path} href={icon.path}>
                <img style={{ height: '24px', margin: '5px' }} src={icon.icon} />
              </a>
            </>)}
          </div>
        </div>
      </>}
    </div>
  )
};

export default Card;
