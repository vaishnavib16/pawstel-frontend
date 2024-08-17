import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container1 thq-grid-2">
          <div className="steps2-section-header">
            <h2 className="thq-heading-2">
              Discover the Power of Our Products
            </h2>
            <p className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <div className="steps2-actions">
              <button className="thq-button-animated thq-button-filled steps2-button">
                <span className="thq-body-small">Main action</span>
              </button>
            </div>
          </div>
          <div className="steps2-container2">
            <div className="steps2-container3 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text17 thq-heading-2">
                      Initial Consultation
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step1Description ?? (
                  <Fragment>
                    <span className="steps2-text21 thq-body-small">
                      Schedule a free initial consultation to discuss your
                      fitness goals and create a personalized workout plan.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text05 thq-heading-3">01</label>
            </div>
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text20 thq-heading-2">
                      Membership Options
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step2Description ?? (
                  <Fragment>
                    <span className="steps2-text16 thq-body-small">
                      Choose from a variety of membership options that fit your
                      schedule and budget, including individual or group
                      sessions.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text08 thq-heading-3">02</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text15 thq-heading-2">
                      Fitness Classes
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step3Description ?? (
                  <Fragment>
                    <span className="steps2-text18 thq-body-small">
                      Join our fitness classes led by experienced trainers to
                      stay motivated and reach your fitness goals.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text11 thq-heading-3">03</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text19 thq-heading-2">
                      Nutrition Guidance
                    </h2>
                  </Fragment>
                )}
              </h2>
              <span>
                {props.step4Description ?? (
                  <Fragment>
                    <span className="steps2-text22 thq-body-small">
                      Get expert advice on nutrition to complement your workout
                      routine and maximize results.
                    </span>
                  </Fragment>
                )}
              </span>
              <label className="steps2-text14 thq-heading-3">04</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  step3Title: undefined,
  step2Description: undefined,
  step1Title: undefined,
  step3Description: undefined,
  step4Title: undefined,
  step2Title: undefined,
  step1Description: undefined,
  step4Description: undefined,
}

Steps2.propTypes = {
  step3Title: PropTypes.element,
  step2Description: PropTypes.element,
  step1Title: PropTypes.element,
  step3Description: PropTypes.element,
  step4Title: PropTypes.element,
  step2Title: PropTypes.element,
  step1Description: PropTypes.element,
  step4Description: PropTypes.element,
}

export default Steps2
