import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const userList = (props) => {
  const classes = useStyles
  const {users} = props

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell >Last Name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Occupation</TableCell>
            <TableCell >Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell>{row.lastName}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.occupation}</TableCell>
              <TableCell>
                <Button variant="outlined">Edit</Button>
                <Button variant="outlined">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default userList