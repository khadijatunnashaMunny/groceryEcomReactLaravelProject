import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/User/Auth/Login";
import Registration from "./Components/User/Auth/Registration";
import { useNavigate } from "react-router-dom";
import Home from "./Components/User/Home";
import axios from 'axios';
axios.defaults.baseURL="http://localhost:8000/";

axios.defaults.headers.post['Content-Type']='application/json';
axios.defaults.headers.post['Accept']='application/json';
axios.defaults.withCredentials = true;

function MainRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home />} />


        
        </Routes>
      </Router>
    </div>
  );
}

export default MainRouter;
