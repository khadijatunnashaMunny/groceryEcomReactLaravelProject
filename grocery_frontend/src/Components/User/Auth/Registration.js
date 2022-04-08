import React ,{useState} from 'react'
import { Button, Container, TextField, Typography } from '@mui/material';
import useStyles from "./Login_Register_Style";

function Registration() {

    const classes = useStyles();

   
    const [fName,setFName]=useState("");
    const [lName,setLName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [cpassword,setCPassword]=useState("");


    async function register(){

        let item={fName,lName,email,password,cpassword};
        console.log(item);
      
        let result= await fetch("http://localhost:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
              "Content-Type":'application/json',
              "Accept":'application/json',
            }
          })
          result=await result.json()
          console.warn("result",result)

    }

    return (
        <div>
              <Container ClassName="Container">
                            <form >
                                <div ClassName="login-form">
                                    <Typography variant='h4' ClassName="login-title">Register</Typography>
                                    <div ClassName="row">
                                        <div ClassName="col-md-6 col-12 mb-20">
                                            <Typography>First Name</Typography>
                                            <TextField 
                                            name="fName" 
                                            value={fName} 
                                            onChange={(e)=>setFName(e.target.value)}
                                            ClassName="mb-0" 
                                            type="text" 
                                            label="First Name" 
                                            variant="outlined" />
                                        </div>
                                        <div ClassName="col-md-6 col-12 mb-20">
                                            <Typography>Last Name</Typography>
                                            <TextField 
                                            name="lName" 
                                            value={lName} 
                                            onChange={(e)=>setLName(e.target.value)}
                                            ClassName="mb-0" 
                                            type="text" 
                                            label="Last Name" 
                                            variant="outlined" />
                                        </div>
                                        <div ClassName="col-md-12 mb-20">
                                            <Typography>Email Address*</Typography>
                                            <TextField 
                                            name="email" 
                                            value={email} 
                                            onChange={(e)=>setEmail(e.target.value)}
                                            ClassName="mb-0" 
                                            type="email"  
                                            label="Email Address" 
                                            variant="outlined" />
                                        </div>
                                        <div ClassName="col-md-6 mb-20">
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
                                        <div ClassName="col-md-6 mb-20">
                                            <Typography>Confirm Password</Typography>
                                            <TextField 
                                            name="cPassword" 
                                            value={cpassword} 
                                            onChange={(e)=>setCPassword(e.target.value)}
                                            ClassName="mb-0" 
                                            type="password"  
                                            label="Confirm Password" 
                                            variant="outlined" />
                                        </div>
                                        <div ClassName="col-12">
                                            <Button 
                                            onClick={register}
                                            variant="contained" 
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
