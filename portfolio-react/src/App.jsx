import './App.css'
import { Route,Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';  // Import Home component
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
      </Route>
    </Routes>
  )
}

export default App
