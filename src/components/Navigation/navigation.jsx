import React                   from 'react'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { Link }                from 'react-router-dom'


export class Navigation extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true,
      loggedIn: false
    };
  }

  
  onLoggedIn (authData) {
    console.log(authData)
    this.setState({
      user: authData.user.Username
    })

    localStorage.setItem('token', authData.token)
    localStorage.setItem('user', authData.user.Username)
    this.getMovies(authData.token)
  }

  registerUser () {
    this.setState({
      newUser: true
    })
  }

  userRegistered () {
    this.setState({
      newUser: null
    })
  }

  logOutHandler () {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.setState({
      user: null
    })
    window.open('/', '_self')
  }


  render () {
    return (
      <Navbar className='nav-bar' bg='dark' expand='lg'>
        <Navbar.Brand>
          <Link to='/' className='home-link'>
            myFlix Movies
          </Link>
        </Navbar.Brand> 
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className="justify-content-end" activeKey="/home">
            <Link to={`/users`}>
              <Button variant='link' className='button-profile'>
                Account
              </Button>
            </Link>
            <Button
              className='button-logout'
              onClick={() => this.logOutHandler()}
            >
              Logout
            </Button>
          </Nav>

          <Nav className='navbar navbar-default navbar-static-top'>
            <div className='container'>
              <div id='navbar-collapse' className='collapse navbar-collapse'>
                <ul className='nav navbar-nav'>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                </ul>
                <ul className='nav navbar-nav navbar-right'></ul>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    )
  }
}
