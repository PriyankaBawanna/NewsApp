import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Description from "../Description/Description";

import Entertainment from "./Entertainment";

import Latest from "./Latest";
const RoutesPath = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Latest" element={<Latest />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/Description" element={<Description />} />
          <Route path="*" element={<h1>Page not found </h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default RoutesPath;
