import { setLoading, setUser, setError, clearUser } from './authSlice';
import { login, logout, onAuthChange } from '../../firebase/authService';

// Login User Method
export const loginUser=(email, password) => async(dispatch) => {
    try {
        dispatch(setLoading(true));
        const result = await login(email, password);
        dispatch(setUser(result.user));
    } catch (err) {
        // Firebase error format
        let message = "Login failed. Please try again.";

        if (err.code === 'auth/invalid-credential' || err.message?.includes("INVALID_LOGIN_CREDENTIALS")) {
            message = "Invalid email or password.";
        } else if (err.code === 'auth/user-not-found') {
            message = "No user found with this email.";
        } else if (err.code === 'auth/wrong-password') {
            message = "Incorrect password.";
        } else if (err.code) {
            message = err.code.replace('auth/', '').replace(/-/g, ' ');
            message = message.charAt(0).toUpperCase() + message.slice(1);
        }

        dispatch(setError(message));
        dispatch(setLoading(false));
    }
}

// logout User Method
export const logoutUser = () => async(dispatch) => {
    try {
        dispatch(setLoading(true));
        await logout();
        dispatch(clearUser());
    } catch (err) {
        dispatch(setError(err.message));
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