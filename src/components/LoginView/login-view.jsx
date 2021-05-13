import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './login-view.scss'
import Particles from 'react-particles-js'

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
    e.preventDefault()

    axios
      .post(`https://myflixdbs-z.herokuapp.com/login`, {
        Username: username,
        Password: password
      })
      .then(response => {
        const data = response.data

        if (!response.data.user) {
          setLogin(true)
        } else {
          props.onLoggedIn(data)
        }
      })
      .catch(e => {
        console.log('User does not exit')
      })
  }

  const setLoginUsername = e => {
    setUsername(e.target.value)
    setLogin(null)
  }

  const setLoginPassword = e => {
    setPassword(e.target.value)
    setLogin(null)
  }

  return (
    <Container className='login-container' fluid='true'>
      <div className='login-body'>
        <section className='login-form'>
          <span className='login-logo'>myFlix</span>
          <h5>Sign In:</h5>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId='formUsername'>
              <Form.Control
                className='login-placeholder'
                type='text'
                placeholder='Username'
                pattern='[a-zA-Z0-9]{6,}'
                required
                value={username}
                onChange={e => setLoginUsername(e)}
              />
              <Form.Control.Feedback type='invalid'>
                Username must be at least 6 alphanumeric characters long.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='formPassword'> 
              <Form.Control
               className='login-placeholder'
                type='password'
                placeholder='Password'
                pattern='[a-zA-Z0-9]{8,}'
                required
                value={password}
                onChange={e => setLoginPassword(e)}
              />
              <Form.Control.Feedback type='invalid'>
                A password of at least 8 alphanumeric characters is required.
              </Form.Control.Feedback>
              {!login ? null : (
                <Form.Text>Invalid Username and/or Password</Form.Text>
              )}
            </Form.Group>
            <Button className='login-btn' type='submit' block>
              Login
            </Button>
          </Form>
          <section className='under-form'>
            <p>
              <span>New to myFlix &#63;</span> Register a new account{' '}
              <Link className='login-here' to={`/register`}>
                Here
              </Link>
            </p>
          </section>
        </section>
      </div>
    </Container>
  )
}
