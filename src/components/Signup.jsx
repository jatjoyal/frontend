import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        
        
        <Typography  variant='h2' color='primary'>SIGN IN DETAILS</Typography>
        <TextField label='NAME' variant='outlined'/>
        <br>
        </br>
        <TextField label='Email Address' variant='outlined'/>
        <br>
        </br>
        <TextField label='Phone Number' variant='outlined'/>
        <br>
        </br>
        
        <TextField label='password'type='password' variant='outlined'/><br></br>
        <Button type='submit' variant='outlined'>Sign In</Button>
    </div>
  )
}
      
    
  


export default Signup


