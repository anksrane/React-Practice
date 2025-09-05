import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { toggleSidebar } from "../../features/ui/uiSlice"
import { toggleUserMenu } from '../../features/ui/userMenuSlice';
import { PopoverMenu } from '../index';
import { ProfilePopup } from '../index';

function Header() {
  const dispatch=useDispatch();
  const { isUserMenuOpen } = useSelector((state) => state.userMenu);
  const { isProfilePopupOpen } = useSelector((state) => state.profilePopup);
  const {user}=useSelector((state)=>state.auth);
  const username=user? user.name || user.email : "User";

  const triggerRef = useRef(null);

  const handleUserMenuToggle = () => {
    dispatch(toggleUserMenu());  // ✅ this toggles between true/false
  };  
  return (
    <>
      <div className='w-full py-3 px-4 flex items-center justify-between bg-transparent border-b relative'>
        <button onClick={()=>dispatch(toggleSidebar())}>
          <GiHamburgerMenu className='text-white text-2xl' />
        </button>
        <div ref={triggerRef} className='flex items-center justify-between gap-2 cursor-pointer' onClick={handleUserMenuToggle}>
          <span className='text-white text-xl font-semibold'>{username}</span>
          <FaUser className='text-white text-3xl border border-white p-[2px] rounded-[50%]'/>
        </div>
      </div>
      <PopoverMenu isOpen={isUserMenuOpen} triggerRef={triggerRef} />
      <ProfilePopup isOpen={isProfilePopupOpen}/>
    </>
  )
}

export default Header
