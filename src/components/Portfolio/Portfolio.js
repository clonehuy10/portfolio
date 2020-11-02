import React from 'react'
import './Portfolio.scss'

import Card from 'react-bootstrap/Card'

import tictac from './tictac.gif'
import fakebook from './fakebook.gif'
import bucketlist from './bucketlist.gif'
import sudoku from './sudoku.gif'

const Portfolio = () => {
  return (
    <div className='row'>
      <Card className='col-10 col-md-5 m-4'>
        <Card.Img variant="top" src={tictac} />
        <Card.Body>
          <Card.Title>Tic Tac Toe</Card.Title>
          <Card.Text>
            <p>An intellectual game which you can play with friends and have great time together.</p>
            <p className='language'>
              Javascript, HTML/CSS, Bootstrap, Jquery, Ajax
            </p>
          </Card.Text>
            <div className='social-icons'>
              <a target="_blank" rel="noopener noreferrer" className='social-icon' href='https://github.com/clonehuy10/Project-1'>
                <i className="fa fa-github"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" className='social-icon' href='https://clonehuy10.github.io/Project-1/'>
                <i className="fa fa-rocket"></i>
              </a>
            </div>
        </Card.Body>
      </Card>

      <Card className='col-10 col-md-5 m-4'>
        <Card.Img variant="top" src={fakebook} />
        <Card.Body>
          <Card.Title>Fakebook</Card.Title>
          <Card.Text>
            <p>A message board allows users to create accounts, post their awesome stories, and share them with everyone.</p>
            <p className='language'>
              Javascript, HTML/CSS, Bootstrap, Jquery, Ajax, Mongodb, Mongoose, Cors, Express
            </p>
          </Card.Text>
          <div className='social-icons'>
            <a target="_blank" rel="noopener noreferrer" className='social-icon' href='https://github.com/clonehuy10/Project2-frontEnd'>
              <i className="fa fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" className='social-icon' href='https://clonehuy10.github.io/Project2-frontEnd/'>
              <i className="fa fa-rocket"></i>
            </a>
          </div>
        </Card.Body>
      </Card>

      <Card className='col-10 col-md-5 m-4'>
        <Card.Img variant="top" src={bucketlist} />
        <Card.Body>
          <Card.Title>Bucketlist</Card.Title>
          <Card.Text>
            <p>A front-end client built with React, Axios, and JSX to work in collaboration with the back end for a bucket-list application.</p>
            <p className='language'>
              React, CSS, Bootstrap, Axios, Mongodb, Mongoose, Cors, Express
            </p>
          </Card.Text>
          <div className='social-icons'>
            <a target="_blank" rel="noopener noreferrer" className='social-icon' href='https://github.com/SEI-Silk-Road/bucketlist-client'>
              <i className="fa fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" className='social-icon' href='https://sei-silk-road.github.io/bucketlist-client/'>
              <i className="fa fa-rocket"></i>
            </a>
          </div>
        </Card.Body>
      </Card>

      <Card className='col-10 col-md-5 m-4'>
        <Card.Img variant="top" src={sudoku} />
        <Card.Body>
          <Card.Title>Sudoku</Card.Title>
          <Card.Text>
            <p>Sudoku, a puzzle in which missing numbers are to be filled into a 9 by 9 grid of squares which are subdivided into 3 by 3 boxes so that every row, every column, and every box contains the numbers 1 through 9.</p>
            <p className='language'>
              React, CSS, Bootstrap, Axios, Mongodb, Mongoose, Cors, Express
            </p>
          </Card.Text>
          <div className='social-icons'>
            <a target="_blank" rel="noopener noreferrer" className='social-icon' href='https://github.com/clonehuy10/sudoku-client/'>
              <i className="fa fa-github"></i>
            </a>
            <a target="_blank" rel="noopener noreferrer" className='social-icon' href='https://clonehuy10.github.io/sudoku-client/'>
              <i className="fa fa-rocket"></i>
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Portfolio
