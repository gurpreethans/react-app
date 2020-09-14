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
    this.state = {data: {email: '', firstName: 'Hello', lastName: '', occupation: ''} };
  }

  // submitForm = () => {
  //   $('form#user input').bind('onchange', function (e){
  //     field = e.attr('name')
  //     value = e.value()
  //     this.setState(..., {field: value})
  //   })
  // }

  handleChange = (event) => {
    event.preventDefault();
    
    console.log(event.target.elements.length)

    Object.entries(event.target.elements).forEach(ele => {
      let e = ele[1]
      console.log(e.type)
      if(e.type === 'text'){
        this.setState({
          data: {
            ...this.state.data,
            [e.name]: e.value
          }
        })
      }
    })


    // this.setState({
    //   data: {
    //     ...this.state.data,
    //     [event.target.name]: event.target.value
    //   }
    // })
    
  }

  render() {
    console.log(this.state)
    const { classes } = this.props;
    return (
      <div className="App">
        <div>{this.state.data.firstName}</div>
        <form id="user" className={classes.root} noValidate autoComplete="off" onSubmit={this.handleChange}>
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
}

export default withStyles(useStyles)(App)
