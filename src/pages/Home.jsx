// components
import { Slider } from "components";

export const Home = () => {
  return (
    <>
      <Slider />

      <div className="flex flex-col md:flex-row md:justify-between gap-5 my-10">
        <div className="w-full md:w-2/3 text-gray-600">
          <div className="flex flex-col items-center gap-2">
            <h1 className="font-extrabold uppercase text-3xl text-center">
              Leugims Diseño Gráfico
            </h1>
            <p className="text-xl capitalize font-medium text-center">
              Transformando Visiones en Imágenes Inspiradoras
            </p>
          </div>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            corporis ratione harum! A, aliquid, incidunt corporis itaque nihil
            nemo facilis repellat architecto rem aspernatur possimus quaerat.
            Explicabo, velit ad natus distinctio nobis voluptatem similique
            adipisci asperiores nam! Ipsa autem hic, soluta voluptates possimus
            aut excepturi non nemo ad repudiandae temporibus?
          </p>
        </div>

        <div className="w-full md:w-1/3 h-64">
          <img
            src="/public/images/logo.png"
            alt="Logo"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </>
  );
};
