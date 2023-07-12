import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const DEFAULT_ODM_URL = "http://localhost:9090/DecisionService/rest/v1/Utilities/1.0/LookupTable";

const AppProvider = (props) => {
  const children = props.children;

  //Add app settings here

  const [odmURL, setOdmURL] = useState(DEFAULT_ODM_URL);

  const getDefaultOdmURL = () => {
    return DEFAULT_ODM_URL;
  };

  return (
    <AppContext.Provider
      value={{
        odmURL,
        setOdmURL,
        getDefaultOdmURL,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
