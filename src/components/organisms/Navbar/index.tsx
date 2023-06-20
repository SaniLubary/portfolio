import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

import { View } from "../../../App"
import Menus from "../../enums";

import { useMediaQuery } from "../../../utils/useMediaQuery";
import { device } from "../../../utils/breakpoints";
import styled from "styled-components";
import HamburgerIcon from "../../atoms/HamburgerIcon";

interface NavbarProps {
  view: View,
  setView: React.Dispatch<React.SetStateAction<View>>,
}

export default function Navbar(props: NavbarProps) {
  const navigation = [Menus.Experience, Menus.About, Menus.Contact];

  const [focusView, setFocusView] = useState(Menus.Main)
  const matchesLaptop = useMediaQuery(device.laptop)

  const navBar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.timeline()
      .to(navBar.current, {
        scrollTrigger: {
          trigger: "body",
          start: "center 50%",
          end: "60% 50%",
          scrub: true,
        },
        backgroundColor: 'rgba(0, 0, 0, 0.228)',
        ease: 'power3.in',
      })
  }, [])

  /**
   * Changes the current view & animates elements dissapearing
   * @param menu The menu to show on nav__button click
   */
  const showMenu = (menu: string) => {
    const menu_ = props.view.current === menu ? Menus.Main : menu

    setFocusView(menu_)

    const dissapearLeftElems = Array.from(document.getElementsByClassName("dissapearLeft"))
    const dissapearRightElems = Array.from(document.getElementsByClassName("dissapearRight"))
    const dissapearCenterElems = Array.from(document.getElementsByClassName("dissapearCenter"))

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
      .eventCallback('onComplete', () => props.setView({ current: menu_, waitingAnimation: '' }))
  }

  return (
    <Nav
      ref={navBar}
    >
      <Logo
        onClick={() => props.view.current !== Menus.Main && showMenu(Menus.Main)}
        matchesLaptop={matchesLaptop}
      >
        Santi Lubary
      </Logo>
      {matchesLaptop
        ? <NavMenu>
          {navigation.map((menu, index) => (
            <Link
              key={index}
              onClick={() => showMenu(menu)}
              focusView={focusView === menu}
            >
              {menu}
            </Link>
          ))}
        </NavMenu>
        : <HamburgerIcon style={{ fill: 'white', transform: 'scale(.3)' }} />}
    </Nav>
  );
}

const Logo = styled.div<{ matchesLaptop: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px 0;
  grid-column: ${({ matchesLaptop }) => !matchesLaptop ? '2/10' : '2/5'};
  color: rgb(239,239,239);
  font: 32px/1.2 "Atomic Age", Helvetica, Arial, serif;
  letter-spacing: '0px';
  @media ${device.desktop} {
    font-size: 64px;
  }
`

const Link = styled.a<{ focusView: boolean }>`
  font: 28px/1.2 "Poppins", Helvetica, Arial, serif;
  color: ${({ focusView }) => focusView ? 'rgb(0, 174, 182)' : 'rgb(192, 192, 192)'};
  text-align: end;
  margin-left: 24px;
  &:hover {
    cursor: pointer;
    color: rgb(4, 158, 167); 
  }
  @media ${device.laptopL} {
    font-size: 32px;
  }
  @media ${device.desktop} {
    font-size: 42px;
  }
  @media ${device.desktopL} {
    font-size: 64px;
  }
`

const Nav = styled.nav`
  position: fixed;
  backdrop-filter: blur(4px);
  width: 100%;
  z-index: 999;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`

const NavMenu = styled.div`
  grid-column: 6/12;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`