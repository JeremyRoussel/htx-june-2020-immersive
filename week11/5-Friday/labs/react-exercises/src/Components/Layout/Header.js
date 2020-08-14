import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'


const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Link to="/aboutus">About Us</Link>
                <Link to="/contactus">Contact Us</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/stepper">Stepper</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/todo">ToDo</Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default Header
