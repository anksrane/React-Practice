import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Work/Work';
import Journey from './components/Journey/Journey';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}/>
        <Route path='work' element={<Projects />}/>
        <Route path='journey' element={<Journey />}/>
      </Route>
    </Routes>
  )
}

export default App
