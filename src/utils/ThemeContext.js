import React, { createContext, useState } from "react";

const ThemeContext = createContext();

function LightModeProvider(props){
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <div>
      <ThemeContext.Provider value={{ lightMode, toggleLightMode }}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext, LightModeProvider };
