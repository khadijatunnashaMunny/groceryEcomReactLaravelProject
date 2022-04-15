import React ,{useState,useEffect} from 'react'
import { Button, Container, TextField, Typography } from '@mui/material';
import useStyles from "./Login_Register_Style";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function Registration() {

    const classes = useStyles();
    let history = useNavigate();

  

    const [registeredInput,setRegister]=useState({
        name:'',
        email:'',
        password:'',
        error_List:[],

    });
    const handleInput=(e)=>{
        e.persist();
        setRegister({...registeredInput,[e.target.name]:e.target.value});

    }
    const register=(e)=>{
        e.preventDefault();
        const data={
            name:registeredInput.name,
            email:registeredInput.email,
            password:registeredInput.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
            // register...
            axios.post('/api/register',data).then(res => {
                if(res.data.status===200){
                    localStorage.setItem('auth_token',res.data.token);
                    localStorage.setItem('auth_name',res.data.name);
                    swal("success",res.data.message,"success");
                    history('/');

                }
                else{
                    setRegister({...registeredInput,error_List:res.data.validation_errors});
                }
            });
          
        });
    }
  



    return (
        <div>
              <Container ClassName="Container">
                            <form onSubmit={register}>
                                <div ClassName="login-form">
                                    <Typography variant='h4' ClassName="login-title">Register</Typography>
                                    <div ClassName="row">
                                        <div ClassName="col-md-6 col-12 mb-20">
                                            <Typography>First Name</Typography>
                                            <TextField 
                                            name="name" 
                                            value={registeredInput.name} 
                                            onChange={handleInput}
                                            ClassName="mb-0" 
                                            type="text" 
                                            label="First Name" 
                                            variant="outlined" />
                                        </div>
                                        <div><span>{registeredInput.error_List.name}</span></div>
                                       
                                        <div ClassName="col-md-12 mb-20">
                                            <Typography>Email Address*</Typography>
                                            <TextField 
                                            name="email" 
                                            value={registeredInput.email} 
                                            onChange={handleInput}
                                            ClassName="mb-0" 
                                            type="email"  
                                            label="Email Address" 
                                            variant="outlined" />
                                        </div>
                                        <div><span>{registeredInput.error_List.email}</span></div>

                                        <div ClassName="col-md-6 mb-20">
                                            <Typography>Password</Typography>
                                            <TextField 
                                            name="password" 
                                            value={registeredInput.password} 
                                            onChange={handleInput}
                                            ClassName="mb-0" 
                                            type="password"  
                                            label="Password" 
                                            variant="outlined" />
                                        </div>
                                        <div><span>{registeredInput.error_List.password}</span></div>

                                        <div ClassName="col-12">
                                            <Button 
                                            variant="contained" 
                                            type="submit"
                                            color="primary" 
                                            ClassName="register-button mt-0">Register</Button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Container>
        </div>
    )
}

export default Registration
