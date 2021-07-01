import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";
import Login from "./components/Login"
import Register from "./components/Register";
import './App.css';
import { selectUser } from './features/userSlice.js';

function App() {
  // grab selector
  const user = useSelector(selectUser)
  return (
    
      <Router>
        <div className="app">
          <Switch>
            {/* if user is not log in, take him to login page */}
            {!user?(
              <Route path="/login">
                <Login/>
              </Route>
              )  
              :
              (
                <Route path="/">
                  <>
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
                  </>
                </Route>
              )
            }
            <Route path="/register">
              <Register/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
