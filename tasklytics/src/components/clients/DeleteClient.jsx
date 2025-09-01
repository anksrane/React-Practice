import React, { useRef } from 'react'
import { Button, Loader } from '../index';
import { IoIosWarning } from "react-icons/io";
import { toast } from 'react-toastify';

function DeleteClient({onClose}) {
    const backdropRef = useRef(null);

    const handleMouseDown = (e) => {
        setTimeout(() => {
        backdropRef.current.clickedOnBackdrop = e.target === backdropRef.current;
        }, 0);
    };

    const handleMouseUp = (e) => {
        if (backdropRef.current.clickedOnBackdrop && e.target === backdropRef.current) {
        onClose(); 
        }
    }; 
  return (
      <div ref={backdropRef} className='absolute bg-black bg-opacity-50 z-20 w-full h-full cursor-pointer flex items-center justify-center' onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <div className='bg-white h-auto w-96 p-4 overflow-y-auto cursor-auto' onMouseDown={(e) => e.stopPropagation()} onMouseUp={(e) => e.stopPropagation()} >
          <IoIosWarning className='text-5xl m-auto mb-4 text-red-500' />
          <p className={`text-center mb-3 text-gray-800`}>Are you sure you want to Delete this Client?</p>
          <div className='flex items-center justify-center gap-1'>
            <Button type="submit" variant='danger' className='py-1 text-sm font-bold' >Restore</Button>
            <Button type="submit" variant='outline' className='py-1 text-sm font-bold' onClick={onClose}>Cancel</Button>
          </div>
        </div>
      </div>
  )
}

export default DeleteClient
