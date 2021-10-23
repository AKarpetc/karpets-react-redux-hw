import {
    TextField, Button, Typography
} from '@material-ui/core';
import react, { useState } from "react"
import { register } from '../../utils/auth';
import addHelpDialog from '../../hoks/addHelpDialog';

import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const dispatch = useDispatch();
    var TextLabel = ({ value }) => <label className="field__desc">{value}</label>;

    var LoginLabel = addHelpDialog(TextLabel, "Уникальное имя пользователя!");
    let PasswordLabel = addHelpDialog(TextLabel, "Пароль который будет испольховаться для входа в систему!");
    let RepidPasswordLabel = addHelpDialog(TextLabel, "Повторите пароль для исключения опечаток!");
    let EmailLabel = addHelpDialog(TextLabel, "Email на который придет письмо с подтверждением регистрации");


    return (
        <div className="form form__register">
            <div className="form__row">
                <Typography variant="h4" component="h4">
                    Регистрация
                </Typography>
            </div>
            <div className="form__row field">
                <LoginLabel value="Логин" />
                <TextField value={userName} onChange={e => setUserName(e.target.value)} className="field__value" id="login" label="Логин" variant="standard" />
            </div>
            <div className="form__row field">
                <PasswordLabel value="Пароль" />
                <TextField className="field__value" id="password" label="Пароль" label="Password" type="password" />
            </div>
            <div className="form__row field">
                <RepidPasswordLabel value="Павторите пароль" />
                <TextField className="field__value" id="password" label="Пароль" label="Password" type="password" />
            </div>

            <div className="form__row field">
                <label className="field__desc">Фамилия:</label>
                <TextField value={surname} onChange={e => setSurname(e.target.value)} className="field__value" id="login" label="Фамилия" variant="standard" />
            </div>

            <div className="form__row field">
                <label className="field__desc">Имя:</label>
                <TextField value={name} onChange={e => setName(e.target.value)} className="field__value" id="login" label="Имя" variant="standard" />
            </div>

            <div className="form__row field">
                <EmailLabel value="Электронная почта:" />
                <TextField value={email} onChange={e => setEmail(e.target.value)} className="field__value" id="login" label="Почта" variant="standard" />
            </div>

            <div className="form__row form__row__buttons field">
                <Button onClick={() => {

                    dispatch(register({ userName, surname, name, email }))

                }} color="primary" variant="contained"> Зарегестрироваться </Button>
            </div>

        </div>
    )
}
