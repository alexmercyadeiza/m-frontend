import { createContext, useContext, useMemo, useState } from "react";
import { products } from "../data";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [sharedState, updateSharedState] = useState({
    cartItems: [],
    cartStatus: false,
    shipping: {
      id: "",
      email: "",
      country: "",
      firstname: "",
      lastname: "",
      address: "",
      city: "",
      state: "",
      postal: "",
      phone: "",
      payment: "",
      method: "dhlexpress",
    },
    total_price: "",
    // cartTotalPrice: 0,
    products: products,
  });

  const contextValue = useMemo(() => {
    return [sharedState, updateSharedState];
  }, [sharedState, updateSharedState]);

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
