import React, {useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Header,Footer } from "./components";
import { Outlet } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await authService.getCurrentUser();
      if (userData) {
        dispatch(login({ userData }));
      } else {
        dispatch(logout());
      }
      setLoading(false);
    };

    fetchUser();
  }, [dispatch]);

  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between bg-slate-400'>
      <div className='w-full block'>
        <Header />
          <main>
            <Outlet />
            {/* Loading */}
            {/* Todo */}
          </main>
        <Footer />
      </div>
    </div>
  ) : 
  <div className='min-h-screen flex flex-wrap content-between bg-slate-400'>
    <div className='w-full block'>
      <div className="min-h-screen flex items-center justify-center bg-slate-400">Loading...</div>;
    </div>
  </div>
}

export default App