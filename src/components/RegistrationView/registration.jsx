import axios from 'axios'
import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router'
import { Button, Container, Form } from 'react-bootstrap'
import './registration.scss'

import { ShortNav } from '../Navigation/short-nav'

export function RegistrationView (props) {
  const [username, createUsername] = useState('')
  const [password, createPassword] = useState('')
  const [email, createEmail] = useState('')
  const [birthday, createDob] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post('https://myflixdbs-z.herokuapp.com/users', {
        Username: username,
        Password: password,
        Email: email,
        Birthday: birthday
      })
      .then(response => {
        const data = response.data
        console.log(data)
        window.open('/client', '_self')
      })
      .catch(e => {
        console.log('Error registering User')
      })
  }

  return (
    <div className='reg-page'>
      <Container className='reg-box'>
        <section className='reg-title'>
          <h1>
            Register a new <span className='reg-logo'>myFlix</span> account
          </h1>
        </section>
        <Form className='reg-form'>
          <Form.Group controlId='formBasicUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              placeholder='Create Username'
              value={username}
              onChange={e => createUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={e => createEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='formBasicDob'>
            <Form.Label>Birthday</Form.Label>
            <Form.Control
              type='date'
              placeholder='mm/dd/yyyy'
              value={birthday}
              onChange={e => createDob(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Create Password'
              value={password}
              onChange={e => createPassword(e.target.value)}
            />
          </Form.Group>

        </Form>
          <Button className='reg-btn' type='submit' onClick={handleSubmit}>
            Register
          </Button>
        <Form.Text className='text-muted'>
          Your information is always kept private and never sold to social marketing companies
        </Form.Text>
        <ShortNav />
      </Container>
    </div>
  )
}
