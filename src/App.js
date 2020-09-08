import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Input, Button, FormControl} from '@material-ui/core';
import './App.css';

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
})

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: {email: '', firstName: '', lastName: '', occupation: ''} };
  }

  submitForm = () => {
    $('form#user input').bind('onchange', function (e){
      field = e.attr('name')
      value = e.value()
      this.setState(..., {field: value})
    })
  }

  render() {

    const { classes } = this.props;
    return (
      <div className="App">
        <form id="user" className={classes.root} noValidate autoComplete="off">
          <FormControl>
            <Input placeholder="First Name" inputProps={{ 'aria-label': 'description' }} />
          </FormControl>
          <FormControl>
          <Input placeholder="Last Name" inputProps={{ 'aria-label': 'description' }} />
          </FormControl>
          <FormControl>
          <Input placeholder="Email" inputProps={{ 'aria-label': 'description' }} />
          </FormControl>
          <FormControl>
          <Input placeholder="Occupation" inputProps={{ 'aria-label': 'description' }} />
          </FormControl>
          <FormControl>
            <Button variant="contained" color="primary" disableElevation onClick={() => this.submitForm()}>
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default withStyles(useStyles)(App)
