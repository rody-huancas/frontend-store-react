import { useState, useEffect } from "react";
// api
import { getAllAbout } from "api/api";
import { Spinner } from "components";

export const About = () => {
  const [about, setAbout] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchAllAbout = async () => {
      try {
        setLoad(true);
        const response = await getAllAbout();
        setAbout(response);
      } catch (error) {
        console.error("Error fetching About:", error);
      } finally {
        setLoad(false);
      }
    };

    fetchAllAbout();
  }, []);

  const { description, mision, title, vision } = about[0] || [];

  // efecto al cambiar de pagina
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
        <div className="my-10 text-gray-600 dark:text-gray-100 flex flex-col gap-10">
          <h1 className="text-center text-3xl font-extrabold">{title}</h1>
          <div className="flex flex-col md:flex-row justify-between gap-10">
            <p className="w-full md:w-2/3 text-justify">{description}</p>
            <div className="w-full md:w-1/3 h-72 md:h-60 overflow-hidden">
              <img
                src="/images/logo.png"
                alt={title}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="flex flex-col gap-5">
              <span className="font-bold text-xl uppercase">Misión</span>
              <p className="text-justify">{mision}</p>
            </div>
            <div className="flex flex-col gap-5">
              <span className="font-bold text-xl uppercase">Visión</span>
              <p className="text-justify">{vision}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
