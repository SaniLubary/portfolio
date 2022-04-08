import { useEffect, useRef, useState } from "react";
import { Disclosure } from "@headlessui/react";
import gsap from 'gsap'
import './styles.scss'
import Menus from "../enums";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Navbar(props: any) {
  const navigation = [Menus.SobreMi, Menus.Experiencia, Menus.Conectemos];

  const [focusView, setFocusView] = useState(Menus.Main)

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
          markers: true,
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
          duration: 0.4,
          opacity: 0,
          ease: 'power3.in',
        })
      .to(dissapearRightElems,
        {
          xPercent: 800,
          duration: 0.4,
          opacity: 0,
          ease: 'power3.in',
        }, "<")
      .to(dissapearCenterElems,
        {
          opacity: 0,
          top: '700px',
          duration: 0.3,
          ease: 'power3.in',
        }, "<")
      .eventCallback('onComplete', () => props.setView({ current: menu_, waitingAnimation: '' }))
  }

  return (
    <>
      <div ref={navBar} className="bg-black bg-opacity-0 backdrop-filter backdrop-blur-sm fixed w-full z-40">
        <nav className="flex justify-between px-16 py-8">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex lg:flex-wrap w-full lg:w-auto">
                  <div>
                    <a onClick={() => props.view.current !== Menus.Main && showMenu(Menus.Main)} className="cursor-pointer">
                      <div className="logo">Santi Lubary</div>
                    </a>
                  </div>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto lg:hidden focus:outline-none dark:text-gray-300">
                    <svg
                      className="w-6 h-6 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                    <>
                      {navigation.map((menu, index) => (
                        <div key={index}>
                          <a onClick={() => showMenu(menu)} className={`nav-option cursor-pointer flex items-center justify-center text-center px-4 py-2 ${focusView === menu && 'nav-focused'}`}>
                            {menu}
                          </a>
                        </div>
                      ))}
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 lg:pt-0 list-reset lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <div>
                    <a onClick={() => showMenu(menu)} className={`nav__option px-4 py-2 ${focusView === menu && 'nav__option--focused'}`}>
                      {menu}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}