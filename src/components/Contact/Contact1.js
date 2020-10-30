import React, { Fragment, useState } from 'react'

import ReCAPTCHA from "react-google-recaptcha"

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Contact = () => {
  const [input, setInput] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [check, setCheck] = useState(false)

  const handleChange = event => {
    const { name, value } = event.target
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (check) {
      console.log('Thanks for verify')
    } else {
      console.log('Please verify you are human!')
    }
  }

  const onChange = () => {
    setCheck(!check)
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Form.Label>Full Name</Form.Label>
        <Form.Group controlId="fullName">
          <Form.Control
            required
            type="text"
            name="fullName"
            value={input.fullName}
            placeholder="Enter Your Name Here"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="email"
            name="email"
            value={input.email}
            placeholder="Enter Email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Control
            required
            type="text"
            name="subject"
            value={input.subject}
            placeholder="Subject"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="message">
          <Form.Control
            required
            as='textarea'
            type="text"
            name="message"
            value={input.message}
            placeholder="Message"
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit">
          Submit
        </Button>
      </Form>
      <ReCAPTCHA
        sitekey='6Lcf_tkZAAAAAMKYg-DG8gMALXUvvpB3FCk-Ofqg'
        onChange={onChange} />
    </Fragment>
  )
}

export default Contact
// captcha key: 6Lcf_tkZAAAAAMKYg-DG8gMALXUvvpB3FCk-Ofqg
