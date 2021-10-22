import {
    TextField, Button, Typography
} from '@material-ui/core';
import react, { useState } from "react"

export default function Login() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    return (
        <div className="form form__register">
            <div className="form__row">
                <Typography variant="h4" component="h4">
                    Регистрация
                </Typography>
            </div>
            <div className="form__row field">
                <label className="field__desc">Логин:</label>
                <TextField value={userName} onChange={e => setUserName(e.target.value)} className="field__value" id="login" label="Логин" variant="standard" />
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
                <label className="field__desc">Фамилия:</label>
                <TextField value={surname} onChange={e => setSurname(e.target.value)} className="field__value" id="login" label="Логин" variant="standard" />
            </div>

            <div className="form__row field">
                <label className="field__desc">Имя:</label>
                <TextField value={name} onChange={e => setName(e.target.value)} className="field__value" id="login" label="Логин" variant="standard" />
            </div>

            <div className="form__row field">
                <label className="field__desc">Электроааня почта:</label>
                <TextField value={email} onChange={e => setEmail(e.target.value)} className="field__value" id="login" label="Логин" variant="standard" />
            </div>

            <div className="form__row form__row__buttons field">
                <Button onClick={() => {

                    alert(userName);

                }} color="primary" variant="contained"> Зарегестрироваться </Button>
            </div>

        </div>
    )
}
