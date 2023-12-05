import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MainCarousel from "./components/MainCarousel";
import NavBar from "./components/NavBar";
import ServiceCards from "./components/ServiceCards";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainCarousel />
      <br/>
      <ServiceCards/>
    </div>
  );
}

export default App;
