import React, { useContext, createContext, useState } from "react";
import { logout } from './utils/auth';
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



const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

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
                About
              </Link>

              <Link to="/" className={classes.link}>
                <HomeIcon></HomeIcon>
                Домашняя
              </Link>

              <Auth></Auth>


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
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


function Auth() {
  const classes = useStyles();
  let history = useHistory();
  let dispatch = useDispatch();
  let authState = useSelector((state) => {
    return {
      isAuthorized: state.isAuthorized,
      userName: state.userName
    }
  })

  if (authState.isAuthorized == true) {
    history.push("/");
    return (
      <div>
        <Link to="/login" className={classes.link}>
          {"Здравствуйте: " + authState.userName}
        </Link>
        <Link onClick={() => { dispatch(logout()); }} className={classes.link}>
          Выйти
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/login" className={classes.link}>
        Войти
      </Link>
      <Link to="/register" className={classes.link}>
        Зарегестрироваться
      </Link>
    </div>
  )

}

function About() {
  return (<div>
    <h2>About</h2>
  </div>);
}
