import { createAsyncThunk } from "@reduxjs/toolkit";
import { POSTS_API } from "apis";

const createPost = createAsyncThunk(
    'posts/create',
    async (postData, thunkAPI) => {
        try {
            const resp = await POSTS_API.post('/create', postData, {
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



export const postService = {
    createPost
}