import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'
import { useState,useEffect } from "react"; 
import Axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function CreateItem() {
  const [itemList,setItemList] = useState([]);
  const [item,setItem] = useState("");
      const [qty,setQty] = useState(0);
      const [price,setPrice] = useState(0.00);
 
   const additem = () => {
    Axios.post('http://localhost:3001/item',{
        Item:item,
        Qty:qty,
        Price:price
    }).then(() => {
      setItemList([...itemList,
      {
        Item: item,
        Qty: qty,
        Price: price
      }
                ])
    } )
          }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{p:2}}>
      <Typography variant="h6" gutterBottom component="div">
       Create Prodect
      </Typography>
        <form>
        <Grid container spacing={2}>
        <Grid item xs={12}>
        <TextField id="outlined-basic" label="Item" variant="outlined" 
        fullWidth required 
        onChange={(event)=>
          setItem(event.target.value)}/>
        </Grid>
        <Grid item xs={12} >
        <TextField id="outlined-basic" label="Qty" variant="outlined"
        fullWidth required 
        onChange={(event)=>
          setQty(event.target.value)
          }/>
        </Grid>
        <Grid item xs={12}>
        <TextField id="outlined-basic" label="Price" variant="outlined"
        fullWidth required 
        onChange={(event)=>
          setPrice(event.target.value)
             }/>
        </Grid>
        <Grid item xs={12} sm ={4}>
        <Button variant="contained" onClick={additem}
        >ADD Item</Button>
        </Grid>
        </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}