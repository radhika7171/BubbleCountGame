import logo from "./logo.svg";
import "./App.css";
import Bubbles from "./components/bubbles";
const bubblesArr = [{ s: 7 }];

function App() {
  return (
    <div className="App">
      <Bubbles {...bubblesArr[0]} />
    </div>
  );
}

export default App;
