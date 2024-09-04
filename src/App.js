import React from "react";
import { GlobalStyles } from "./assets/styles/GlobalStyles";
import { Routes, Route, useLocation } from "react-router-dom";
// import { useLocation, useRoutes } from "react-router-dom";

//Components
import WelcomeScreen from "./components/welcomeScreen/WelcomeScreen";
import Instruction from "./pages/instruction/Instruction";
import Creator from "./pages/creator/Creator";
import View from "./pages/view/View";
import Themes from "./pages/themes/Themes";


function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyles/>
      <div className="App">
        {/* <WelcomeScreen /> */}
            <Routes >
              <Route location={location} key={location.key} path="/" element={<Instruction />} />
              <Route location={location} key={location.key} path="themes" element={<Themes />} />
              <Route location={location} key={location.key} path="creator" element={<Creator />} />
              <Route location={location} key={location.key} path="view" element={<View />} />
              {/* { <Route path="*" element={<NotFound />} />} */}
            </Routes>
      </div>
    </>
  );
}

export default App;
