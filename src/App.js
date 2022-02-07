import './App.css';
import { Router } from "@reach/router";
import Home from "./components/Home";
import Number from "./components/Number";
import Word from "./components/Word";
import AddStyle from "./components/AddStyle";


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <Number path="/:int" />
        <Word path="/:word"/>
        <AddStyle path=":word/:fontColor/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
