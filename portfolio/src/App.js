import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import Home from "./components/home/home";
import About from "./components/home/about/about";
import Technologies from "./components/home/technologies/technologies";
import Portfolio from "./components/home/portfolio/portfolio";
import Contact from "./components/home/contact/contact";

function App() {
  return (
    <main className="flex min-h-screen items-stretch justify-between">
      <div className="w-1/5 bg-blue-500">
        <Sidebar />
      </div>
      <div className="w-4/5 bg-red-500">
        <Home />
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}

export default App;
