import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    backgroundColor='beige'
  >
    <h1>Welcome to Product App</h1>
    <div>
      <TextField
        id="standard-enabled"          
        defaultValue=""
        variant="standard"
        label="Product Name"
        
      />
      </div>
      <div>
      <TextField
        id="standard-enabled"
        defaultValue=""
        variant="standard"
        label="Product Description"
      
      />
      </div>
      <div>
      <TextField
        id="standard-password-input"
        defaultValue=""
        variant="standard"
        label="Product Price"        
      />
      </div>
      <div>
      <TextField
        id="standard-read-only-input"
        defaultValue=""
        variant="standard"
        label="Product Category"
       
      />   
  </div>
  <Button marginTop="7%" variant='constrained' >Add to Cart</Button> 
</Box>
  )
}

export default Add