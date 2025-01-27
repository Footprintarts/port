import "./App.css";

// Importing the components

// Header component
import Header from "./components/Header";

// Hero component
import Hero from "./components/Hero";
// About component
import About from "./components/About";

// Footer component
import Footer from "./components/Footer";
// Tabs component
import Tabs from "./components/Tabs";

const App = () => {
  return (
    <div className="bg-[#161616] text-zinc-50">
      <Header />
      <Hero />
      <div className="article">
        {/* RIGHT */}
        <About />
        {/* LEFT */}
        <div>
          <Tabs />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
