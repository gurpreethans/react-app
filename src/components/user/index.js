import React          from 'react';
import { connect }    from 'react-redux';
import { storeUser }  from '../../actions';
import UserList from '../userList';
import UserForm from '../userForm';

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {data: {}};
  }

  handleForm = (event) => {
    event.preventDefault();
    var _target = event.target
    const newState = {};
    Object.entries(event.target.elements).forEach(ele => {
      let e = ele[1]
      if(e.type === 'text'){
        newState[e.name] = e.value;
      }
    });
    
    newState['id'] = Date.now();
    this.setState({
        data: newState
      }, () => {
        this.props.storeUser(this.state.data).then(response => {
          if(response.status === 'success'){
            this.setState({
              data: {}
            })
            _target.reset();
          }
        });
      })
  }

  render() {
    return (
      <div>
        <UserForm handleForm={this.handleForm} user={this.state.data} />
        <UserList users={this.props.data.users} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeUser: data => dispatch(storeUser(data))
  }
}

function mapStateToProps(state) {
  return { data: state.usersList }
}

// export default withStyles(useStyles)(User)
export default connect(mapStateToProps, mapDispatchToProps)(User)
