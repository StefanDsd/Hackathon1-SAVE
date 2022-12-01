import Home from "./pages/Home";
import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import City from "./components/city/City";
import Header from "./components/header/Header";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/footer/Footer";
import CurrencyConverter from "./components/currencyConverter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/City" element={<City />} />
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Currency" element={<CurrencyConverter />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
