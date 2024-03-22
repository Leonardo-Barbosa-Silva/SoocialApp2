import { createAsyncThunk } from "@reduxjs/toolkit";
import { USERS_API, POSTS_API } from "apis";


export const loginUser = createAsyncThunk(
    'auth/login',
    async (userData, thunkAPI) => {
        try {
            const resp = await USERS_API.post("/auth/login", userData)
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
            const resp = await USERS_API.post("/auth/register", userData)
            
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
            const resp = await USERS_API.get("/me", {
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

export const getMyFeed = createAsyncThunk(
    'get/myFeed',
    async (_, thunkAPI) => {
        try {
            const resp = await POSTS_API.get("/my/feed", {
                headers: {
                    Authorization: `Bearer ${thunkAPI.getState().users.token}`
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
    getMe,
    getMyFeed
}