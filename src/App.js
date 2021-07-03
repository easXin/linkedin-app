import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login"
import Register from "./components/Register";
import { auth } from "./firebase"
import { login, logout, selectUser } from './features/userSlice';

import './App.css';
function App() {
  // grab selector
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    // listen to auth change
    console.table(user)
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        // use is logged out
        dispatch(logout());
      }
    })
  }, [dispatch]);
  return (

    <Router>
      <div className="app">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          {!user ?
            <Route path="/">
              <Login />
            </Route> :
            <Route path="/">
              <Header />
              <div className="app__body">
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
            </Route>
          }





        </Switch>
      </div>
    </Router>
  );
}

export default App;
