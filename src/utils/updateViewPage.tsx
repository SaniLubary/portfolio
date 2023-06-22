import React from "react";
import { gsap } from 'gsap';
import { pages } from "../components/enums";
import { NavbarProps } from "../components/organisms/Navbar";

export default function updateViewPage(props: NavbarProps, setFocusView: React.Dispatch<React.SetStateAction<string>>) {
  return (page: string) => {
    const menu_ = props.view.current === page ? pages.Main : page;

    setFocusView(menu_);

    const dissapearLeftElems = Array.from(document.getElementsByClassName("dissapearLeft"));
    const dissapearRightElems = Array.from(document.getElementsByClassName("dissapearRight"));
    const dissapearCenterElems = Array.from(document.getElementsByClassName("dissapearCenter"));

    gsap.timeline()
      .to(dissapearLeftElems,
        {
          xPercent: -800,
          duration: 1,
          opacity: 0,
          stagger: 0.2,
          ease: 'power3.in',
        })
      .to(dissapearRightElems,
        {
          xPercent: 800,
          duration: 1,
          opacity: 0,
          stagger: 0.2,
          ease: 'power3.in',
        }, "<")
      .to(dissapearCenterElems,
        {
          opacity: 0,
          top: '700px',
          duration: 0.6,
          stagger: 0.2,
          ease: 'power3.in',
        }, "<")
      .eventCallback('onComplete', () => props.setView({ current: menu_, waitingAnimation: '' }));
  };
}
