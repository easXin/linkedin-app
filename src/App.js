import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login"
import Register from "./components/Register";
import { auth } from "./firebase.js"
import { login, logout, selectUser } from './features/userSlice.js';
import './App.css';
function App() {
  // grab selector
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // listen to auth change
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
  }, []);
  return (

    <Router>
      <div className="app">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          {/* if user is not log in, take him to login page */}
          {/* {!user ? ( */}
          <Route path="/login">
            <Login />
          </Route>
          {/* ) */}
          {/* :
            ( */}
          <Route path="/">

            {/* Header */}
            <Header />
            <div className="app__body">
              {/* Sidebar */}
              <Sidebar />
              {/* Feed */}
              <Feed />
              {/* Widgets */}
              <Widgets />
            </div>

          </Route>
          {/* )
          } */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
