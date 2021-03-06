import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import 'bootstrap/dist/css/bootstrap.min.css';
import './login-view.scss';

export function LoginView(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    // Send request to server for auth
    props.onLoggedIn(username);
  };

  
  return (
    <Container className="login-container">
      <p className="sign" align="center">Welcome Back</p>
      <Form>
        <Form.Group controlId="formBasicUsername">
        <Form.Label>Username:</Form.Label>
          <Form.Control
            className="formFields"
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
            
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
          <Form.Control
            className="formFields"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button className="btn-active" variant="button" type="submit" onClick={handleSubmit}>
          Login
        </Button>
        <Button className="btn-inactive" onClick={() => window.open("RegistrationView", "_self")} variant="button" type="submit">
          Register
          </Button>
      </Form>
    </Container>
  );
}

LoginView.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  })
};