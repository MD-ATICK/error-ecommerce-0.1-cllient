import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const ProductSingleGetFetch = createAsyncThunk('SingleGetProduct/SingleGetProduct', async (id) => {
    const { data } = await axios.get(`http://localhost:8080/api/singlegetproducts/${id}`)
    return data;
})

export const ProductSingleGetSlice = createSlice({
    name: 'SingleGetProduct',
    initialState: {
        product: '',
        error: null,
        success: false,
        loading: false
    },
    extraReducers: (builder) => {
        builder.addCase(ProductSingleGetFetch.pending, (state) => {
            state.loading = true
            state.success = false
            state.product = ''
            state.error = null
        })
        builder.addCase(ProductSingleGetFetch.fulfilled, (state, action) => {
            state.product = action.payload
            state.error = null
            state.loading = false
            state.success = true
        })
        builder.addCase(ProductSingleGetFetch.rejected, (state, action) => {
            state.success = false
            state.loading = false
            state.product = ''
            state.error = action.payload.error
        })
    }
})



export default ProductSingleGetSlice.reducer;