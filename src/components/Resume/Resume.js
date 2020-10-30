import React from 'react'
import './Resume.scss'

import Skill from './Skill'
import TextField from './TextField'

const Resume = () => {
  return (
    <div className='row'>
      <div className='col-12 col-sm-8 fieldBox'>
        <TextField />
      </div>
      <div className='col-12 col-sm-3'>
        <Skill />
      </div>
    </div>
  )
}

export default Resume
