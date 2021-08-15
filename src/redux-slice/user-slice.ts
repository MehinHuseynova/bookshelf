import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {userName:'', password:''}
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: state => {
            state.user = {userName:'', password:''}
        }
    }
})

export const { login, logout } = userSlice.actions
export const SelectUser = (state:any) => state?.user;
export default userSlice.reducer;