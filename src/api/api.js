import axios from "axios";

const clienteAxios = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}api`,
});

// CONFIGURACIÓN
export const getAllConfigs = async () => {
  try {
    const { data } = await clienteAxios.get("/config");
    return data;
  } catch (error) {
    console.log(error);
  }
}

// SLIDER
export const getAllSlider = async () => {
  try {
    const { data } = await clienteAxios.get("/slider");
    return data;
  } catch (error) {
    console.log(error);
  }
}

// ABOUT
export const getAllAbout = async () => {
  try {
    const { data } = await clienteAxios.get("/about");
    return data;
  } catch (error) {
    console.log(error);
  }
}

// SERVICE
export const getAllCategoryService = async () => {
  try {
    const { data } = await clienteAxios.get("/categoryServices");
    return data;
  } catch (error) {
    console.log(error);
  }
}

// SERVICE
export const getAllService = async () => {
  try {
    const { data } = await clienteAxios.get("/service");
    return data;
  } catch (error) {
    console.log(error);
  }
}