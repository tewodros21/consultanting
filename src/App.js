import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./componets/About/About";
import Detail from "./componets/Detail/Detail";
import HeroSection from "./componets/Hero-Section/HeroSection";

import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
