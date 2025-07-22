import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from "../../firebase/authService";

export const loginUserThunk = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const user= await loginUser(email, password);
            return {
                uid: user.uid,
                email: user.email,
            };
        } catch (error) {
            return rejectWithValue(error.message);            
        }
    }
)

export const logoutUserThunk = createAsyncThunk(
    "auth/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            await logoutUser();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)