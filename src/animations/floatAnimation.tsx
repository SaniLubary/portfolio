import { MutableRefObject } from "react";
import gsap from "gsap";

export const floatAnimation = (ref: MutableRefObject<any>) => {
  const tl = gsap.timeline();
  tl.repeat(-1);
  tl.yoyo(true);
  tl.to(ref.current, { duration: 5, scale: 1.5, y: '+=4', x: '+=3', rotation: '-=2', ease: "power1.ease" });
};
