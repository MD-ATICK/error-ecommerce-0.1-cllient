import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const UserPostRegisterFetch = createAsyncThunk('PostRegisterUser/PostRegisterUser', async (reigsterData) => {
    const { data } = await axios.post(`http://localhost:8080/api/user/login` , reigsterData , {headers : {"Content-Type" : "application/json"}} )
    return data;
})

export const UserPostRegisterSlice = createSlice({
    name: 'PostRegisterUser',
    initialState: {
        user: '',
        error: null,
        success: false,
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(UserPostRegisterFetch.pending, (state) => {
            state.loading = true
            state.success = false
            state.user = ''
            state.error = null
        })
        builder.addCase(UserPostRegisterFetch.fulfilled, (state, action) => {
            state.user = action.payload
            state.error = null
            state.loading = false
            state.success = true
        })
        builder.addCase(UserPostRegisterFetch.rejected, (state, action) => {
            state.success = false
            state.loading = false
            state.user = ''
            state.error = action.payload.error
        })
    }
})



export default UserPostRegisterSlice.reducer;