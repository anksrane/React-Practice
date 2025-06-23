import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button} from '../index';

function Sidebar() {
    const navItems=[
      {name:"Dashboard",link:"/dashboard"},
      {name:"Task",link:"/task"},
      { name: 'Team', path: '/team' },
      { name: 'Analytics', path: '/analytics' },    
    ]    
  return (
    <aside className="w-64 h-screen bg-gray-100 border-r shadow-md p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-6 text-center">Tasklytics</h2>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md font-medium transition 
                ${isActive ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-200'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="mt-6 border-t pt-4">
        <Button
          variant="outline"
          className="w-full flex items-center gap-2 justify-center text-red-600 border-red-600 hover:bg-red-100"
          onClick={() => console.log('Logout here')}
        >
          Logout
        </Button>
      </div>
    </aside>
  )
}

export default Sidebar
