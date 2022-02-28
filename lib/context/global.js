import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [sharedState, updateSharedState] = useState({
    cartItems: [],
    cartStatus: false,
    cartTotalPrice: 0,
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
