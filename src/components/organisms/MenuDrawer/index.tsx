import styled from "styled-components";
import { Link, NavMenu } from "../Navbar";
import updateViewPage from "../../../utils/updateViewPage";
import { colors, pages } from "../../enums";
import { View } from "../../../App";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import HamburgerIcon from "../../atoms/HamburgerIcon";
import { DescriptionButton } from "../../../pages/Main/styles";
import { ModelContainer } from "../../../pages/About/styles";
import { Canvas, Euler, Vector3 } from "@react-three/fiber";
import Model from "../../atoms/Santi";

const DrawerContainer = styled.div`
  position: fixed;
  right: 0;
  z-index: 999;
  background: ${colors.grey};
  
  width: 55vw;
  height: 100%;
  border-radius: 32px 0 0 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
// 3D Model values
const position: Vector3 = [-0.3, 1, 0]
const rotation: Euler = [0.8, -5.9, -0.5]
const scale = 0.65

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
    tl.to(drawerContainer.current, {
      duration: 0,
      x: '100%',
    })
    tl.to(drawerContainer.current, {
      duration: .3,
      x: 0,
    })

  }, [])

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
            // style={{ color: colors.blue, margin: 0 }}
            onClick={() => showPage(menu)}
            focusView={focusView === menu}
          >
            {menu}
          </Link>
        ))}
      </NavMenu>
      <div className="dissapearRight">
        <Suspense fallback={null}>
          <Canvas className='animate--appear'>
            <directionalLight color={'#00ADB5'} position={[5, 1, -19]} intensity={0.2} />
            <directionalLight color={'#00ADB5'} position={[-500, 1, -100]} intensity={1} />
            <directionalLight position={[5, 1, 10]} intensity={1} />
            <Model position={position} rotation={rotation} scale={scale} />
          </Canvas>
        </Suspense>
      </div>

      <DescriptionButton onClick={() => ''} style={{ fontSize: 24, marginBottom: '38px' }}>
        Close
      </DescriptionButton>
    </DrawerContainer>
  );
}