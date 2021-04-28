import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
        console.log('no such user')
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
    <div className="log-container">
    <Container className='login-container' fluid='true'>
      <div className='login-intro'>
        <h1 className='login-title'>
          Log into your
          <br />
          <span className='myflix-title'>myFlix</span>
        </h1>
      </div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className='login-form'
      >
        <Form.Group controlId='formUsername'>
          {/* <Form.Label>Username:</Form.Label> */}
          <Form.Control
            className='form-field'
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
          {/* <Form.Label>Password:</Form.Label> */}
          <Form.Control
          className='form-field'
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
            <Form.Text className='invalid-text'>
              Invalid Username and/or Password
            </Form.Text>
          )}
        </Form.Group>
        <Button className='submit-login' type='submit' block>
          Login
        </Button>
      </Form>
      <section className='under-form'>
        <p>
          <span className='new-to'>New to myFlix &#63;</span> Register your
          account{' '}
          <Link className='new-to' to={`/register`}>
            Here
          </Link>
        </p>
      </section>
    </Container>
    </div>
  )
}
