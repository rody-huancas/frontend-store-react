import { Link } from "react-router-dom";
// hooks
import useShopping from "hooks/useShopping";
// components
import { Spinner } from "components";
// icons
import {
  RiMoonClearFill,
  RiHomeLine,
  RiFolderHistoryLine,
  RiShoppingCartLine,
  RiMessage3Line,
  RiGridFill,
} from "react-icons/ri";

export const Header = () => {
  const { config, loader } = useShopping();
  const { logo } = config[0] || [];

  return (
    <header className="w-full h-20 flex items-center justify-center">
      <div className="w-full px-10 xl:px-0 xl:w-[1200px] py-2 h-full flex justify-between items-center overflow-hidden">
        <Link to="/">
          {loader ? (
            <Spinner />
          ) : (
            <img
              src={logo ? logo : "/images/logo-header.png"}
              alt="Logo Leugims"
              className="w-32 rounded-lg object-cover"
            />
          )}
        </Link>
        <nav className="flex items-center gap-3">
          <div className="flex items-center justify-center sm:justify-start fixed sm:relative bottom-5 sm:bottom-0 left-1/2 sm:left-0 right-1/2 sm:ring-0 z-50">
            <div className="flex items-center justify-center gap-10 sm:gap-3 px-10 py-5 bg-white shadow-xl sm:shadow-none rounded-xl sm:bg-transparent sm:rounded-none sm:p-0">
              <Link
                to={"/"}
                className="font-medium sm:text-gray-600 flex items-center justify-center gap-2"
              >
                <RiHomeLine className="sm:hidden text-xl" />
                <span className="hidden sm:block">Inicio</span>
              </Link>
              <Link
                to={"/about"}
                className="font-medium sm:text-gray-600 flex items-center justify-center gap-2"
              >
                <RiFolderHistoryLine className="sm:hidden text-xl" />
                <span className="hidden sm:block">Nosotros</span>
              </Link>
              <Link
                to={"/products"}
                className="font-medium sm:text-gray-600 flex items-center justify-center gap-2"
              >
                <RiShoppingCartLine className="sm:hidden text-xl" />
                <span className="hidden sm:block">Productos</span>
              </Link>
              <Link
                to={"/service"}
                className="font-medium sm:text-gray-600 flex items-center justify-center gap-2"
              >
                <RiGridFill className="sm:hidden text-xl" />
                <span className="hidden sm:block">Servicios</span>
              </Link>
              <Link
                to={"/contact"}
                className="font-medium sm:text-gray-600 flex items-center justify-center gap-2"
              >
                <RiMessage3Line className="sm:hidden text-xl" />
                <span className="hidden sm:block">Contacto</span>
              </Link>
            </div>
          </div>
          {/* <button className="text-gray-600">
            <RiMoonClearFill />
          </button> */}
        </nav>
      </div>
    </header>
  );
};
