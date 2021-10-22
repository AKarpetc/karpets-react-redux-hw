import {
    TextField, Button, Typography
} from '@material-ui/core';
import react, { useState } from "react"
import { useDispatch } from 'react-redux'
import { login, logout } from '../../utils/auth';
import "./Login.css";
import {
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";


export default function Login() {
    const [userName, setUserName] = useState("Bob");
    const [password, setPassword] = useState("Bob");

    const dispatch = useDispatch();
    let history = useHistory();
    let location = useLocation();
    
    return (
        <div className="form">
            <div className="form__row">
                <Typography variant="h4" component="h4">
                    Авторизация
                </Typography>
            </div>
            <div className="form__row field">
                <label className="field__desc">Логин:</label>
                <TextField value={userName} onChange={(e) => { setUserName(e.target.value); }} className="field__value" id="login" label="Логин" variant="standard" />
            </div>
            <div className="form__row field">
                <label className="field__desc">Пароль:</label>
                <TextField value={password} onChange={(e) => { setPassword(e.target.value); }} className="field__value" id="password" label="Пароль" label="Password" type="password" />
            </div>

            <div className="form__row form__row__buttons field">
                <Button onClick={() => {
                    dispatch(login({ userName, password }))

                }}
                    color="primary" variant="contained"> Вход </Button>
            </div>

        </div >
    )
}
