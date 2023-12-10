import { getAllProduct, getAllProductCategory } from "api/api";
import { CardProduct, Spinner } from "components";
import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const productResponse = await getAllProduct();
        const categoryResponse = await getAllProductCategory();
        setProducts(productResponse);
        setCategories(
          categoryResponse.filter((category) =>
            productResponse.some(
              (product) => product.category._id === category._id
            )
          )
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) => product.category._id === selectedCategory._id
      )
    : products;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory]);
  return (
    <>
      {load ? (
        <div className="w-full h-80 flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col gap-5 text-gray-600 dark:text-gray-100 py-10 overflow-hidden">
          <h1 className="text-center text-3xl font-extrabold uppercase">
            Nuestros Productos
          </h1>
          <div className="flex items-center justify-center flex-wrap gap-5">
            <button
              key="all"
              className={`${
                !selectedCategory
                  ? "bg-transparent border-2 border-primary-100 text-primary-100 dark:text-gray-100 dark:border-gray-100"
                  : "bg-primary-300 text-white dark:bg-gray-100 dark:text-primary-300"
              }  py-2 px-5 rounded-xl uppercase font-medium`}
              onClick={() => setSelectedCategory(null)}
            >
              Todos
            </button>
            {categories.map((category) => (
              <button
                key={category._id}
                className={`${
                  selectedCategory === category
                    ? "bg-transparent border-2 border-primary-100 text-primary-100 dark:text-gray-100 dark:border-gray-100"
                    : "bg-primary-300 text-white dark:bg-gray-100 dark:text-primary-300"
                } py-2 px-5 rounded-xl uppercase font-medium`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mt-5">
            {filteredProducts.map((product) => (
              <CardProduct key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
