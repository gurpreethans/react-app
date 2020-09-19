import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const userList = (props) => {
  console.log('props', props)
  const classes = useStyles
  const {users} = props

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Occupation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.occupation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default userList