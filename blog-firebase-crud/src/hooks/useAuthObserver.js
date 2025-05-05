import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../features/auth/authSlice';

const useAuthObserver = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setUser({ 
                    uid: user.uid, 
                    email: user.email,
                    displayName: user.displayName
                }));
            } else {
                dispatch(clearUser());
            }
        });
        return () => unsubscribe();
    },[dispatch]);
};

export default useAuthObserver;
// This hook listens for authentication state changes and updates the Redux store accordingly. It uses the onAuthStateChanged function from Firebase to check if a user is signed in or not. If a user is signed in, it dispatches the setUser action with the user's information. If no user is signed in, it dispatches the clearUser action to clear the user information from the Redux store.