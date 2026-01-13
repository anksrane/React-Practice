import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
// import Home from "./components/Home";
// import About from "./components/About";

// Import when Lazy Load
const Home = lazy(()=> import("./components/Home"));
const About = lazy(()=> import("./components/About"));
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
