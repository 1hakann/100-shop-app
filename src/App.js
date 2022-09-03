import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={<HomePage />}
        />
         <Route
          path="about"
          element={<AboutPage />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
