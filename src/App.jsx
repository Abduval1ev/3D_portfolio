import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-patter bg-cover bg-no-repeat bg-center">
          <NavBar />
          <Hero />
        </div>
        <div className="relative z-0"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
