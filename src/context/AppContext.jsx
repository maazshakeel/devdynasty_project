import React, { createContext, useState, useContext } from "react";

// Create the context
const MyContext = createContext();

// Create a provider component
export const AppContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <MyContext.Provider value={{ isOpen, setIsOpen, modalData, setModalData }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to access the context values
export const useAppContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
