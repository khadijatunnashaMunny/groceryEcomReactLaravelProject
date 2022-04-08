import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import useStyles from "./Login_Register_Style";


export default function Login() {
    const classes = useStyles();
    let history = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history('/register');

        }

    },[])

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    async function login(){
        let loginItem={email,password};
        console.log(loginItem);

          
        let result= await fetch("http://localhost:8000/api/login",{
            method:'POST',
            body:JSON.stringify(loginItem),
            headers:{
              "Content-Type":'application/json',
              "Accept":'application/json',
            }
          })
          result=await result.json();
          localStorage.setItem('user-info',JSON.stringify(result));
          history("/register");


        }
    

  
  return (
    <div>
            <div ClassName="page-section mb-60">
                <div ClassName="container">
                    <div ClassName="row">
                        <div ClassName="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                            <form action="#" >
                                <div ClassName="login-form">
                                    <Typography variant='h4' ClassName="login-title">Login</Typography>
                                    <div ClassName="row">
                                        <div ClassName="col-md-12 col-12 mb-20">
                                            <Typography className={classes.card}>Email Address*</Typography>
                                            <TextField 
                                            name="email" 
                                            value={email} 
                                            onChange={(e)=>setEmail(e.target.value)}
                                            label="Email Address" 
                                            variant="outlined"  />
                                        </div>
                                        <div ClassName="col-12 mb-20">
                                            <Typography>Password</Typography>
                                            <TextField 
                                            name="password" 
                                            value={password} 
                                            onChange={(e)=>setPassword(e.target.value)}
                                            ClassName="mb-0" 
                                            type="password"  
                                            label="Password" 
                                            variant="outlined" />
                                        </div>
                                      
                                        <div ClassName="col-md-4 mt-10 mb-20 text-left text-md-right">
                                            <a href="#"> Forgotten pasward?</a>
                                        </div>
                                        <div ClassName="col-md-12">
                                            <Button onClick={login} ClassName="register-button mt-0">Login</Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                      
                    </div>
                </div>
            </div>
           
    </div>
  );
}




















