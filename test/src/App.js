import { Routes, Route } from "react-router-dom";
import Blog from "./Pages/Blog";
import "./App.css";
import Home from "./Pages/Home";
import Classes from "./Pages/Classes";
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { Navbar } from "./Pages/Navbar";
import { Registration } from "./Pages/Registration";
import Footer from "./Pages/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/register" element={<Registration />} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
