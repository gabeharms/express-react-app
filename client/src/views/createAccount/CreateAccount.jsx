import React, { Component } from 'react';
import {createUser} from './requests';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CreateAccount extends Component {
  state = {
    username: '',
    password: '',
    errors: '',
  }

  hasErrors = () => {
    return this.state.errors.length > 0
  }

  createAccount = () => {
    const {
      username,
      password,
    } = this.state
    const {
      history,
    } = this.props

    const handleError = errorMsg => this.setState({...this.state, errors: errorMsg});
    const handleSucces = (data) => {
      this.setState({...this.state, errors: ''})
      history.push("/")
    }

    createUser(username, password).then(handleSucces).catch(handleError);
  }
  render() {
    return (
      <div style={{width: '50%', margin: 'auto', paddingLeft: '108px', paddingTop: '85px'}}>
        <div style={{width: '50%', margin: 'auto', textAlign: 'center'}}>
          <h1>Sign In</h1>
        </div>
        <div style={{width: '50%', margin: 'auto', textAlign: 'center'}}>
          <div>
            <TextField 
              name="username" 
              hintText={"Username"} 
              onChange={(e)=> this.setState({...this.state, username: e.target.value, errors: ''})} 
              style={{width: '90%'}} 
              underlineStyle={this.hasErrors() ? {borderColor: 'red'} : {}}
            />
          </div>
          <div>
            <TextField 
              name="password" 
              hintText={"Password"} 
              onChange={(e)=> this.setState({...this.state, password: e.target.value, errors: ''})} 
              style={{width: '90%'}}
              underlineStyle={this.hasErrors() ? {borderColor: 'red'} : {}}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  this.createAccount()
                }
              }}
            />
          </div>
        </div>
        <div style={{width: '50%', margin: 'auto', textAlign: 'center'}}>
          { this.hasErrors() ?
            <p style={{color: 'red'}}>{this.state.errors}</p>
            : <p style={{color: 'white'}}>placeholder</p>
          }
        </div>
        <div style={{width: '45%', margin: 'auto', textAlign: 'center'}}>
          <RaisedButton label="Create Account" secondary={true} onClick={this.createAccount} />
        </div>
      </div>
    )
  }
};

export default CreateAccount;
