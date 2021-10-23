import { createSlice } from '@reduxjs/toolkit'


let users = [
    {
        userName: "Bob",
        email: "bob@gmail.com",
        name: "Bob",
        surname: "Smit"
    },
    {
        userName: "Alis",
        email: "alis@gmail.com",
        name: "Alis",
        surname: "Kim"
    },
];

let getUser = function (userName) {

    var user = users.filter(x => x.userName == userName);
    console.log(user);
    if (user.length == 1) {
        return user[0];
    }
    return null;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: false,
        user: null,
    },
    reducers: {
        login: (state, action) => {

            var user = getUser(action.payload.userName)

            if (user == null) {
                alert("Пользователь не найден!")
                return;
            }

            state.user = user;
            state.isAuthorized = true;
        },
        logout: (state) => {
            state.isAuthorized = false;
            state.userName = "";
        },
        register: (state, action) => {

            var newUser = action.payload;

            if (getUser(newUser.userName) != null) {
                alert("Пользователь c таким логином уже зарегестрирован!")
                return;
            }

            users.push(newUser);

            state.user = newUser;
            state.isAuthorized = true;
        }
    },
});

export const { login, logout, register } = authSlice.actions

export default authSlice.reducer