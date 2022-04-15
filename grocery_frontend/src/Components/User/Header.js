import React from 'react'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

function Header() {

    let history = useNavigate();

    let user=JSON.parse(localStorage.getItem('user-info'));

    function logout(){
        localStorage.clear();
        history("/");

    }
    
  return (
    <div>
        <Typography>{user.name}</Typography>
        <Button onClick={logout}>log out</Button>
    </div>

  )
}

export default Header