import './registration.scss'

import { Col, Row } from 'react-bootstrap'
import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import { LoginView } from '../LoginView/login-view'
import PropTypes from 'prop-types'
import axios from 'axios'

export function RegistrationView (props) {
  const [username, createUsername] = useState('')
  const [password, createPassword] = useState('')
  const [email, createEmail] = useState('')
  const [birthday, createDob] = useState('')

  function handleSubmit (e) {
    e.preventDefault()

    axios
      .post('https://myflixdbs-z.herokuapp.com/users', {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      })
      .then(res => {
        const data = res.data
        console.log(data)
        window.open('/', '_self') // the second argument '_self' is necessary so that the page will open in the current tab
      })
      .catch(e => {
        console.log('error registering the user')
      })
  }

  return (
    <Container className='registration-container'>
      <Row>
        <Col xs={12} sm={12} className='Col'>
          <Form>
            <Form.Group controlId='formBasicUsername'>
              <Form.Label className='username-label'>Username</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter username'
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

            <Form.Group controlId='formBasicEmail'>
              <Form.Label className='email-label'>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Text className='text-muted'>
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicCheckbox'>
              <Form.Check type='checkbox' label='Check me out' />
            </Form.Group>
            <Button
              className='button-register'
              type='submit'
              onClick={handleRegister}
            >
              Register
            </Button>
            <p>
              {' '}
              Already registered? Click{' '}
              <span
                className='span-register'
                type='text'
                onClick={() => props.userRegistered()}
              >
                here
              </span>{' '}
              to login.
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

RegistrationView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired
  })
}

    Email: PropTypes.string.isRequired
  })
};