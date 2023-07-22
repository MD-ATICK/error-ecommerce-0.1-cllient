import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const UserPostFetch = createAsyncThunk('PostUser/PostUser', async (loginData) => {
    const { data } = await axios.post(`http://localhost:8080/api/user/login` , loginData  )
    return data;
})

export const UserPostSlice = createSlice({
    name: 'PostUser',
    initialState: {
        user: '',
        error: null,
        success: false,
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(UserPostFetch.pending, (state) => {
            state.loading = true
            state.success = false
            state.user = ''
            state.error = null
        })
        builder.addCase(UserPostFetch.fulfilled, (state, action) => {
            state.user = action.payload
            state.error = null
            state.loading = false
            state.success = true
        })
        builder.addCase(UserPostFetch.rejected, (state, action) => {
            state.success = false
            state.loading = false
            state.user = ''
            state.error = action.payload.error
        })
    }
})



export default UserPostSlice.reducer;