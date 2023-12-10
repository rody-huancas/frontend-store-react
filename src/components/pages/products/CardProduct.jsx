import { Link } from "react-router-dom";
// hooks
import useShopping from "hooks/useShopping";
// helpers
import { formatearDinero } from "helpers/helpers";
// icons
import { RiEyeFill } from "react-icons/ri";

export const CardProduct = ({ product }) => {
  const { config } = useShopping();
  const { phones } = config[0] || [];

  const { _id, image, name, price } = product;

  return (
    <div className="w-full sm:w-[330px] xl:w-96 h-96 bg-white dark:bg-gray-600 dark:text-gray-100 shadow-lg rounded-xl flex flex-col items-center gap-4 overflow-hidden relative item_product">
      <img src={`${image}`} alt={name} className="w-full h-56 object-cover" />
      <div className="w-full flex flex-col items-center gap-2 px-5">
        <h4 className="font-medium text-md text-center uppercase">
          {name.length > 50 ? `${name.slice(0, 50)}...` : name}
        </h4>
        <span className="text-primary-100 font-bold dark:text-gray-100">
          {formatearDinero(price)}
        </span>
        {phones && (
          <a
            href={`https://api.whatsapp.com/send?phone=51${phones}&text=Quisiera detalles sobre el producto ${name}`}
            target="_blank"
            className="w-full bg-primary-100 text-white py-3 text-center rounded-xl uppercase font-medium"
          >
            Más información
          </a>
        )}
      </div>

      <Link
        to={`/product/${_id}`}
        className="absolute top-10 right-0 lg:-right-10 bg-red-400 text-white p-3 rounded-l-md btn_view transition-all duration-500 ease-in-out btn_view"
      >
        <RiEyeFill />
      </Link>
    </div>
  );
};
