import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-patter bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Hero />
        </div>
        <div className="relative z-0">
          <About />
          <Tech />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
