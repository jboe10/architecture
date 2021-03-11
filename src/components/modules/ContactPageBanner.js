import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ContactPageBanner() {
  return (
    <section className="contact-page-banner-wrap">
      <a href="/projects">
        <div className="contact-page-banner">
          <p>
          Exercising my skills by recreating websites from sight,
          On full pages or sections of websites.
          </p>
          <div className="contact-page-arrow-link">
            <p>
              Apps are hosted for free on Heroku,<br/>
              so expect longer than average load time
            </p>
            <FontAwesomeIcon icon={faArrowRight}/>
          </div>      
        </div>
      </a>
    </section>
  )
}
