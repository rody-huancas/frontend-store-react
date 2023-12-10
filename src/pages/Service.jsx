import { useState, useEffect } from "react";

// api
import { getAllCategoryService, getAllService } from "api/api";
import { CardService } from "components";

export const Service = () => {
  const [services, setServices] = useState([]);
  const [categoryServices, setCategoryServices] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        const serviceResponse = await getAllService();
        const categoryResponse = await getAllCategoryService();
        setServices(serviceResponse);
        setCategoryServices(categoryResponse);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoad(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-5 text-gray-600 py-10">
      <h1 className="text-center text-3xl font-extrabold uppercase">
        Nuestros Servicios
      </h1>

      <div className="flex flex-col gap-5">
        {categoryServices.map((category) => (
          <div key={category._id} className="flex flex-col gap-5">
            <h2 className="font-bold uppercase mt-5">{category.name}</h2>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-${Math.min(
                3,
                services.filter(
                  (service) => service.categoryService._id === category._id
                ).length
              )} place-items-center gap-5`}
            >
              {services
                .filter(
                  (service) => service.categoryService._id === category._id
                )
                .map((filteredService) => (
                  <CardService
                    key={filteredService._id}
                    services={filteredService}
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
