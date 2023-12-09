import axios from "axios";

const clienteAxios = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}api`,
});

export const getAllConfigs = async () => {
    try {
        const {data} = await clienteAxios.get("/config");
        return data;
    } catch (error) {
       console.log(error); 
    }
}
