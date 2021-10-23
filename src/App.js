import React, { useContext, createContext, useState } from "react";
import { logout } from './utils/auth';
import { useStyles } from './utils/styles';

import { useDispatch } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,
  useParams,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles, Button
} from '@material-ui/core';
import { useSelector } from 'react-redux'

import { Home as HomeIcon } from '@material-ui/icons';

import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HomePage from "./components/HomePage/HomePage";
import Error404 from "./components/Error404/Error404";
import About from "./components/About";
import AuthLinks from "./components/AuthLinks"

import "./App.css"

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <AppBar position="static">
          <CssBaseline />
          <Toolbar>
            <Typography variant="h4" className={classes.logo}>
              ДЗ на урок React Router & Redux
            </Typography>
            <div className={classes.navlinks}>
              <Link to="/about" className={classes.link}>
                О пользователе
              </Link>

              <Link to="/" className={classes.link}>
                <HomeIcon></HomeIcon>
                Домашняя
              </Link>
              <AuthLinks></AuthLinks>
            </div>
          </Toolbar>
        </AppBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/about">
            <About />
          </PrivateRoute>
          <Route path="/error404">
            <Error404 />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function PrivateRoute({ children, ...rest }) {

  let authState = useSelector((state) => {
    return {
      isAuthorized: state.isAuthorized,
      userName: state.userName
    }
  })

  return (
    <Route
      {...rest}
      render={({ location }) =>
        authState.isAuthorized == true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/error404",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


/*function Auth() {
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

*/