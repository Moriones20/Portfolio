import "./App.css";
import Cursor from "./components/mousemove/mousemove";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import About from "./components/home/about/about";
import Portfolio from "./components/home/portfolio/portfolio";
import Contact from "./components/home/contact/contact";

function App() {
  return (
    <main className="main">
      <Cursor />
      <div className="mainSidebar">
        <Sidebar />
      </div>
      <div className="mainHome">
        <div id="home" className="h-screen">
          <Home />
        </div>
        <div id="about" className="h-screen">
          <About />
        </div>
        <div id="portfolio" className="h-screen">
          <Portfolio />
        </div>
        <div id="contact" className="h-screen">
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
