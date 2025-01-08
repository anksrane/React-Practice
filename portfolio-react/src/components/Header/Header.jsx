import {NavLink} from 'react-router-dom';
// import './Header.css';

function Header() {
  return (
    <header className="bg-transparent z-[100] relative header">
      <nav className="px-2 py-3 flex justify-between header-nav">
        <div className="quick-link-container">
          <p className='text-gray-400 font-medium'>Quick Links</p>
          <ul className="flex gap-[10px] header-menu">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active-link text-[16px] text-white' : 'text-[16px] text-white text-opacity-70 hover:text-opacity-100'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active-link text-[16px] text-white' : 'text-[16px] text-white text-opacity-70 hover:text-opacity-100'}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'active-link text-[16px] text-white' : 'text-[16px] text-white text-opacity-70 hover:text-opacity-100'}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="text-center name-container">
          <NavLink to="/">
            <p className='text-gray-400 font-medium'>Hello, my name is</p>
            <p className='text-gray-400 text-white'>Ankit Rane</p>
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Header
