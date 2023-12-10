import { useState, useEffect } from "react";
import { getAllCategoryService, getAllService } from "api/api";
import { CardService, Spinner } from "components";

export const Service = () => {
  const [services, setServices] = useState([]);
  const [categoryServices, setCategoryServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const serviceResponse = await getAllService();
        const categoryResponse = await getAllCategoryService();
        setServices(serviceResponse);
        setCategoryServices(
          categoryResponse.filter((category) =>
            serviceResponse.some(
              (service) => service.categoryService._id === category._id
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory]);

  const filteredServices = selectedCategory
    ? services.filter(
        (service) => service.categoryService._id === selectedCategory._id
      )
    : services;

  return (
    <>
      {load ? (
        <div className="w-full h-80 flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col gap-5 text-gray-600 dark:text-gray-100 py-10">
          <h1 className="text-center text-3xl font-extrabold uppercase">
            Nuestros Servicios
          </h1>

          <div className="flex items-center justify-center gap-5 flex-wrap">
            <button
              className={`${
                !selectedCategory
                  ? "bg-transparent border-2 border-primary-100 text-primary-100 dark:text-gray-100 dark:border-gray-100"
                  : "bg-primary-300 text-white dark:bg-gray-100 dark:text-primary-300"
              } py-2 px-5 rounded-xl uppercase font-medium`}
              onClick={() => setSelectedCategory(null)}
            >
              Todos
            </button>
            {categoryServices.map((category) => (
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

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center place-content-center gap-5`}
          >
            {filteredServices.map((service) => (
              <CardService key={service._id} services={service} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
