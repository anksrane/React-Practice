import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { auth } from '../services/firebase'
import { clearUser } from '../features/auth/authSlice'
import { toast } from 'react-toastify'

function Header() {
  const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = async() => {
    try {
      await auth.signOut();
      dispatch(clearUser());
      toast.success('Logged out successfully!')
      navigate('/login');
    } catch (error) {
      toast.error('Error logging out!');
      console.error('Error signing out:', error);
    }
  }

  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-white">
      <Link to="/" className="text-xl font-bold text-blue-600">
        MyBlog
      </Link>

      <nav className="flex items-center gap-4">
        <Link to="/" className="text-gray-700 hover:text-blue-500">
          All Posts
        </Link>

        {user ? (
          <>
            <Link to="/add-post" className="text-gray-700 hover:text-blue-500">
              Add Post
            </Link>
            <span className="text-sm text-gray-500">
              {user.displayName || user.email}
            </span>
            <button
              onClick={handleLogout}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/signup" className="text-gray-700 hover:text-blue-500">
              Sign Up
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-500">
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
