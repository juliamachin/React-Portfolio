import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Portfolio from "./Components/Portfolio/Portfolio";
import Dashboard from "./Components/Dashboard/Dashboard";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/React-Portfolio" element={<Layout />}>
          <Route path="/React-Portfolio" element={<Home />} />
          <Route path="/React-Portfolio/about" element={<About />} />
          <Route path="/React-Portfolio/contact" element={<Contact />} />
          <Route path="/React-Portfolio/portfolio" element={<Portfolio />} />
          <Route path="/React-Portfolio/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
