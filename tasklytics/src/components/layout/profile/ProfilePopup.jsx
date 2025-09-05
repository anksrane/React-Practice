import React, {useRef} from 'react';
import { useDispatch } from 'react-redux';
import { setIsProfilePopupOpen } from '../../../features/ui/profilePopupSlice';

function ProfilePopup({isOpen}) {
  const dispatch = useDispatch();
  const backdropRef = useRef(null);

  const handleMouseDown = (e) => {
    setTimeout(() => {
      backdropRef.current.clickedOnBackdrop = e.target === backdropRef.current;
    }, 0);
  };

  const handleMouseUp = (e) => {
    if (backdropRef.current.clickedOnBackdrop && e.target === backdropRef.current) {
      dispatch(setIsProfilePopupOpen(false));
    }
  };  
  return (
    <div
      ref={backdropRef}
      className={isOpen ? 'fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center cursor-pointer':'hidden'}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className='bg-white w-96 h-fit flex flex-col p-4 cursor-auto'
        onMouseDown={(e) => e.stopPropagation()}
        onMouseUp={(e) => e.stopPropagation()}
      >
        <h1>Popup</h1>
      </div>
    </div>
  )
}

export default ProfilePopup
