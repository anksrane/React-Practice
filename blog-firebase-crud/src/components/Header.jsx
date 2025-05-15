import React, { useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Logout from './Logout'
import { openModal, closeModal } from '../features/modal/modalSlice'

function Header() {
  const user = useSelector((state) => state.auth.user)
  const isModalOpen = useSelector((state)=>state.modal.isModalOpen)
  const dispatch = useDispatch()
  const location = useLocation()

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };  

  useEffect(() => {
    dispatch(closeModal());
  }, [location.pathname]);

  return (
    <header className="flex justify-between items-center p-4 shadow-md bg-slate-900">
      <Link to="/" className="text-xl font-bold text-blue-600">
        Blogify
      </Link>

      <nav className="flex items-center gap-4 relative">
        <Link to="/" className="text-slate-300 hover:text-blue-500">
          All Posts
        </Link>

        {user ? (
          <>
            <Link to="/addPost" className="text-slate-300 hover:text-blue-500">
              Add Post
            </Link>

                <button
                  onClick={handleOpenModal}
                  className="text-slate-300 hover:text-blue-500"
                >
                  Profile
                </button>

                {isModalOpen && (
                  <Logout onClose={handleCloseModal}>
                  </Logout>
                )}            
          </>
        ) : (
          <>
            <Link to="/signup" className="text-slate-300 hover:text-blue-500">
              Sign Up
            </Link>
            <Link to="/login" className="text-slate-300 hover:text-blue-500">
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
