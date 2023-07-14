import "./App.css";
import Cursor from "./components/mousemove/mousemove";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/home/about/about";
import Portfolio from "./components/home/portfolio/portfolio";
import Contact from "./components/home/contact/contact";

function App() {
  return (
    <main className="main">
      <div className="cursor">
        <Cursor />
      </div>
      <div className="mainNavbar">
        <Navbar />
      </div>
      <div className="mainSidebar">
        <Sidebar />
      </div>
      <div className="mainHome">
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
