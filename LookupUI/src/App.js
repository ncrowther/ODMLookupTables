import React from "react";
import DiallingCode from "./components/DiallingCode/DiallingCode";
import CurrencyCode from "./components/CurrencyCode/CurrencyCode";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="DiallingCode" element={<DiallingCode />} />
          <Route path="CurrencyCode" element={<CurrencyCode />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
