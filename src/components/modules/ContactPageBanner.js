import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ContactPageBanner() {
  return (
    <section className="contact-page-banner-wrap">
      <div className="contact-page-banner">
        <p>
          We are fearless, solution-oriented and have strong professional integrity. With humor 
          and dynamic teamwork, we create designs of unique solutions tailored to your needs.
        </p>
        <div className="contact-page-arrow-link">
          <p>
            Say HELLO to us in Scenario.<br/>
            Let's talk about your project
          </p>
          <FontAwesomeIcon icon={faArrowRight}/>
        </div>      
      </div>
    </section>
  )
}
