import "./App.css";
import Terminal from "./components/Terminal";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <div className="show">
        <Terminal />
      </div>
      <div className="hide">
        <AboutMe />
      </div>
    </div>
  );
}

export default App;
