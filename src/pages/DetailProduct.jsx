import { getProductById } from "api/api";
import { Spinner } from "components";
import { formatearDinero } from "helpers/helpers";
import useShopping from "hooks/useShopping";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const DetailProduct = () => {
  const { config } = useShopping();
  const { phones } = config[0] || [];

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoad(true);
      const response = await getProductById(id);
      setProduct(response);
      setLoad(false);
    };

    fetchProduct();
  }, [id]);

  const { category, description, image, price, name } = product;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {load ? (
        <div className="w-full h-80 flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex justify-center gap-10 my-16 text-gray-600">
          <div className="w-1/2 p-5 rounded-xl shadow-xl bg-white">
            <img
              src={`${image}`}
              alt={name}
              className="w-full object-cover rounded-xl"
            />
          </div>

          <div className="w-1/2 flex flex-col gap-5">
            <h1 className="font-extrabold text-3xl uppercase">{name}</h1>
            <div className="flex flex-col gap-2">
              <p className="text-xl font-medium uppercase">{description}</p>
              <p className="uppercase font-bold text-md">
                Categoría:{" "}
                <span className="text-primary-100">{category.name}</span>
              </p>
              <span className="text-xl font-bold text-primary-100">
                {formatearDinero(price)}
              </span>
            </div>

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
        </div>
      )}
    </>
  );
};
