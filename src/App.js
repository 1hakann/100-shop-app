import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage"; 
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
