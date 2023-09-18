import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "apis";


export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const resp = await API.USERS.post("/auth/login", userData)
            return resp.data

        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message.toString()) ||
                error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const registerUser = createAsyncThunk(
    'auth/register',
    async (userData, thunkAPI) => {
        try {
            const resp = await API.USERS.post("/auth/register", userData)
            
            return resp.data

        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) ||
                error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const getMe = createAsyncThunk(
    'get/me',
    async (userToken, thunkAPI) => {
        try {
            const resp = await API.USERS.get("/me", {
                headers: {
                    Authorization: `Bearer ${userToken}`
                }
            })
            
            return resp.data

        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) ||
                error.message || error.toString()

            return thunkAPI.rejectWithValue(message)
        }
    }
)



export const userService = {
    loginUser,
    registerUser,
    getMe
}