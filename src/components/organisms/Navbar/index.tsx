import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

import { View } from "../../../App"
import Menus from "../../enums";

import './styles.scss'
import tw from "tailwind-styled-components";
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
  const matchesTablet = useMediaQuery(device.tablet)

  const previousView = useRef(focusView)
  const navBar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    previousView.current = focusView
  }, [focusView])

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
    <>
      <Nav
        ref={navBar}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        }}
      >
        <Logo
          onClick={() => props.view.current !== Menus.Main && showMenu(Menus.Main)}
          matchesTablet={matchesTablet}
          className="logo"
        >
          Santi Lubary
        </Logo>
        {matchesTablet
          ? <NavMenu>
            {navigation.map((menu, index) => (
              <a
                onClick={() => showMenu(menu)}
                key={index}
                className={`
                  nav__option 
                  text-white
                  cursor-pointer
                  pl-4 
                  ${focusView === menu && 'nav__option--focused'}
                `}>
                {menu}
              </a>
            ))}
          </NavMenu>
          : <HamburgerIcon style={{ fill: 'white', transform: 'scale(.3)' }} />}
      </Nav>
    </>
  );
}

const Logo = styled.div<{ matchesTablet: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px 0;
  grid-column: ${({ matchesTablet }) => !matchesTablet ? '2/10' : '2/5'};
`

const Nav = tw.nav`
  bg-black
  bg-opacity-0
  backdrop-filter
  backdrop-blur-sm
  fixed
  w-full
  z-40
`

const NavMenu = styled.div`
  grid-column: 6/12;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`