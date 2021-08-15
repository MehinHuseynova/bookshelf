import {  configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux-slice/user-slice'


export default configureStore({
    reducer: userReducer,
  })