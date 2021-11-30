import {  configureStore } from '@reduxjs/toolkit'
import countReducer from '../redux-slice/count-slice'


export default configureStore({
    reducer: countReducer,
  })