import { useEffect } from "react";
import { Link } from "react-router-dom";
// hooks
import useShopping from "hooks/useShopping";
// components
import { Spinner } from "components";
// icons
import {
  RiHomeLine,
  RiFolderHistoryLine,
  RiShoppingCartLine,
  RiMessage3Line,
  RiGridFill,
} from "react-icons/ri";
import { BiSolidSun } from "react-icons/bi";
import { PiMoonStarsFill } from "react-icons/pi";

export const Header = () => {
  const { config, loader, isDarkMode, toggleDarkMode } = useShopping();
  const { logo } = config[0] || [];

  // agregar o quitar la clase dark al body
  useEffect(() => {
    const body = document.body;
    isDarkMode ? body.classList.add("dark") : body.classList.remove("dark");
    body.style.backgroundColor = isDarkMode ? "#1a202c" : "#f8fafc";
    return () => {
      body.classList.remove("dark");
      body.style.backgroundColor = "";
    };
  }, [isDarkMode]);

  return (
    <header className="w-full h-20 flex items-center justify-center">
      <div className="w-full px-10 xl:px-0 xl:w-[1200px] py-2 h-full flex justify-between items-center overflow-hidden">
        <Link to="/" className="">
          {loader ? (
            <Spinner />
          ) : (
            <img
              src={logo ? logo : "/images/logo-header.png"}
              alt="Logo Leugims"
              className="w-32 rounded-lg object-cover dark:bg-white dark:h-16"
            />
          )}
        </Link>
        <nav className="flex items-center gap-3">
          <div className="flex items-center justify-center md:justify-start fixed md:relative bottom-5 md:bottom-0 left-1/2 md:left-0 right-1/2 md:ring-0 z-50">
            <div className="flex items-center justify-center gap-10 md:gap-3 px-10 py-5 bg-white shadow-xl md:shadow-none rounded-xl md:bg-transparent md:rounded-none md:p-0">
              <Link
                to={"/"}
                className={`font-medium md:text-gray-600 ${
                  isDarkMode ? "dark:md:text-gray-100 dark:text-gray-600" : ""
                } flex items-center justify-center gap-2`}
              >
                <RiHomeLine className="md:hidden text-xl" />
                <span className="hidden md:block">Inicio</span>
              </Link>

              <Link
                to={"/about"}
                className={`font-medium md:text-gray-600 ${
                  isDarkMode ? "dark:md:text-gray-100 dark:text-gray-600" : ""
                } flex items-center justify-center gap-2`}
              >
                <RiFolderHistoryLine className="md:hidden text-xl" />
                <span className="hidden md:block">Nosotros</span>
              </Link>
              <Link
                to={"/products"}
                className={`font-medium md:text-gray-600 ${
                  isDarkMode ? "dark:md:text-gray-100 dark:text-gray-600" : ""
                } flex items-center justify-center gap-2`}
              >
                <RiShoppingCartLine className="md:hidden text-xl" />
                <span className="hidden md:block">Productos</span>
              </Link>
              <Link
                to={"/service"}
                className={`font-medium md:text-gray-600 ${
                  isDarkMode ? "dark:md:text-gray-100 dark:text-gray-600" : ""
                } flex items-center justify-center gap-2`}
              >
                <RiGridFill className="md:hidden text-xl" />
                <span className="hidden md:block">Servicios</span>
              </Link>
              <Link
                to={"/contact"}
                className={`font-medium md:text-gray-600 ${
                  isDarkMode ? "dark:md:text-gray-100 dark:text-gray-600" : ""
                } flex items-center justify-center gap-2`}
              >
                <RiMessage3Line className="md:hidden text-xl" />
                <span className="hidden md:block">Contacto</span>
              </Link>
            </div>
          </div>
          <a
            href="https://leugims.000webhostapp.com/tienda_virtual/"
            className="bg-primary-100 px-4 py-3 rounded-lg text-white"
          >
            Ir a la Tienda
          </a>
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-100 mode-theme"
          >
            {isDarkMode ? (
              <BiSolidSun className="mode-theme" />
            ) : (
              <PiMoonStarsFill className="mode-theme" />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
};
