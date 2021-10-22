import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false,
        userName: "",
    },
    reducers: {
        login: (state, action) => {

            console.log(state, action);

            state.isAuthorized = true;
            state.userName = action.payload.userName;
        },
        logout: (state) => {
            state.isAuthorized = false;
            state.userName = "";
        },
    },
});

export const { login, logout } = authSlice.actions

export default authSlice.reducer