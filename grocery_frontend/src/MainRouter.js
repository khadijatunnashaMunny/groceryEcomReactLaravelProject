import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/User/Auth/Login";
import Registration from "./Components/User/Auth/Registration";
import { useNavigate } from "react-router-dom";

function MainRouter() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />

        
        </Routes>
      </Router>
    </div>
  );
}

export default MainRouter;
