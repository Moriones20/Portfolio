import Sidebar from "@/components/sidebar/sidebar";
import Home from "@/components/home/home";
import About from "@/components/home/about/about";
import Technologies from "@/components/home/technologies/technologies";
import Portfolio from "@/components/home/portfolio/portfolio";
import Contact from "@/components/home/contact/contact";

export default function App() {
  return (
    <main className="flex min-h-screen items-stretch justify-between">
      <div className="w-1/4 bg-blue-500">
        <Sidebar />
      </div>
      <div className="w-3/4">
        <Home />
        <About />
        <Technologies />
        <Portfolio />
        <Contact />
      </div>
    </main>
  );
}
