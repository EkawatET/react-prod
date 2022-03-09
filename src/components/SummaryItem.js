import  React,{ useState,useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Axios from 'axios';
import Link from '@mui/material/Link';
export default function SummaryItem() {
   const [getitemList,setGetitemList] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);
   const [error, setError] = useState(null);
   useEffect(() => {
     if(getitemList.length === 0){
      fetch("http://localhost:3001/item")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setGetitemList(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
     }
 },[getitemList])

  return (
    <React.Fragment>
      <CssBaseline />
      
      <Container fixed sx={{p:2}}>
      <Paper sx={{p:2}}>
      <Box display="flex">
      <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom component="div">
       Product Details
      </Typography>
       </Box>
      <Box>
         <Link href="CreateItem">
            <Button variant="contained">Create</Button>
         </Link>
      </Box>
      </Box>
      </Paper>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Qty</TableCell>
            <TableCell align="right">Price&nbsp;(Bath)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getitemList.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Item}
              </TableCell>
              <TableCell align="right">{row.Qty}</TableCell>
              <TableCell align="right">{row.Price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Container>
      
    </React.Fragment>
  );
}