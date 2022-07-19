import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Dashboard from "./Components/Dashboard/Dashboard";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="container">
    <Sidebar/>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
