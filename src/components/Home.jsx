import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {
    const [rows,setRows]=useState([])
  useEffect(()=>{axios.get('https://fakestoreapi.com/products').then((res)=>{
    setRows(res.data)
  })},[])
  return (
    <div>
      <Box marginTop='2.5%'backgroundColor='beige'>
<Grid container spacing={4}>
{rows && rows.map((row)=>(
    <Grid item xs= '1' sm= '2' md='3'>
         <Card sx={{ marginTop:'7%',marginLeft:'4%',marginRight:'4%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={row.image}
      />
      <CardContent >
        <Typography
         gutterBottom variant="h5" component="div" sx={{ height: 210 }} >
          {row.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          {row.category}
        </Typography>
        <Typography variant="body2" color="text.secondary"  >
          {row.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
    </Grid>)
)
    }
</Grid>
</Box>
    </div>
  )
}

export default Home