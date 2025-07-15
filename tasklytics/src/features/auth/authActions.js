import { setLoading, setUser, setError, clearUser } from './authSlice';
import { login, logout, onAuthChange } from '../../firebase/authService';

// Login User Method
export const loginUser=(email, password) => async(dispatch) => {
    try {
        dispatch(setLoading(true));
        const result = await login(email, password);
        dispatch(setUser(result.user));
    } catch (error) {
        dispatch(setError(error.message));
    }
}

// logout User Method
export const logoutUser = () => async(dispatch) => {
    try {
        dispatch(setLoading(true));
        await logout();
        dispatch(clearUser());
    } catch (error) {
        dispatch(setError(error.message));
    }
}

// Session Restoring
export const checkAuth = () => async(dispatch) => {
    dispatch(setLoading(true));
    onAuthChange((user)=>{
        if(user) {
            dispatch(setUser(user));
        } else {
            dispatch(clearUser());
        }
        dispatch(setLoading(false));
    })
}