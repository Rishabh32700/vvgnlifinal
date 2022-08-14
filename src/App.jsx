import React from "react";

// import Login from "./pages/Login";

import "./index.css";

import { Routes, Route  } from "react-router-dom";
// import Signup from "./pages/Signup";

// import SocialMedia from "./portals/social_media/SocialMedia";
import ThemeLanguageSwitcher from "./components/theme_language_switcher/ThemeLanguageSwitcher";
import PortalsMenu from "./components/portals_menu/PortalsMenu";
import Vvgnli from "./vvgnli/Vvgnli";

import About from './vvgnli/pages/about_us/About'

import Research from './vvgnli/pages/research/Research'

import EResource from './vvgnli/pages/e_resources/EResource'
import DirectorGeneralDesk from "./vvgnli/pages/about_us/components/director__general__desk/DirectorGeneralDesk";



const App = () => {
  return (
    <>
      <div className="app">
        <div className="app__container">
            <ThemeLanguageSwitcher />
            <PortalsMenu />
            <Routes>
              <Route path="/vvgnli" element={<Vvgnli />} />
              <Route path="/vvgnli/about-us" element={<About />} />
              <Route exact path="/vvgnli/about-us/director-general" element={<DirectorGeneralDesk />} />
              <Route exact path="/vvgnli/about-us/vision-mission" element={<DirectorGeneralDesk />} />
              
              <Route path="/vvgnli/research" element={<Research />} />
              <Route path="/vvgnli/e-resource" element={<EResource />} />

              <Route path="/community" element={<>community</>} />
              <Route path="/webinar" element={<>webinar</>} />
              <Route path="/research-section" element={<>research-section</>} />
              <Route path="/dashboard" element={<>dashboard</>} />
            </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
