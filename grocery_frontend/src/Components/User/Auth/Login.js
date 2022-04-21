import React, { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';
import useStyles from "./Login_Register_Style";
import axios from 'axios';
import swal from 'sweetalert';

export default function Login() {
    const classes = useStyles();
    let history = useNavigate();

   
    const [loginInput,setInput]=useState({
        email:'',
        password:'',
        error_List:[],

    });
    const handleInput=(e)=>{
        e.persist();
        setInput({...loginInput,[e.target.name]:e.target.value});

    }

    const loginSubmit=(e)=>{        
        e.preventDefault();
        const data={
            email:loginInput.email,
            password:loginInput.password,
        }
        
        axios.get('/sanctum/csrf-cookie').then(response => {
        // login...
            axios.post('/api/login',data).then(res => {
                if(res.data.status===200){
                    
                    localStorage.setItem('auth_token',res.data.token);
                    localStorage.setItem('auth_name',res.data.name);
                    swal("success",res.data.message,"success");
                    history('/home');

                }
                else if(res.data.status===401){
                    swal("warning",res.data.message,"warning");

                }
                else{
                    setInput({...loginInput,error_List:res.data.validation_errors});
                }
            });
        });

    }
    

  
  return (
    <div>

            <div ClassName="page-section mb-60">
                <div ClassName="container">
                    <div ClassName="row">
                        <div ClassName="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                            <form onSubmit={loginSubmit} >
                                <div ClassName="login-form">
                                    <Typography variant='h4' ClassName="login-title">Login</Typography>
                                    <div ClassName="row">
                                        <div ClassName="col-md-12 col-12 mb-20">
                                            <Typography className={classes.card}>Email Address*</Typography>
                                            <TextField 
                                            name="email" 
                                            value={loginInput.email} 
                                            onChange={handleInput}            
                                            label="Email Address" 
                                            variant="outlined"  />
                                        </div>
                                        <div><span>{loginInput.error_List.email}</span></div>

                                        <div ClassName="col-12 mb-20">
                                            <Typography>Password</Typography>
                                            <TextField 
                                            name="password" 
                                            value={loginInput.password} 
                                            onChange={handleInput}             
                                            ClassName="mb-0" 
                                            type="password"  
                                            label="Password" 
                                            variant="outlined" />
                                        </div>
                                        <div><span>{loginInput.error_List.password}</span></div>

                                        <div ClassName="col-md-4 mt-10 mb-20 text-left text-md-right">
                                            <a href="#"> Forgotten pasward?</a>
                                        </div>
                                        <div ClassName="col-md-12">
                                            <Button type="submit" ClassName="register-button mt-0">Login</Button>
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




















