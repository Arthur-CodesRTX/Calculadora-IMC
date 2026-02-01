import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./containers/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./containers/results/results";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/results" element={<Results />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
