import { useEffect, useState } from "react";
import { registerContact } from "api/api";
import { Spinner } from "components";

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ msg: "", error: false });
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    // Validate name
    if (!contactData.name.trim()) {
      errors.name = "El nombre es obligatorio";
    } else if (!/^[a-zA-Z\s]{1,50}$/.test(contactData.name)) {
      errors.name = "Nombre inválido, solo letras y máximo 50 caracteres";
    }

    // Validate email
    if (!contactData.email.trim()) {
      errors.email = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(contactData.email)) {
      errors.email = "Correo electrónico inválido";
    }

    // Validate phone
    if (!contactData.phone.trim()) {
      errors.phone = "El número de teléfono es obligatorio";
    } else if (!/^\d{1,9}$/.test(contactData.phone)) {
      errors.phone =
        "Número de teléfono inválido, solo números y máximo 9 dígitos";
    }

    setFieldErrors(errors);
    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setMessage({
        msg: "Por favor, corrige los errores en el formulario",
        error: true,
      });
      return;
    }

    try {
      setLoading(true);
      await registerContact(contactData);
      setMessage({ msg: "Mensaje enviado correctamente", error: false });
      setContactData({
        name: "",
        email: "",
        phone: "",
        description: "",
      });
    } catch (error) {
      console.log(error?.response?.data?.error);
      setMessage({ msg: "Hubo un error al enviar el mensaje", error: true });
    } finally {
      setLoading(false);
      setTimeout(() => {
        setMessage({ msg: "", error: false });
      }, 5000);
    }
  };

  // efecto al cambiar de pagina
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="my-10 flex justify-center gap-10 text-gray-600 dark:text-gray-100">
      <div className="w-full md:w-1/2 flex flex-col gap-5 px-5">
        <h1 className="text-center text-3xl font-extrabold uppercase">
          Contáctanos
        </h1>
        <p className="text-justify">
          En Leugims, estamos aquí para convertir tus ideas en impactantes obras
          de arte visual. ¿Listo para darle un impulso único a tu marca?
          ¿Necesitas una presencia en línea que destaque? ¡Nosotros lo hacemos
          posible!
        </p>
        {!message.error && message.msg !== "" && (
          <div
            className={`${
              message.error ? "bg-red-500" : "bg-primary-100"
            } text-white font-medium text-md uppercase px-5 py-3 rounded-sm`}
          >
            {message.msg.split("\n").map((errorMsg, index) => (
              <div key={index}>{`• ${errorMsg}`}</div>
            ))}
          </div>
        )}
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              value={contactData.name}
              onChange={handleChange}
              className={`w-full py-3 px-5 rounded-sm border border-gray-200 outline-none ${
                fieldErrors.name ? "border-red-500" : ""
              }`}
            />
            {fieldErrors.name && (
              <span className="text-red-500">{fieldErrors.name}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Correo Electrónico"
              name="email"
              value={contactData.email}
              onChange={handleChange}
              className={`w-full py-3 px-5 rounded-sm border border-gray-200 outline-none ${
                fieldErrors.email ? "border-red-500" : ""
              }`}
            />
            {fieldErrors.email && (
              <span className="text-red-500">{fieldErrors.email}</span>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Número de teléfono"
              name="phone"
              value={contactData.phone}
              onChange={handleChange}
              className={`w-full py-3 px-5 rounded-sm border border-gray-200 outline-none ${
                fieldErrors.phone ? "border-red-500" : ""
              }`}
            />
            {fieldErrors.phone && (
              <span className="text-red-500">{fieldErrors.phone}</span>
            )}
          </div>

          <textarea
            name="description"
            value={contactData.description}
            onChange={handleChange}
            className={`w-full py-3 px-5 rounded-sm border border-gray-200 outline-none min-w-full max-w-full min-h-[100px] max-h-[150px]`}
            placeholder="Mensaje"
          ></textarea>

          {loading ? (
            <div className="w-full flex items-center justify-center my-5">
              <Spinner />
            </div>
          ) : (
            <button className="text-white bg-primary-100 py-3 rounded-sm uppercase font-medium">
              Enviar
            </button>
          )}
        </form>
      </div>
      <div className="w-1/3 hidden md:block">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.907619581229!2d-79.84874975698489!3d-6.781096748853069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef24d85d0459%3A0xb57f49c552e48fa4!2sLos%20Sauces%20144%2C%20Chiclayo%2014008!5e0!3m2!1ses-419!2spe!4v1702226970234!5m2!1ses-419!2spe"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
