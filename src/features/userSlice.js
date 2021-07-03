import { createSlice } from '@reduxjs/toolkit';

// dispatch action to change data 
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            // payload default object 
            state.user = action.payload;
        },
        logout: (state) => {
            state.user += null;
        },
    },
});

export const { login, logout } = userSlice.actions;

// pull out information 
export const selectUser = state => state.user.user;

export default userSlice.reducer;