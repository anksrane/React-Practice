import React, {useEffect, useRef} from 'react'
import { useDispatch } from 'react-redux'
import { setIsUserMenuOpen } from '../../../features/ui/userMenuSlice';
import { setIsProfilePopupOpen } from '../../../features/ui/profilePopupSlice';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../features/auth/authActions';

function PopoverMenu({isOpen,triggerRef}) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const menuRef = useRef(null);    
    useEffect(() => {
        const handleClickOutside = (event) => {
            const clickedOutsideMenu = menuRef.current && !menuRef.current.contains(event.target);
            const clickedOutsideTrigger = triggerRef.current && !triggerRef.current.contains(event.target);        
            if (clickedOutsideMenu && clickedOutsideTrigger) {
            dispatch(setIsUserMenuOpen(false));
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        // Cleanup on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, dispatch, triggerRef]);

    if (!isOpen) return null;  

    const gotoProfile=()=>{
        dispatch(setIsUserMenuOpen(false))
        dispatch(setIsProfilePopupOpen(true));
    }    

    const handleLogout = async () => {
        dispatch(setIsUserMenuOpen(false)) 
        await dispatch(logoutUser());
        navigate('/login');
    };    

  return (
    <div ref={menuRef} className={isOpen ? 'absolute top-14 right-0 border-slate-800 bg-white shadow-lg rounded-md z-10' : 'hidden'}>
      <ul>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b-[1px]" onClick={() => gotoProfile()}
            >Profile</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b-[1px]">Change Password</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  )
}

export default PopoverMenu
