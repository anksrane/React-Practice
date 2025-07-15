import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button} from '../index';
import { FaTasks } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { IoAnalyticsSharp } from "react-icons/io5";
import { TiPower } from "react-icons/ti";

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../features/auth/authActions'
import { toggleSidebar } from "../../features/ui/uiSlice"

function Sidebar({isOpen}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = async () => {
      dispatch(toggleSidebar());
      await dispatch(logoutUser());
      navigate('/login');
    };    
  
    const navItems=[
      { name: 'Dashboard', path:"/dashboard", icon:MdDashboardCustomize},
      { name: 'Task', path:"/task", icon: BiTask},
      { name: 'Team', path: '/team', icon:MdGroups },
      { name: 'Analytics', path: '/analytics',icon:IoAnalyticsSharp },    
    ]    

    return (
      <aside className={`h-screen bg-gray-100 border-r shadow-md p-2 flex flex-col justify-between duration-500 ${isOpen? 'w-64' : 'w-20'}`}>
        <div>
          <div className={`flex justify-center items-center gap-2 text-xl font-bold text-center transition-opacity py-2 duration-300`}>
            <FaTasks className='text-xl text-gray-700'/>
            <h2 className={`text-xl font-bold text-center text-gray-700 ${isOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`}> Tasklytics</h2>
          </div>

          <nav className="space-y-3 mt-5">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-md font-medium transition 
                    ${isActive ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-900 hover:text-white duration-300'}`
                  }
                >
                  <Icon className="text-xl 'text-gray-700 hover:bg-gray-900" />
                  {isOpen && <span>{item.name}</span>}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div className="mt-6 border-t pt-4">
          <Button
            variant="outline"
            className="w-full flex items-center gap-2 justify-center text-red-600 border-red-600 hover:bg-red-100"
            // onClick={() => console.log('Logout here')}
            onClick={handleLogout}
          >
            <TiPower className='text-2xl'/>
            {isOpen && <span>Logout</span>}
          </Button>
        </div>
      </aside>
    )
}

export default Sidebar
