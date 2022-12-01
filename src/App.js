import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Modal } from "react";
import { city } from "./tips-data";

function App() {
  return (
    <div className="App">
      {/* <Modal
        imgLink="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        listItems={city.map((e) => (
          <>
            <h3>{e.tipTitle}</h3>
            <li>{e.tip}</li>
          </>
        ))}
      /> */}
      <Modal imgLink="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80">
        {city.map((e) => (
          <>
            <h3>{e.tipTitle}</h3>
            <li>{e.tip}</li>
          </>
        ))}
      </Modal>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
