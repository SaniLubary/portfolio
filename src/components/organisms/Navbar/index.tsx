import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";

import { View } from "../../../App"
import { pages } from "../../enums";

import { useMediaQuery } from "../../../utils/useMediaQuery";
import { device } from "../../../utils/breakpoints";
import styled from "styled-components";
import HamburgerIcon from "../../atoms/HamburgerIcon";
import updateViewPage from "../../../utils/updateViewPage";

export interface NavbarProps {
  view: View,
  setView: React.Dispatch<React.SetStateAction<View>>,
  setOpenedMenuDrawer: React.Dispatch<React.SetStateAction<boolean>>
}
const navigation = [pages.Experience, pages.About, pages.Contact];

export default function Navbar(props: NavbarProps) {

  const [focusView, setFocusView] = useState(pages.Main)
  const matchesLaptop = useMediaQuery(device.laptop)

  const navBar = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (matchesLaptop) {
      props.setOpenedMenuDrawer(false)
    }
  }, [matchesLaptop])

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
   * @param page The page to show on nav__button click
   */
  const showPage = updateViewPage(props, setFocusView)

  return (
    <Nav
      matchesLaptop={matchesLaptop}
      ref={navBar}
    >
      <Logo
        onClick={() => {
          props.view.current !== pages.Main && showPage(pages.Main)
          props.setOpenedMenuDrawer(false)
        }}
        matchesLaptop={matchesLaptop}
      >
        Santi Lubary
      </Logo>
      {matchesLaptop
        ? <NavMenu>
          {navigation.map((page, index) => (
            <Link
              key={index}
              onClick={() => {
                showPage(page)
                props.setOpenedMenuDrawer(false)
              }}
              focusView={focusView === page}
            >
              {page}
            </Link>
          ))}
        </NavMenu>
        : <div style={{ cursor: 'pointer', gridColumn: '10/12' }} onClick={() => props.setOpenedMenuDrawer((prevVal) => !prevVal)}>
          <HamburgerIcon style={{ fill: 'white', transform: 'scale(.3)' }} />
        </div>}
    </Nav>
  );
}

const Logo = styled.div<{ matchesLaptop: boolean }>`
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 24px 0;
  grid-column: ${({ matchesLaptop }) => !matchesLaptop ? '2/6' : '2/5'};
  color: rgb(239,239,239);
  font: 32px/1.2 "Atomic Age", Helvetica, Arial, serif;
  letter-spacing: '0px';
  @media ${device.desktop} {
    font-size: 64px;
  }
`

export const Link = styled.a<{ focusView: boolean }>`
  font: 28px/1.2 "Poppins", Helvetica, Arial, serif;
  color: ${({ focusView }) => focusView ? 'rgb(0, 174, 182)' : 'rgb(192, 192, 192)'};
  margin-left: 24px;
  text-align: end;
  &:hover {
    cursor: pointer;
    color: rgb(4, 158, 167); 
  }
  @media ${device.maxTablet} {
    text-align: center;
    margin-left: 0;
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

const Nav = styled.nav<{ matchesLaptop: boolean }>`
  position: fixed;
  backdrop-filter: blur(4px);
  width: 100%;
  z-index: 999;
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(12, minmax(0, 1fr));
`

export const NavMenu = styled.div`
  grid-column: 6/12;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`