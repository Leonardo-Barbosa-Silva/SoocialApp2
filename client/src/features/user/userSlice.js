import { createSlice } from "@reduxjs/toolkit";
import { userService } from "./userService";


const initialState = {
    mode: "dark",
    user: null,
    token: null,
    posts: [],
    isLogged: false,
    isRegistered: false,
    isError: false,
    isLoading: false,
    message: ''
}

const { loginUser, registerUser, getMe } = userService


export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        reset: () => initialState,
        resetMessage: (state) => { state.message = '' },
        setMode: (state) => { state.mode = state.mode === "light" ? "dark" : "light" }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload.item
                state.token = action.payload.token
                state.isLogged = true
                state.isRegistered = true
                state.isError = false
                state.isLoading = false
                state.message = action.payload.message
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.user = null
                state.token = null
                state.isLogged = false
                state.isRegistered = false
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(loginUser.pending, (state, action) => {
                state.user = state.user || null
                state.token = state.token || null
                state.isLogged = state.isLogged || false
                state.isRegistered = state.isRegistered || false
                state.isError = false
                state.isLoading = true
                state.message = ''
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload.item
                state.token = action.payload.token
                state.isLogged = true
                state.isRegistered = true
                state.isError = false
                state.isLoading = false
                state.message = action.payload.message
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.user = null
                state.token = null
                state.isLogged = false
                state.isRegistered = false
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(registerUser.pending, (state, action) => {
                state.user = state.user || null
                state.token = state.token || null
                state.isLogged = state.isLogged || false
                state.isRegistered = state.isRegistered || false
                state.isError = false
                state.isLoading = true
                state.message = ''
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.user = action.payload.item
                state.token = JSON.parse(localStorage.getItem('persist:root')).token
                state.isLogged = true
                state.isRegistered = true
                state.isError = false
                state.isLoading = false
                state.message = action.payload.message
            })
            .addCase(getMe.rejected, (state, action) => {
                state.user = null
                state.token = null
                state.isLogged = false
                state.isRegistered = false
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(getMe.pending, (state, action) => {
                state.user = state.user || null
                state.token = state.token || null
                state.isLogged = state.isLogged || false
                state.isRegistered = state.isRegistered || false
                state.isError = false
                state.isLoading = true
                state.message = ''
            })
    }
})


export const { reset, resetMessage, setMode } = usersSlice.actions;
export default usersSlice.reducer;