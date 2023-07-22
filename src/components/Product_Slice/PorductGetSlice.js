import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const ProductGetFetch = createAsyncThunk('GetProduct/GetProduct', async () => {
    const { data } = await axios.get(`http://localhost:8080/api/getproducts`)
    return data;
})

export const ProductGetSlice = createSlice({
    name: 'GetProduct',
    initialState: {
        products: '',
        error: null,
        success: false,
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(ProductGetFetch.pending, (state) => {
            state.loading = true
            state.success = false
            state.products = ''
            state.error = null
        })
        builder.addCase(ProductGetFetch.fulfilled, (state, action) => {
            state.products = action.payload
            state.error = null
            state.loading = false
            state.success = true
        })
        builder.addCase(ProductGetFetch.rejected, (state, action) => {
            state.success = false
            state.loading = false
            state.products = ''
            state.error = action.payload.error
        })
    }
})



export default ProductGetSlice.reducer;