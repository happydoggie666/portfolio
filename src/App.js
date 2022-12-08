import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Contact from "./components/Contact";
import TopNav from "./components/TopNav";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";

import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  return (
    <main>
      <TopNav />
      <Home />
      <Projects />
      {/* <Skills /> */}
      <About />
      <Contact />
      
    </main>
  );
}

export default App;
