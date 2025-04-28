import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddPost from './pages/Posts/AddPost';
import EditPost from './pages/Posts/EditPost';
import AllPosts from './pages/Posts/AllPosts';
import PostDetails from './pages/Posts/PostDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllPosts />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  )
}

export default App
