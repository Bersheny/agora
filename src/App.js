import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Register from './pages/Register';
import { Post } from './pages/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:userId" element={<Profile />} />
          <Route path="/login" element ={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;