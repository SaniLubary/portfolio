import { Disclosure } from "@headlessui/react";
import './styles.scss'
import Menus from "../enums";

export default function Navbar(props: any) {
  const showMenu = (menu: string) => {
    props.view !== menu && props.setView(menu)
  }
  
  const navigation = [Menus.Experiencia, Menus.Aptitudes, Menus.Conectemos];
  
  return (
    <>
      <div className="w-full">
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:justify-between">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <div>
                    <a onClick={() => showMenu(Menus.Main)} className="cursor-pointer">
                      <div className="mainTitle">Santi Lubary</div>
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
                          <a href={`#${menu}`} className={`nav-option cursor-pointer flex items-center justify-center text-center px-4 py-2 ${props.view === menu && 'nav-focused'}`}>
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
                    <a onClick={() => showMenu(menu)} className={`nav-option cursor-pointer flex items-center justify-center text-center px-4 py-2 ${props.view === menu && 'nav-focused'}`}>
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