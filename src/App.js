import "./App.css";
import Modal from "./components/city-modal";

const link = [{ city: "city1" }, { city: "city2" }, { city: "city3" }];

function App() {
  return (
    <div className="App">
      <Modal
        link="https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        listItems={link.map((e) => (
          <li>{e.city}</li>
        ))}
      />
    </div>
  );
}

export default App;
