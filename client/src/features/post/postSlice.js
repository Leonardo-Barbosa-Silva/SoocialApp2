import { createSlice } from "@reduxjs/toolkit";
import { postService } from "./postService";


const initialState = {
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: ''
};

const { createPost } = postService;


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        reset: () => initialState,
        resetMessage: state => state.message = ''
    },
    extraReducers: builder => {
        builder
            .addCase(createPost.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isError = false
                state.isLoading = false
                state.message = action.payload.message
            })
            .addCase(createPost.pending, (state, action) => {
                state.isSuccess = false
                state.isError = false
                state.isLoading = true
                state.message = ''
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isSuccess = false
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
    }
});


export const { reset, resetMessage } = postsSlice.actions;
export default postsSlice.reducer;