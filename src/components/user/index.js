import React          from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect }    from 'react-redux';
import { storeUser }  from '../../actions';
import {Input, Button, FormControl} from '@material-ui/core';

const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
})

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: {email: '', firstName: '', lastName: '', occupation: ''} };
  }

  handleForm = (event) => {
    event.preventDefault();
    const newState = {};
    Object.entries(event.target.elements).forEach(ele => {
      let e = ele[1]
      if(e.type === 'text'){
        newState[e.name] = e.value;
      }
    });
    
    this.setState({
      data: newState
    }, () => {
      this.props.storeUser(this.state.data)
    })

  }

  render() {
    const { classes } = this.props;
    return (
      <div className="User">
        <div>{this.state.data.firstName}</div>
        <form id="user" className={classes.root} noValidate autoComplete="off" onSubmit={this.handleForm}>
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

const mapDispatchToProps = dispatch => {
  return {
    storeUser: data => dispatch(storeUser(data))
  }
}

// export default withStyles(useStyles)(User)
export default connect(null, mapDispatchToProps)(withStyles(useStyles)(User))
