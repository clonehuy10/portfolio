import React from 'react'
import './Portfolio.scss'

import Card from 'react-bootstrap/Card'

const Portfolio = () => {
  return (
    <div className='row'>
      <Card className='col-10 col-md-5 m-4'>
        <Card.Img variant="top" src='/image/tictac.gif' />
        <Card.Body>
          <Card.Title>Tic Tac Toe</Card.Title>
          <Card.Text>
            <p>An intellectual game which you can play with friends and have great time together.</p>
            <p className='language'>
              Javascript, HTML/CSS, Bootstrap, Jquery, Ajax
            </p>
          </Card.Text>
            <div className='social-icons'>
              <a className='social-icon' href='https://github.com/clonehuy10/Project-1'>
                <i className="fa fa-github"></i>
              </a>
              <a className='social-icon' href='https://clonehuy10.github.io/Project-1/'>
                <i className="fa fa-rocket"></i>
              </a>
            </div>
        </Card.Body>
      </Card>

      <Card className='col-10 col-md-5 m-4'>
        <Card.Img variant="top" src='/image/fakebook.gif' />
        <Card.Body>
          <Card.Title>Fakebook</Card.Title>
          <Card.Text>
            <p>A message board allows users to create accounts, post their awesome stories, and share them with everyone.</p>
            <p className='language'>
              Javascript, HTML/CSS, Bootstrap, Jquery, Ajax, Mongodb, Mongoose, Cors, Express
            </p>
          </Card.Text>
          <div className='social-icons'>
            <a className='social-icon' href='https://github.com/clonehuy10/Project2-frontEnd'>
              <i className="fa fa-github"></i>
            </a>
            <a className='social-icon' href='https://clonehuy10.github.io/Project2-frontEnd/'>
              <i className="fa fa-rocket"></i>
            </a>
          </div>
        </Card.Body>
      </Card>

      <Card className='col-10 col-md-5 m-4'>
        <Card.Img variant="top" src='/image/bucketlist.gif' />
        <Card.Body>
          <Card.Title>Bucketlist</Card.Title>
          <Card.Text>
            <p>A front-end client built with React, Axios, and JSX to work in collaboration with the back end for a bucket-list application.</p>
            <p className='language'>
              React, CSS, Bootstrap, Axios, Mongodb, Mongoose, Cors, Express
            </p>
          </Card.Text>
          <div className='social-icons'>
            <a className='social-icon' href='https://github.com/SEI-Silk-Road/bucketlist-client'>
              <i className="fa fa-github"></i>
            </a>
            <a className='social-icon' href='https://sei-silk-road.github.io/bucketlist-client/'>
              <i className="fa fa-rocket"></i>
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Portfolio
