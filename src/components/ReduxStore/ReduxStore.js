import { configureStore } from "@reduxjs/toolkit";
import Products from '../Product_Slice/PorductGetSlice'
import SingleProduct from '../Product_Slice/SingleProductGetSlice'
import user from '../User_Slice/UserLoginSlice'
import registeruser from '../User_Slice/UserRegisterSlice'
import meinfo from '../User_Slice/UserMeSlice'

const Store = configureStore({
    reducer : {
        Products : Products ,
        SingleProduct : SingleProduct ,
        user : user ,
        registeruser : registeruser ,
        meinfo : meinfo ,
    }
})

export default Store