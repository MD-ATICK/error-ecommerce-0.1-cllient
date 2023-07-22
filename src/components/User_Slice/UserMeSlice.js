import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const UserMeFetch = createAsyncThunk('MeUser/MeUser', async () => {
    const res = await fetch(`http://localhost:8080/api/user/me` , {
        method : "GET" ,
        headers : {
            Accept : "appllication/json" ,
            "Content-Type" : "application/json"
        } ,
        credentials : "include"
    })
    const data = await res.json()
    console.log(data)
    return data;
})

export const UserMeSlice = createSlice({
    name: 'MeUser',
    initialState: {
        user: '',
        error: null,
        success: false,
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(UserMeFetch.pending, (state) => {
            state.loading = true
            state.success = false
            state.user = ''
            state.error = null
        })
        builder.addCase(UserMeFetch.fulfilled, (state, action) => {
            state.user = action.payload
            state.error = null
            state.loading = false
            state.success = true
        })
        builder.addCase(UserMeFetch.rejected, (state, action) => {
            state.success = false
            state.loading = false
            state.user = ''
            state.error = action.payload.error
        })
    }
})



export default UserMeSlice.reducer;