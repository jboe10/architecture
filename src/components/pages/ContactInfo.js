import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ContactPageBanner from '../modules/ContactPageBanner';

export default function ContactInfo() {

  return (
    <>
      <Header
        color="white"
      />
      <div className="contact-info-page">
        <div className="contact-wrap">
          <div className="contact-info">
            <h1>I'd Love to hear from you!</h1>
            <div className="contact-sub-header">
              jdboe2018@gmail.com
            </div>
            <div className="contact-dump-wrap">
              <div className="contact-dump">
                Send Me an email if you wish to give me a call!
              </div>
            </div>
            <div className="border-top-wrap">
              <p>
                Contact me for questions about my projects,<br/>
                career opportunities or anything else you may be wondering<br/>
                about!
              </p>
            </div>
          </div>
          <div className="contact-info location">
            <h1>Location</h1>
            <div className="contact-sub-header">
              Currently Located in
            </div>
              <div className="contact-dump">
                Long Beach, Ca
              </div>
            <div className="border-top-wrap">
              <p>
                Will move to work location,<br/>
                Also open to working remotely
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactPageBanner/>
      <Footer/>
    </>
  )
}
