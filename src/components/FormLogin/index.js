// Login Form

import React, { Component } from 'react';
import { render } from '@testing-library/react';
import styles from './LoginForm.module.css';
const PASSWORD_VALIDATION = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/;
const EMAIL_VALIDATION = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    };
  }
  handleEmailChange = (event) => {
    this.setState({ userEmail: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ userPassword: event.target.value });
  };

  /*
  handleCommonChange = ({target: {name, value}}) => {
      this.setState({ [name]: value}); 
  }
*/

  

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { userEmail, userPassword } = this.state;
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={this.handleEmailChange}
          placeholder="user email"
          className={this.state.userEmail.match(EMAIL_VALIDATION) ? styles.input_validate : styles.input_not_validate}
        />
        <input
          type="password"
          name="userPassword"
          value={userPassword}
          onChange={this.handlePasswordChange}
          placeholder="user pass"
          className={this.state.userEmail.match(PASSWORD_VALIDATION) ? styles.input_validate : styles.input_not_validate}
        />
        <button type="submit"> LOGIN</button>
      </form>
    );
  }
}
export default FormLogin;
