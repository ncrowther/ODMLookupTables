import React from "react";

import { CurrencyCodeProvider } from "../../context/CurrencyCodeContext";
import CurrencyCodeForm from "./CurrencyCodeForm";

const CurrencyCode = () => {
  return (
    <CurrencyCodeProvider>
      <CurrencyCodeForm />
    </CurrencyCodeProvider>
  );
};

export default CurrencyCode;
