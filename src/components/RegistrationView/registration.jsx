import axios               from 'axios'
import PropTypes           from 'prop-types'
import React, { useState } from 'react'
import { Button, Form }    from 'react-bootstrap'
import { Link }            from 'react-router-dom'
import './registration.scss'

export function RegistrationView (_props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState('')

  const handleRegister = e => {
    e.preventDefault()
    axios
      .post(`https://myflixdbs-z.herokuapp.com/users`, {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      })
      .then(response => {
        console.log('Profile created')
        window.open('/', '_self')
      })
      .catch(_e => {
        console.log('Error registering user')
      })
  }

  return (
    <div className='registration-view'>
      <h2>Join fastFlix!</h2>
      <Form className='registration-form'>
        <Form.Group
          controlId='formBasicUsername'
          className='registration-form-group'
        >
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Username'
          />
        </Form.Group>

        <Form.Group
          controlId='formBasicPassword'
          className='registration-form-group'
        >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
          />
        </Form.Group>

        <Form.Group
          controlId='formBasicEmail'
          className='registration-form-group'
        >
          <Form.Label>Email</Form.Label>
          <Form.Control
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email'
          />
        </Form.Group>

        <Form.Group
          controlId='formBasicBirthday'
          className='registration-form-group'
        >
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            type='date'
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
            placeholder='Date of Birth DD/MM/YYYY'
          />
        </Form.Group>
        <Button
          variant='primary'
          type='submit'
          className='register-button'
          onClick={handleRegister}
        >
          Register
        </Button>
        <Link to={'/'}>
          <Button variant='secondary' className='secondary-button'>
            Cancel
          </Button>
        </Link>
      </Form>
    </div>
  )
}

RegistrationView.propTypes = {
  user: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
    Birthday: PropTypes.instanceOf(Date).isRequired
  })
}
