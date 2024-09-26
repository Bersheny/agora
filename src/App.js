import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/profile/:userId" element={<Profile />} />
=======
          <Route path="/profile" element ={<Profile />} />
          <Route path="/login" element ={<Login />} />
>>>>>>> eb80c716e768d228a33c7495bc57ab7a49ddb143
        </Routes>
      </div>
    </Router>
  );
}

export default App;