import logo from "./logo.svg";
import "./App.css";
import Bubbles from "./components/bubbles";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "whitesmoke" }}>
      <div style={{ backgroundColor: "sienna", marginTop: 30, marginLeft: 30 }}>
        <Bubbles />
      </div>
      <div style={{ backgroundColor: "pink" }}>
        <Bubbles />
      </div>
      <div style={{ backgroundColor: "gold" }}>
        <Bubbles />
      </div>
      <div style={{ backgroundColor: "silver" }}>
        <Bubbles />
      </div>
    </div>
  );
}

export default App;
