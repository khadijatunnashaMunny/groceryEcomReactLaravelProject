import React from 'react'
import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function Header() {

    let history = useNavigate();
    function logoutSubmit(){
      localStorage.clear();
      history('/');

    }
   
    var AuthButtons="";
    if(!localStorage.getItem('auth_token')){
      AuthButtons=(
        <div>
          <Button type="button" ClassName="register-button mt-0">Sign In</Button>
          <Button type="button" ClassName="register-button mt-0">Sign up</Button>
        </div>
      ) ;
    }
    else{
      AuthButtons=(
        <Button type="button" onClick={logoutSubmit} ClassName="register-button mt-0">Logout</Button>
      );
    }
   
    
  return (
    <div>
        
      {AuthButtons}
    
    </div>

  )
}

export default Header