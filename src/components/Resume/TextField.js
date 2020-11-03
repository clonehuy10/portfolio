import React from 'react'

const TextField = () => {
  return (
    <div>
      <div>
          <h1 className="mb-5">Education</h1>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
              <div className="flex-grow-1">
                  <h4 className="mb-0 textFieldTitle">General Assembly</h4>
                  <div className="subheading mb-3">Software Engineering Immersive</div>
                  {/* <div className='subheading2'>Fullstack Software Engineering</div> */}
              </div>
              <div className="flex-shrink-0"><span className="text-info">September 2020 - October 2020</span></div>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
              <div className="flex-grow-1">
                  <h4 className="mb-0 textFieldTitle">Bunker Hill Community College</h4>
                  <div className="subheading mb-3">Associate Degree in Accounting</div>
                  {/* <div className='subheading2'>Accounting</div> */}
              </div>
              <div className="flex-shrink-0"><span className="text-info">September 2018 - June 2020</span></div>
          </div>
          {/* <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                  <h4 className="mb-0 textFieldTitle">Umass of Boston</h4>
                  <div className="subheading mb-3">Undergraduate</div>
                  <div className='subheading2'>Computer Science</div>
              </div>
              <div className="flex-shrink-0"><span className="text-info">September 2014 - June 2016</span></div>
          </div> */}
      </div>
      <br /><br /><br /><br />
      <div className='mt-10'>
          <h1 className="mb-5">Experience</h1>
          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                  <h4 className="mb-0 textFieldTitle">Nail Technician</h4>
                  <div className="subheading mb-3">MiniLuxe and AerNailBar</div>
                  <div className='subheading2'>Provide manicures and pedicure services, and ensure clients receive the highest levels of service quality possible.</div>
              </div>
              <div className="flex-shrink-0"><span className="text-info">June 2019 - Present</span></div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                  <h4 className="mb-0 textFieldTitle">Tax Preparer</h4>
                  <div className="subheading mb-3">Bunker Hill Community College</div>
                  <div className='subheading2'>Excellent client service orientation with an ability to handle pressure in a positive, professional manner.</div>
              </div>
              <div className="flex-shrink-0"><span className="text-info">January 2020 - June 2020</span></div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                  <h4 className="mb-0 textFieldTitle">Machine Operator</h4>
                  <div className="subheading mb-3">Micro Tech Staffing</div>
                  <div className='subheading2'>Responsible for operating the machinery in the automation line. Ensure product quality according to company's quality requirements.</div>
              </div>
              <div className="flex-shrink-0"><span className="text-info">April 2017 - May 2019</span></div>
          </div>

          <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                  <h4 className="mb-0 textFieldTitle">Cashier</h4>
                  <div className="subheading mb-3">CVS</div>
                  <div className='subheading2'>Help with stocking and merchandising to maximize sales for store and provide a pleasant shopping experience for customers.</div>
              </div>
              <div className="flex-shrink-0"><span className="text-info">June 2016 - February 2017</span></div>
          </div>
      </div>
    </div>
  )
}

export default TextField
