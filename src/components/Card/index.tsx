import React, { useRef, useState } from "react";

interface Icard {
  cardInfoInit: {
    images: {
      path: string;
      selected: boolean;
    }[];
    title: string;
    details: string;
  };
}

const Card = ({ cardInfoInit }: Icard) => {
  const [cardInfo, setCardInfo] = useState(cardInfoInit);

  const refImage = useRef<HTMLImageElement | null>(null);

  const handleButtonClick = (img: Icard["cardInfoInit"]["images"][0]) => {
    if (!img.selected) {
      img.selected = true;

      if (refImage?.current?.src) refImage.current.src = img.path;

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
  };

  const updateToNextCardImage = () => {
    const images = cardInfo.images;

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

    images.forEach((img) => {
      if (img.selected === true && refImage.current) {
        refImage.current.src = img.path;
      }
    });

    setCardInfo({
      images: images,
      title: cardInfo.title,
      details: cardInfo.details,
    });
  };

  return (
    <div className="hobbies__cards__card overflow-hidden text-white">
      {/* Image */}
      <div
        onClick={() => updateToNextCardImage()}
        className="hobbies__cards__card__img h-2/5 overflow-hidden"
      >
        <div className="innerShadow z-10 w-full h-full relative"></div>
        <img
          ref={refImage}
          className="relative -top-56"
          src={cardInfoInit.images[0].path}
          alt="Mountains"
        />
      </div>

      {/* Image selection */}
      <div className="hobbies__cards__card__selection">
        {cardInfo.images.map((img, i) => {
          let selected = img.selected ? "selected" : "not-selected";
          return (
            <div
              key={img.path + i + selected}
              onClick={() => handleButtonClick(img)}
              className={`hobbies__cards__card__selection__${selected}`}
            ></div>
          );
        })}
      </div>

      {/* Card Body */}
      <div className="hobbies__cards__card__body">
        <div className="hobbies__cards__card__body__title">Art</div>
      </div>
    </div>
  );
};

export default Card;
