import {
    TextField, Button, Typography
} from '@material-ui/core';
import react from "react"

import "./Register.css"

export default class Login extends react.Component {
    render() {
        return (
            <div className="form">
                <div className="form__row">
                    <Typography variant="h4" component="h4">
                        Регистрация
                    </Typography>
                </div>
                <div className="form__row field">
                    <label className="field__desc">Логин:</label>
                    <TextField className="field__value" id="login" label="Логин" variant="standard" />
                </div>
                <div className="form__row field">
                    <label className="field__desc">Пароль:</label>
                    <TextField className="field__value" id="password" label="Пароль" label="Password" type="password" />
                </div>
                <div className="form__row field">
                    <label className="field__desc">Повторите пароль:</label>
                    <TextField className="field__value" id="password" label="Пароль" label="Password" type="password" />
                </div>

                <div className="form__row field">
                    <label className="field__desc">ФИО:</label>
                    <TextField className="field__value" id="login" label="Логин" variant="standard" />
                </div>

                <div className="form__row field">
                    <label className="field__desc">Электроааня почта:</label>
                    <TextField className="field__value" id="login" label="Логин" variant="standard" />
                </div>
                
                <div className="form__row form__row__buttons field">
                    <Button color="primary" variant="contained"> Зарегестрироваться </Button>
                </div>

            </div>
        )
    }
}