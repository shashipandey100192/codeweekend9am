import React, { Fragment, useEffect, useState } from 'react'
import { Button } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Mymuitab from './Mymuitab';


  const paginationModel = { page: 0, pageSize: 5 };

function Mymuipage() {
    const [x,y]=useState([])
    const mydata = ()=>{
        axios('https://jsonplaceholder.typicode.com/posts').then((d)=>{
            y(d.data);
            console.log(d.data);
        });
    }

useEffect(()=>{
    mydata();
},[])

const columns = [
    { field: 'id', headerName: 'Sid', width: 70 },
    { field: 'userId', headerName: 'userids', width: 100 },
    { field: 'body', headerName: 'Bodytext', width: 700 },
    
  ];
  
//   const rows = [
//     { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//     { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//     { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//     { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//     { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//     { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//     { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//     { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//     { id: 10, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
//   ];
    const rows = x;  


  return (
    <Fragment>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
        <hr/>

        <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10,15,20]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>

    <h1>MUI Tabs design </h1>

    <Mymuitab/>


    </Fragment>
  )
}

export default Mymuipage