import React                                      from 'react'
import { Form, FormControl, Nav, Navbar, Button } from 'react-bootstrap'
import styled                                     from 'styled-components'
import './nav.scss'

export const NavigationBar = () => (
  <Navbar expand='lg'>
    <Navbar.Brand href='/'>myFlix Movies</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ml-auto'>
        <Nav.Item>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href='/users'>Profile</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)
