import React from "react";

import { DiallingCodeProvider } from "../../context/DiallingCodeContext";
import DiallingCodeForm from "./DiallingCodeForm";

const DiallingCode = () => {
  return (
    <DiallingCodeProvider>
      <DiallingCodeForm />
    </DiallingCodeProvider>
  );
};

export default DiallingCode;
