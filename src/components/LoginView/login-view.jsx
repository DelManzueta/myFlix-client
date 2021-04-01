import React, { useState } from 'react'
import PropTypes           from 'prop-types'
import axios               from 'axios'

import Form                from 'react-bootstrap/Form'
import Button              from 'react-bootstrap/Button'
import Container           from 'react-bootstrap/Container'

import { Link }            from 'react-router-dom'

import './login-view.scss'

export function LoginView (props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [validated, setValidated] = useState('')
  const [login, setLogin] = useState('')

  const handleSubmit = e => {
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
      setLogin(null)
      setValidated(true)
      return
    }
    e.preventDefault();

    axios
      .post('https://myflixdbs-z.herokuapp.com/login', {
        Username: username,
        Password: password
      })
      .then(res => {
        const data = res.data;

        if (!res.data.user) {
          setLogin(true);
        }
        else {
          props.onLoggedIn(data);
        }
      })
      .catch(e => {
        console.log('no such user')
      });
  };

  const setLoginUsername = (e) => {
    setUsername(e.target.value);
    setLogin(null);
  }

  const setLoginPassword = (e) => {
    setPassword(e.target.value);
    setLogin(null);
  }

  return (
    <Container className='form-container'>
      <Form>
        <Form.Group controlId='formBasicUsername'>
          <Form.Label className='username-label'>Username</Form.Label>
          <Form.Control
            type='text'
            placeholder='Username'
            value={username}
            onChange={e => setUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label className='password-label'>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className='button-login' type='button' onClick={handleSubmit}>
          Login
        </Button>
        <p>
          Not registered? Click{' '}
          <span
            className='span-login'
            type='text'
            onClick={() => props.newUser()}
          >
            here
          </span>{' '}
          to register
        </p>
      </Form>
    </Container>
  )
}

LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired
  })
}
