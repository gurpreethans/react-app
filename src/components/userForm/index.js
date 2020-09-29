import React          from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Input, Button, FormControl} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const UserForm = (props) => {
  const classes = useStyles();
  return (
    <div className="User">
      <form id="user" className={classes.root} noValidate autoComplete="off" onSubmit={props.handleForm}>
        <FormControl>
          <Input placeholder="First Name" name="firstName" inputProps={{ 'aria-label': 'description' }} />
        </FormControl>
        <FormControl>
        <Input placeholder="Last Name" name="lastName"  inputProps={{ 'aria-label': 'description' }}  />
        </FormControl>
        <FormControl>
        <Input placeholder="Email" name="email"  inputProps={{ 'aria-label': 'description' }}   />
        </FormControl>
        <FormControl>
        <Input placeholder="Occupation" name="occupation"  inputProps={{ 'aria-label': 'description' }}   />
        </FormControl>
        <FormControl>
          <Button type="submit"  variant="contained" color="primary" disableElevation>
            Submit
          </Button>
        </FormControl>
      </form>
    </div>
  );
  
}

export default UserForm