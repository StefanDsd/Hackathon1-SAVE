import Home from "./pages/Home";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import City from "./components/city/City";
import Header from "./components/header/Header";
import AboutUs from "./pages/AboutUs";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/City" element={<City />} />
          <Route path="/About Us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
