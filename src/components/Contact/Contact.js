import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import './Contact.scss'

const Contact = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div className='row'>
      <h2 className='formHead mx-auto mb-4'>Have a project in mind? Wanna hang out?</h2>
      <Form
        className='col-8 mx-auto'
        action='https://docs.google.com/forms/u/1/d/e/1FAIpQLScZPHcHc4sAae8AM-rkIWfPHgjRcCUUQsDcsZs9e8l6UvUKFQ/formResponse'>
        <Form.Group controlId="fullName">
          <Form.Label className='formText'>Full Name</Form.Label>
          <Form.Control
            className='formBox'
            required
            type="text"
            name="entry.1630226257"
            value={fullName}
            placeholder="Enter Your Name Here"
            onChange={e => setFullName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className='formText'>Email Address</Form.Label>
          <Form.Control
            className='formBox'
            required
            type="email"
            name="entry.132206514"
            value={email}
            placeholder="Enter Email"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Control
            className='formBox'
            required
            as='textarea'
            type="text"
            name="entry.1975515160"
            value={message}
            placeholder="Message"
            onChange={e => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button variant="default" className='formButton' type="submit">
          Send Message
        </Button>
      </Form>
    </div>
  )
}

export default Contact
