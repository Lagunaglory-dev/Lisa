import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//components
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

//pages
import Welcome from "./assets/components/Welcome";
import Home from "./assets/components/Home";
import About from "./assets/components/About";
import Gallery from "./assets/components/Gallery";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
