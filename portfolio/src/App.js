import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import About from "./components/home/about/about";
import Technologies from "./components/home/technologies/technologies";
import Portfolio from "./components/home/portfolio/portfolio";
import Contact from "./components/home/contact/contact";

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <div>
        <Home />
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
