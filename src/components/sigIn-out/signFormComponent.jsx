import React,{useState,useEffect} from 'react'
import { 
    motion as a ,
} from "framer-motion";
import {Link} from 'react-router-dom'
import { 
    Grid,
    Button,
    TextField,
    FormControl,
    InputLabel,
    Input,
    InputAdornment,
    IconButton
} from "@material-ui/core";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const logFormVariant = {
    animate: {
      x: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        type:'spring',
        // stiffness:120,
        // staggerChildren: 0.5,
      },
    },
    initial: {
      x: 2000,
    },
    exit:{
        x:-2000,
        transition: {
            ease: 'easeInOut',
            duration: 1,
        }
    }
}


export const SignForm = ({title}) => {

    const [isSignUp,setIsSignUp] = useState(false)

    const [userInfo,setUserInfo] = useState({
        name:'',
        email:'',
        password:'',
    })

    const [showPassword, setShowPassword] = useState('')

    const handleInput = (e) =>{
        e.preventDefault()
        const toChange =({ [e.target.id] :e.target.value})
        setUserInfo({...userInfo, ...toChange })
    }

    const handleMouseDownPassword =(e) => {
        e.preventDefault()
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setIsSignUp(false)
        console.log(userInfo);


    }
  

    return(
        <a.div
            variants={logFormVariant}
            animate='animate'
            initial='initial'
            exit='exit'
            style ={{
                marginTop:'20vh',
                // display: 'flex',
                justifyContent: 'center',
                alignItems:'center'
            }}
        >
                <Grid 
                    container
                    direction='column'
                    // alignItems='left'
                    // justifyContent='center'
                    sx={{borderRadius:10}}
                    spacing={2}
                    style={{
                        backgroundColor:'#EEEEEE',
                        borderRadius:10, 
                        boxShadow:'3px 3px 3px gray',
                        maxWidth:'500px',
                        margin:'auto',
                        color:'gray',
                    }}
                >
                    <Grid 
                        item 
                        xs={12}
                    /> 
                        <h3
                            style={{
                                marginLeft:'20px',
                                backgroundColor:'#4DD0A6',
                                paddingTop:'10px',
                                paddingBottom:'10px',
                                paddingLeft:'20px',
                                color:'white'
                            }}
                        >{title}</h3>
                    <Grid />

                    {isSignUp?(

                    <TextField 
                        label="Name" 
                        id="name" 
                        style={{
                            margin:'20px',
                            width:'300px'
                        }} 
                        type="name"  
                        value={userInfo.name}
                        onChange={e => handleInput(e)}
                    />):null}

                    <TextField 
                        label="Email" 
                        id="email" 
                        style={{
                            margin:'20px',
                            width:'300px'
                        }} 
                        type="email"  
                        value={userInfo.email}
                        onChange={e => handleInput(e)}
                    />


                    <FormControl 
                        style={{ margin: '20px', width: '300px' }} 
                        variant="standard"
                        >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={userInfo.password}
                            onChange={(e) => handleInput(e)}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={ () => setShowPassword(!showPassword)}
                                onMouseDown={(e) => handleMouseDownPassword(e)}
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>

                    {isSignUp?(

                    <FormControl 
                        style={{ margin: '20px', width: '300px' }} 
                        variant="standard"
                        >
                        <InputLabel htmlFor="password">Repeat Password</InputLabel>
                        <Input
                            id="repeatPassword"
                            type={showPassword ? 'text' : 'password'}
                            value={userInfo.repeatPassword}
                            onChange={(e) => handleInput(e)}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={ () => setShowPassword(!showPassword)}
                                onMouseDown={(e) => handleMouseDownPassword(e)}
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                        />
                    </FormControl>):null

                    }

                    <Button
                        variant = 'contained'
                        style={{
                            marginTop:'20px',
                            backgroundColor:'#4DD0A6',
                            color:'white'
                        }}
                        component={Link}
                        to={'/'}
                        onClick={(e)=>handleSubmit(e)}
                    >{title}</Button>

                </Grid>


                <Button
                        variant = 'contained'
                        style={{
                            marginTop:'90px',
                            backgroundColor:'#69C0FB',
                            color:'white',
                            marginLeft:'42vw'
                        }}
                        onClick={(e)=>setIsSignUp(!isSignUp)}
                    >{isSignUp?"Have an Account":"New Account ?"}
                </Button>
                
        </a.div>
    )
}