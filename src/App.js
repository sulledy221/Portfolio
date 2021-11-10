import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <About />
      <Contact />
      <Footer />
      <Header />
      <Portfolio />
      <Resume />
    </div>
  );
}

export default App;
