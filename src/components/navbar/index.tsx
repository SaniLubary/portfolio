import React from "react"; 
import { Disclosure } from "@headlessui/react";
import './styles.scss'

const Menus = {
  Experiencia: "Experiencia",
  Aptitudes: "Aptitudes",
  Conectemos: "Conectemos!"
}

export default function Navbar() {
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
                    <a className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                      <div className="mainTitle">Santi Lubary</div>
                    </a>
                  </div>

                  <Disclosure.Button
                    aria-label="Toggle Menu"
                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-gray-700">
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
                      {navigation.map((item, index) => (
                        <div key={index}>
                          <a href={`#${item}`} className="nav-option w-full px-4 py-2 -ml-4 dark:text-gray-300 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-700">
                            {item}
                          </a>
                        </div>
                      ))}
                      <div>
                        <a className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                          Conectemos!
                        </a>
                      </div>
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
                    <a className="nav-option cursor-pointer flex items-center justify-center text-center px-4 py-2">
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