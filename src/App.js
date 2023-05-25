
import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup-seeker/Seeker';

import Provider from "./pages/Signup-provider/Provider.js"
import Success from './pages/success/Success';
import MeSeeker from './pages/me-seeker/me-Seeker';
import MeProvider from './pages/me-provider/MeProvider';
import Apply from './pages/applyforrating/Apply';
import Payment from './components/payment';
import Prepayment from './components/Prepayment';
import Admin from './pages/admin/Admin';
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/signup-seeker"} element={<Signup/>} />
        <Route path={"/signup-provider"} element={<Provider/>} />
        <Route path={"/success"} element={<Success/>} />
        <Route path={"/seeker-me"} element={<MeSeeker/>} />
        <Route path={"/provider-me"} element={<MeProvider/>} />
        <Route path={"/apply"} element={<Apply/>} />
        <Route path={"/payment"} element={<Payment/>} />
        <Route path={"/prepayment"} element={<Prepayment/>} />
        <Route path={"/admin"} element={<Admin/>} />

      </Routes>
    </Router>
  );
}

export default App;
