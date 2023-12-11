// hooks
import useShopping from "hooks/useShopping";

export const CardService = ({ services }) => {
  const { name, description } = services || [];
  const { config } = useShopping();
  const { phones } = config[0] || [];

  return (
    <div className="w-80 h-56 bg-white dark:bg-gray-600 dark:text-gray-100 shadow-xl rounded-xl p-5 flex flex-col justify-between gap-4 overflow-hidden">
      <h3 className="font-bold text-lg uppercase text-center">{name}</h3>
      <p className="text-center">{description}</p>

      {phones && (
        <a
          href={`https://api.whatsapp.com/send?phone=51${phones}&text=Quisiera detalles sobre el servicio ${name}`}
          target="_blank"
          className="bg-primary-100 text-white w-full py-3 text-center rounded-xl uppercase font-medium"
        >
          Más información
        </a>
      )}
    </div>
  );
};
