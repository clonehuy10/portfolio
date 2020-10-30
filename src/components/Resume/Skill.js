import React, { Fragment } from 'react'

import ProgressBar from 'react-bootstrap/ProgressBar'

const Skill = () => {
  // languages
  const languages = {
    React: 60,
    Python: 50,
    Javascript: 85,
    Html: 80,
    Css: 50,
    Jquery: 75,
    Node: 60,
    Express: 45,
    Ajax: 75,
    Bootstrap: 85,
  }
  const languagesKey = Object.keys(languages)
  const one = languagesKey.map(a => (
    <div key={a}>
      <p className='skillText'>{a}</p>
      <ProgressBar className='skillBar' animated now={languages[a]} />
    </div>
  ))

  // Management & Deployment
  const management = {
    Git: 85,
    GitHub: 75,
    Heroku: 40,
    CommandLine: 70,
  }
  const managementKey = Object.keys(management)
  const two = managementKey.map(a => (
    <div key={a}>
      <p className='skillText'>{a}</p>
      <ProgressBar className='skillBar' animated now={management[a]} />
    </div>
  ))

  // Databases
  const database = {
    MongoDB: 50,
    Django: 20,
    Sql: 35
  }
  const databaseKey = Object.keys(database)
  const three = databaseKey.map(a => (
    <div key={a}>
      <p className='skillText'>{a}</p>
      <ProgressBar className='skillBar' animated now={database[a]} />
    </div>
  ))

  // Methodologies
  const group = [
    'Object Oriented Programming', 'MVC Pattern', 'Test-Driven Development', 'Responsive Design', 'Authentication', 'User Stories', 'ERDs', 'Wireframing', 'Agile Development/Scrum'
  ]
  const four = group.map(a => (
    <li className='skillList' key={a}>
      {a}
    </li>
  ))

  return (
    <Fragment>
      <h4 className='skillTitle'>Languages</h4>
      {one}
      <h4 className='skillTitle'>Management & Deployment</h4>
      {two}
      <h4 className='skillTitle'>Databases</h4>
      {three}
      <h4 className='skillTitle'>Workflow</h4>
      <ul>
        {four}
      </ul>
    </Fragment>
  )
}

export default Skill



// import { IconContext } from 'react-icons'
// import { DiJsBadge, DiPython, DiJqueryLogo, DiNodejsSmall, DiHtml5, DiCss3 } from "react-icons/di";

// <IconContext.Provider value={{ color: 'gray', size: '3rem' }}>
//   <DiJsBadge />
//   <DiPython />
//   <DiJqueryLogo />
//   <DiNodejsSmall />
//   <DiHtml5 />
//   <DiCss3 />
// </IconContex.Provider>
