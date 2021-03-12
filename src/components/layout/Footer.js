import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="footer-sub">
          <h4>Contact</h4>
          <ul>
            <li>Jonathan Boe</li>
            <li>Email me for inquiries!</li>
            <li>@jdboe2018@gmail.com</li>
          </ul>
        </div>
        <div className="footer-sub">
          <h4>Socials</h4>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/jonathan-d-boe/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/jboe10">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
