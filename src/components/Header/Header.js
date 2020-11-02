import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import './Header.scss'

import profile from './profile.jpeg'

const Header = () => (
  <Fragment>
    <Navbar className='fixed-top' expand='lg' id='sideNav'>
      <Navbar.Brand className='brand' href='#'>
        <span className="d-none d-lg-block">
          <img
            className='img-fluid img-profile mx-auto mb-2'
            src={profile}
            alt='' />
        </span>
        <span className="d-block d-lg-none collapseText">Huy Nguyen</span>
      </Navbar.Brand>
      <Navbar.Toggle className='toggler collapseText' aria-controls='basic-navbar-nav' />
      <Navbar.Collapse className='collapse' id='basic-navbar-nav'>
        <Nav className='ml-auto nav'>
          <Nav.Link className='item' href='#/'>About Me</Nav.Link>
          <Nav.Link className='item' href='#/resume'>Resume</Nav.Link>
          <Nav.Link className='item' href='#/portfolio'>Portfolio</Nav.Link>
          <Nav.Link className='item' href='#/contact'>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Fragment>
)

export default Header
