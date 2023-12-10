import { createContext, useState, useEffect } from "react";
// api
import { getAllConfigs } from "api/api";

const ShoppingContext = createContext();

const ShoppingProvider = ({ children }) => {
  const [config, setConfig] = useState([]);
  const [loader, setLoader] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedDarkMode = localStorage.getItem("isDarkMode");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
  });

  // configuración
  useEffect(() => {
    setLoader(true);
    const fetchAllConfig = async () => {
      const response = await getAllConfigs();
      setConfig(response);
      setLoader(false);
    };
    fetchAllConfig();
  }, []);

  // Update local storage when dark mode changes
  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ShoppingContext.Provider
      value={{ config, loader, isDarkMode, toggleDarkMode }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export { ShoppingProvider };
export default ShoppingContext;
