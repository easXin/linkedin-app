import React from 'react';

import Header from './components/Header';
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

import './App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Body */}
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed />
        {/* Widgets */}
        <Widgets />
      </div>

    </div>
  );
}

export default App;
