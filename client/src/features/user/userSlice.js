import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token: null,
    posts: [],
    isLogged: false,
    isRegistered: false,
    isError: false,
    isLoading: false,
    message: ''
}


export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        reset: () => initialState,
        resetMessage: (state) => { state.message = '' },
        setMode: (state) => { state.mode = state.mode === "light" ? "dark" : "light" }
    },
    extraReducers: () => {}
})


export const { reset, resetMessage, setMode } = usersSlice.actions;
export default usersSlice.reducer;