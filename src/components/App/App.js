import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Header from '../Header/Header'
import AboutMe from '../AboutMe/AboutMe'
import Resume from '../Resume/Resume'
import Portfolio from '../Portfolio/Portfolio'
import Contact from '../Contact/Contact'

class App extends React.Component {

  render () {
    return (
      <Fragment>
        <main className='container'>
          <div className='row'>
            <div className='col-12 col-lg-2'>
              <Header />
            </div>
            <div className='col-12 col-lg-10 body'>
              <Route exact path='/' component={AboutMe} />
              <Route path='/resume' component={Resume} />
              <Route path='/portfolio' component={Portfolio} />
              <Route path='/contact' component={Contact} />
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}

export default App