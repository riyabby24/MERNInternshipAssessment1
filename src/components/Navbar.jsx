import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }} > 
    <AppBar position="static">
      <Toolbar>
    
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign={'left'}>
          Product App
        </Typography>
        <Link to ={'/'}>
        <Button style={{color:'white'}}>Add Product</Button></Link>
        <Link to ={'/home'}>
        <Button style={{color:'white'}}>Home</Button></Link>
      
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar