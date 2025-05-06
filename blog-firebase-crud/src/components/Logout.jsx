import React, { useRef, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../services/firebase'
import { clearUser } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import icon from '../assets/icons/profile.png'

const Modal = ({ onClose }) => {
    const user = useSelector((state) => state.auth.user)    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const modalRef = useRef(null)

    const handleLogout = async() => {
        try {
            await auth.signOut();
            dispatch(clearUser());            
            navigate('/');
            toast.success('Logged out successfully!')
            onClose();
        } catch (error) {
            toast.error('Error logging out!');
            console.error('Error signing out:', error);
        }
    }

    useEffect(()=>{
        const handleClickOutside = (event) =>{
            if(modalRef.current && !modalRef.current.contains(event.target)){
                onClose();
            }
        };

        document.addEventListener('mousedown',handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    },[onClose])

    return (
        // <div className="absolute top-full right-0 z-50">
        <div className="fixed top-14 left-0 z-50 bg-black bg-opacity-30 min-h-screen w-full flex justify-end">
            <div className="bg-white p-3 h-fit rounded-lg shadow-lg relative w-64 border border-gray-300" ref={modalRef}>
                <div className='flex justify-end items-center mb-2'>
                    <button onClick={onClose} className="text-gray-600 hover:text-black text-xl" >✕</button>
                </div>
                <div className="flex flex-col items-center gap-2 ">
                    <img
                        src={user.photoURL || icon}
                        alt="User Avatar"
                        className="w-10 h-10 rounded-full mb-2"
                    />
                    <span className="text-sm font-semibold">{user.displayName || user.email}</span>
                </div>     
                <div className='mt-3 flex justify-end'>
                    <button onClick={handleLogout} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                        Logout
                    </button>
                </div>   
            </div>
        </div>
    );
};

export default Modal;