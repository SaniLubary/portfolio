import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

import { Link, NavMenu } from "../Navbar";
import { View } from "../../../App";
import HamburgerIcon from "../../atoms/HamburgerIcon";
import { DescriptionButton } from "../../../pages/Main/styles";

import updateViewPage from "../../../utils/updateViewPage";
import { colors, pages } from "../../enums";

const DrawerContainer = styled.div`
  position: fixed;
  right: 0;
  z-index: 999;
  background: ${colors.grey};
  
  width: 55vw;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const navigation = [pages.Experience, pages.About, pages.Contact];

interface MenuDrawerProps {
  view: View
  setView: React.Dispatch<React.SetStateAction<View>>
  setOpenedMenuDrawer: React.Dispatch<React.SetStateAction<boolean>>
  openedMenuDrawer: boolean
}

export default function MenuDrawer(props: MenuDrawerProps) {
  const [focusView, setFocusView] = useState(pages.Main)

  const drawerContainer = useRef(null)

  const showPage = updateViewPage(props, setFocusView)

  useEffect(() => {
    if (!drawerContainer) return

    const tl = gsap.timeline()
    if (props.openedMenuDrawer) {
      tl.to(drawerContainer.current, {
        duration: .3,
        x: 0,
      })
    } else {
      tl.to(drawerContainer.current, {
        duration: .3,
        x: '100%',
      })
    }
  }, [props.openedMenuDrawer])

  return (
    <DrawerContainer ref={drawerContainer}>
      <div style={{ cursor: 'pointer', alignSelf: 'end' }} onClick={() => props.setOpenedMenuDrawer((prevVal) => !prevVal)}>
        <HamburgerIcon style={{ fill: 'white', transform: 'scale(.3)' }} />
      </div>
      <NavMenu
        style={{
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          display: 'flex',
          alignItems: 'center',
          height: '30%',
        }}>
        {navigation.map((menu, index) => (
          <Link
            key={index}
            onClick={() => showPage(menu)}
            focusView={focusView === menu}
          >
            {menu}
          </Link>
        ))}
      </NavMenu>
      <DescriptionButton onClick={() => props.setOpenedMenuDrawer(false)} style={{ fontSize: 24, marginBottom: '38px' }}>
        Close
      </DescriptionButton>
    </DrawerContainer>
  );
}