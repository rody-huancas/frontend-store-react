import { useContext } from "react";
import ShoppingContext from "context/ShoppingProvider";

const useShopping = () => {
  return useContext(ShoppingContext);
};

export default useShopping;