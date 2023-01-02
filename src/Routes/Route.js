import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";
import FaleC from "./Fale";
import Footer from "./Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <FaleC />
      <Footer />
    </BrowserRouter>
  );
}
