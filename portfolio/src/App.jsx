import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skillset from './components/Skillset/Skillset';
import Projects from './components/Work/Work';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}/>
        <Route path='skills' element={<Skillset />}/>
        <Route path='work' element={<Projects />}/>
      </Route>
    </Routes>
  )
}

export default App
