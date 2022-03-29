import logo from "./logo.svg";
import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//style
import { GlobalStyle } from "./styles/AppGolbalStyles";
import back from "./data/img/peakpx.jpg";

//Pages
import { Home } from "./pages/Home";

//components
import { Header } from "./components/header/headerComponent";
import { LogInOut } from "./components/sigIn-out/signInComponent";
import { UserProvider } from "./context/userContext";

function App() {
  const location = useLocation();

  return (
    <UserProvider>
      <AnimatePresence>
        <GlobalStyle backgroundImage={back} fontColor={"gray"} />
        <Header key="header" />
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div> about </div>} />
          <Route path="/services" element={<div> services </div>} />
          <Route path="/log" element={<LogInOut />} />
        </Routes>
      </AnimatePresence>
    </UserProvider>
  );
}

export default App;
