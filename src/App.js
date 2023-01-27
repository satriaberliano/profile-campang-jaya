import React from "react";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import { Route, Routes } from "react-router-dom";
import { AboutPath, ContactPath, PetaPotensiPath, PotensiPath, RootPath } from "./routes";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import AppFooterInfo from "./components/AppFooterInfo";
import PotensiPage from "./pages/PotensiPage";
import ContactPage from "./pages/ContactPage";
import PetaPotensiPage from "./pages/PetaPotensiPage";

function App(){
  return(
    <div className="app-container">
      <header>
        <AppHeader />
      </header>
      <main>
        <Routes >
          <Route path={RootPath} element={<HomePage />} />
          <Route path={AboutPath} element={<AboutPage />} />
          <Route path={PotensiPath} element={<PotensiPage />} />
          <Route path={ContactPath} element={<ContactPage />} />
          <Route path={PetaPotensiPath} element={<PetaPotensiPage />} />
        </Routes>
      </main>
      <footer>
        <AppFooterInfo />
        <AppFooter />
      </footer>
    </div>
  )
};

export default App;