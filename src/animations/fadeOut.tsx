import gsap from "gsap";

export function fadeOut(elem: HTMLElement) {
  gsap.to(elem, {
    opacity: "100%",
    duration: 0.5,
    ease: "power3.inOut",
  });
}
