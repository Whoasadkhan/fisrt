import React, { useState } from "react";

export const themeContext = React.createContext();

export const Theme = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  const toggleHandle = () => {
    setToggle(!toggle);
  };

  return (
    <themeContext.Provider value={{ toggle, toggleHandle }}>
      {children}
    </themeContext.Provider>
  );
};
