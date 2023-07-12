import React, { useContext } from "react";
import axios from "axios";
import { useAppContext } from "./AppContext";

const DiallingCodeContext = React.createContext();


const DiallingCodeProvider = ({ children }) => {
  const [results, setResults] = React.useState([]);
  const [DiallingCodeResult, setDiallingCodeResult] = React.useState({});
  const { odmURL } = useAppContext();

  const deleteResult = (index) => {
    let newResults = [...results];
    newResults.splice(index, 1);
    setResults(newResults);
  };

  const getDiallingCodeResult = async (payload) => {
    
    console.log("Using url " + odmURL);
    try {
      // Need to set CORS in liberty server.xml (C:\WebsphereLiberty\wlp\usr\servers\odm81020)
      let { data } = await axios.post(odmURL, payload, {
        Accept: "application/json",
        "Content-Type": "application/json"
        });

      //Update state
      setDiallingCodeResult(data);
      //Add the latest result to the results array, also add the request payload
      //addDiallingCodeResult(payload, data);
    } catch (error) {
      console.log("Error fetching result, check URL and port in Home");
      console.log(error);
      //Update state
      let data = { "DiallingCodeAdvice": JSON.stringify(error) }
      setDiallingCodeResult(data);
      //addDiallingCodeResult(payload, data);
    }
  };

  return (
    <DiallingCodeContext.Provider
      value={{
        getDiallingCodeResult,
        DiallingCodeResult,
        deleteResult,
        results,
      }}
    >
      {children}
    </DiallingCodeContext.Provider>
  );
};

export const useDiallingCodeContext = () => {
  return useContext(DiallingCodeContext);
};

export { DiallingCodeProvider };
