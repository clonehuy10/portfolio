import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import './Header.scss'

const Header = () => (
  <Fragment>
    <Navbar className='fixed-top' expand='lg' bg='dark' variant='dark' id='sideNav'>
      <Navbar.Brand className='brand' href='#'>
        <span className="d-none d-lg-block">
          <img className='img-fluid img-profile mx-auto mb-2' src='/image/profile.jpg' alt='' />
        </span>
        <span className="d-block d-lg-none">Huy Nguyen</span>
      </Navbar.Brand>
      <Navbar.Toggle className='toggler' aria-controls='basic-navbar-nav' />
      <Navbar.Collapse className='collapse' id='basic-navbar-nav'>
        <Nav className='ml-auto nav'>
          <Nav.Link className='item' href='/#'>About Me</Nav.Link>
          <Nav.Link className='item' href='#/resume'>Resume</Nav.Link>
          <Nav.Link className='item' href='#/portfolio'>Portfolio</Nav.Link>
          <Nav.Link className='item' href='#/contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Fragment>
)

export default Header
