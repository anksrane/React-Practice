import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { auth } from '../services/firebase'
import { clearUser } from '../features/auth/authSlice'

function Header() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = async() => {
    try {
      await auth.signOut();
      dispatch(clearUser());
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  }
  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      <Link to="/" className="text-xl font-bold text-blue-600">MyBlog</Link>
      <nav className="flex gap-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">All Posts</Link>
        {user ? (
          <>
            <Link to="/add-post" className="text-gray-700 hover:text-blue-500">Add Post</Link>
            <button onClick={handleLogout} className="text-red-500 hover:underline">Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup" className="text-gray-700 hover:text-blue-500">Sign Up</Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
