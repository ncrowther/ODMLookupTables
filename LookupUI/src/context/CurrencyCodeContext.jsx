import React, { useContext } from "react";
import axios from "axios";
import { useAppContext } from "./AppContext";

const CurrencyCodeContext = React.createContext();


const CurrencyCodeProvider = ({ children }) => {
  const [results, setResults] = React.useState([]);
  const [CurrencyCodeResult, setCurrencyCodeResult] = React.useState({});
  const { odmURL } = useAppContext();

  const deleteResult = (index) => {
    let newResults = [...results];
    newResults.splice(index, 1);
    setResults(newResults);
  };

  const getCurrencyCodeResult = async (payload) => {
    
    console.log("Using url " + odmURL);
    try {
      // Need to set CORS in liberty server.xml (C:\WebsphereLiberty\wlp\usr\servers\odm81020)
      let { data } = await axios.post(odmURL, payload, {
        Accept: "application/json",
        "Content-Type": "application/json"
        });

      //Update state
      setCurrencyCodeResult(data);
      //Add the latest result to the results array, also add the request payload
      //addCurrencyCodeResult(payload, data);
    } catch (error) {
      console.log("Error fetching result, check URL and port in Home");
      console.log(error);
      //Update state
      let data = { "CurrencyCodeAdvice": JSON.stringify(error) }
      setCurrencyCodeResult(data);
      //addCurrencyCodeResult(payload, data);
    }
  };

  return (
    <CurrencyCodeContext.Provider
      value={{
        getCurrencyCodeResult,
        CurrencyCodeResult,
        deleteResult,
        results,
      }}
    >
      {children}
    </CurrencyCodeContext.Provider>
  );
};

export const useCurrencyCodeContext = () => {
  return useContext(CurrencyCodeContext);
};

export { CurrencyCodeProvider };
