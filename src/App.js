import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import TopNav from "./components/TopNav";
import Projects from "./components/Projects";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <TopNav />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
