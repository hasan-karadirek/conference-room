import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MainCarousel from "./components/MainCarousel";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainCarousel />
    </div>
  );
}

export default App;
