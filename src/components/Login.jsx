import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        
        <Typography varient='h2' color='primary'>Login to Facebook</Typography>
        <TextField  label='email address' variant='outlined'/>
        <br>
        </br>
        <TextField label='password'type='password' variant='outlined'/>
    </div>
  )
}

export default Login
