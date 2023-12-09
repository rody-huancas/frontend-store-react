import { createContext, useState, useEffect } from "react";
// api
import { getAllConfigs } from "api/api";

const ShoppingContext = createContext();

const ShoppingProvider = ({children}) => {    
    const [config, setConfig] = useState([]);
    const [loader, setLoader] = useState(true)

    // configuración
    useEffect(() => {
        setLoader(true);
        const fetchAllConfig = async() => {
          const response = await getAllConfigs();
          setConfig(response);
          setLoader(false);
        }
        fetchAllConfig();
    }, [])

    return (
        <ShoppingContext.Provider value={{config, loader}}>
            {children}
        </ShoppingContext.Provider>
    )

}

export {ShoppingProvider}
export default ShoppingContext;