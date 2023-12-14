import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation  from "./components/navigation";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
