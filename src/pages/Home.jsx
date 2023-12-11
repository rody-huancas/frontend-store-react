import { useEffect } from "react";
// components
import { Slider } from "components";

export const Home = () => {
  // efecto al cambiar de pagina
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Slider />

      <div className="flex flex-col md:flex-row md:justify-between gap-16 my-10">
        <div className="w-full md:w-2/3 text-gray-600 dark:text-gray-100">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-extrabold uppercase text-3xl text-center">
              Leugims Diseño Gráfico
            </h1>
            <p className="text-xl capitalize font-medium text-center">
              Transformando Visiones en Imágenes Inspiradoras
            </p>
          </div>
          <p className="mt-2 text-justify">
            Nos enorgullece compartir que nuestra carta de presentación se forja
            a partir de la fidelidad de nuestros valiosos clientes, quienes han
            reconocido y apreciado los excepcionales estándares de excelencia
            que alcanzamos y la dedicación apasionada con la que abordamos cada
            proyecto. En LEUGIMS, nos destacamos por nuestra comprometida
            puntualidad en la entrega de productos y servicios, brindando
            asesoramiento personalizado para asegurar que cada cliente logre los
            resultados más destacados en sus proyectos.
          </p>
        </div>

        <div className="w-full md:w-1/3 h-64">
          <img
            src="/store/home.png"
            alt="home"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </>
  );
};
