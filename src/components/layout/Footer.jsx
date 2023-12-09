// hooks
import useShopping from "hooks/useShopping";
// icons
import {
  RiWhatsappLine,
  RiFacebookFill,
  RiInstagramLine,
} from "react-icons/ri";

export const Footer = () => {
  const { config } = useShopping();
  const { addresses, city, email, facebook, instagram, phones } =
    config[0] || [];

  const facebookUrl = facebook
    ? facebook[0].toLowerCase().replace(/\s+/g, "")
    : "";
  const instagramUrl = instagram
    ? instagram[0].toLowerCase().replace(/\s+/g, "")
    : "";

  return (
    <div className="w-full bg-primary-100 py-16 md:py-2 md:h-56 overflow-hidden flex flex-col items-center justify-center gap-10">
      <div className="w-full xl:w-[1200px] px-10 xl:px-0  text-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:place-items-center">
        <div className="flex flex-col gap-4">
          {addresses && (
            <div className="flex flex-col">
              <span className="font-bold uppercase">Ubicación</span>
              <p>{addresses}</p>
            </div>
          )}
          {city && (
            <div className="flex flex-col">
              <span className="font-bold uppercase">Ciudad</span>
              <p>{city}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {phones && (
            <div className="flex flex-col">
              <span className="font-bold uppercase">Teléfono</span>
              <p>{phones}</p>
            </div>
          )}
          {email && (
            <div className="flex flex-col">
              <span className="font-bold uppercase">Correo Electrónico</span>
              <p>{email}</p>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-4 mt-5 md:mt-0">
          <span className="font-bold uppercase">Redes Sociales</span>
          <div className="flex items-center md:justify-center gap-5">
            {facebook && (
              <a
                href={`https://www.facebook.com/${facebookUrl}`}
                target="_blank"
                className="w-10 h-10 rounded-full p-1 bg-white text-gray-600 flex items-center justify-center text-xl"
              >
                <RiFacebookFill />
              </a>
            )}
            {instagram && (
              <a
                href={`https://www.instagram.com/${instagramUrl}`}
                target="_blank"
                className="w-10 h-10 rounded-full p-1 bg-white text-gray-600 flex items-center justify-center text-xl"
              >
                <RiInstagramLine />
              </a>
            )}
            {phones && (
              <a
                href={`https://api.whatsapp.com/send?phone=51${phones}`}
                target="_blank"
                className="w-10 h-10 rounded-full p-1 bg-white text-gray-600 flex items-center justify-center text-xl"
              >
                <RiWhatsappLine />
              </a>
            )}
          </div>
        </div>
      </div>
      <p className="w-full text-center text-gray-100 mb-10 sm:mb-0 px-10 md:px-0">
        &#169; Copyriht {new Date().getFullYear()} Leugims Diseño Gráfico |
        Todos los derechos reservados.
      </p>
    </div>
  );
};
