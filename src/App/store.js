import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "./Features/userDetailSlice";

export const store=configureStore({
    reducer:{
        app:userDetail,
    }
})