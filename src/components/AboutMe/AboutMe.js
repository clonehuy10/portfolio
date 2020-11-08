import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import './AboutMe.scss'

import Button from 'react-bootstrap/Button'
import about from './about.jpeg'

const AboutMe = () => (
    <Fragment>
      <div className='row'>
        <div className='col-md-9 col-lg-5 mx-auto'>
        <img
            className='img-fluid about-image mx-auto mb-2'
            src={about}
            alt='' />
        </div>
        <div className='col-md-12 col-lg-6'>
          <h1>Huy Nguyen</h1>
          <p className='tagline'>Full-stack Developer</p>
          <p>
            Hey, my name is Huy Nguyen. I'm a software engineer with a background in accounting and customer service. I am naturally curious, a problem solver, and a fast learner.
          </p>
          <p>
            Recently, I just graduated from General Assembly, and I plan to learn more about Python and create some project using it. I believe Python is a strong language which can be used both on front-end and back-end development.
          </p>
          <p>
            So are you looking for a hard-working, communicative & caring developer? I am super excited to work on ambitious projects with positive people.
          </p>
          <p>
            You can view all my works <Link className='aboutLink' to='/portfolio'>here</Link>
          </p>
          <p>
            Check out my resume or contact me below
          </p>
          <Link className='aboutLink' to='/contact'><Button variant="outline-info">Contact Me</Button></Link>
          <Link className='aboutLink' to='/resume'><Button variant="outline-info">Resume</Button></Link>
          <a className='aboutLink' href="https://drive.google.com/file/d/1qYs4bBbtNjLuIfbXGDMf3Eym0B2AeAby/view?usp=sharing">
            <Button variant='outline-info'>Download Resume</Button>
          </a>
        </div>
      </div>

      <h3 className='aboutTitles'>What I do</h3>
      <div className='row'>
        <div className='col-md-12 col-lg-5 whatBox'>
          <h5>App Development</h5>
          Full-stack applications from front-end to back-end with clean, modern designs – optimized for performance, search engines, and strengthening your company’s brand while ensuring ease of use & simplicity for your audience.
        </div>
        <div className='col-md-12 col-lg-5 whatBox'>
          <h5>Web Development</h5>
          Creating a strong foundation for a website with HTML, CSS, and JS with custom plugins, features, animations, and interactive layouts. Having a fast, high-performance website is key to convert your audience into customers.
        </div>
      </div>

      <h3 className='aboutTitles'>Let's Get Connected</h3>
      <div className="social-icons" id='aboutIcon'>
        <a target="_blank" rel="noopener noreferrer" className="social-icon" href="https://www.linkedin.com/in/huy-nguyen-64a77a1a8/"><i className="fa fa-linkedin"></i></a>
        <a target="_blank" rel="noopener noreferrer" className="social-icon" href="https://github.com/clonehuy10"><i className="fa fa-github"></i></a>
      </div>
    </Fragment>
)

export default AboutMe

// "https://drive.google.com/uc?export=download&id="
