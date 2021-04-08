import axios               from 'axios'
import PropTypes           from 'prop-types'
import React, { useState } from 'react'
import Button              from 'react-bootstrap/Button'
import Col                 from 'react-bootstrap/Col'
import Container           from 'react-bootstrap/Container'
import Form                from 'react-bootstrap/Form'
import Row                 from 'react-bootstrap/Row'
import { Link }            from 'react-router-dom'
import './login-view.scss'

export function LoginView (props) {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const API_URL = `https://myflixdbs-z.herokuapp.com/login`

  const handleSubmit = e => {
    e.preventDefault()
    console.log(username, password) 
    axios
      .post(API_URL, {
        Username: username,
        Password: password
      })
      .then(response => {
        const data = response.data
        props.onLoggedIn(data)
      })
      .catch(e => {
        console.log('no such user')
      })
  }

  return (
    <Container className='form-container'>
      <Row>
        <Col xs={12} sm={12} className='Col'>
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
            <Button
              className='button-login'
              type='button'
              onClick={handleSubmit}
            >
              Login
            </Button>

            <p>
              Not registered? Click{' '}
              <Link to={`/register`}>
                <span className='span-login' type='text'>
                  here
                </span>{' '}
              </Link>
              to register
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

LoginView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired
  })
}
