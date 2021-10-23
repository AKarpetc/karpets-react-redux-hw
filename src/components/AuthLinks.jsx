
import { logout } from '../utils/auth';
import { useStyles } from '../utils/styles';

import React from "react";
import { useDispatch } from 'react-redux'
import {
    BrowserRouter as Router,
    Link,
    useHistory,
} from "react-router-dom";
import { useSelector } from 'react-redux'
import {
    makeStyles
} from '@material-ui/core';

export default function AuthLinks() {
    const classes = useStyles();
    let dispatch = useDispatch();
    let history = useHistory();

    let authState = useSelector((state) => {
        return {
            isAuthorized: state.isAuthorized,
            user: state.user
        }
    })

    if (authState.isAuthorized == true) {
        history.push("/");
        return (
            <React.Fragment>
                <Link to="/login" className={classes.link}>
                    {"Здравствуйте: " + authState.user.name + " " + authState.user.surname}
                </Link>
                <Link to="/logout" onClick={(e) => {
                    e.preventDefault();
                    dispatch(logout());
                }}
                    className={classes.link}>
                    Выйти
                </Link>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
            <Link to="/login" className={classes.link}>
                Войти
            </Link>
            <Link to="/register" className={classes.link}>
                Зарегестрироваться
            </Link>
        </React.Fragment>
    )
}