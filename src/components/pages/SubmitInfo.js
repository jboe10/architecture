import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ContactPageBanner from '../modules/ContactPageBanner';
import useForm from '../utils/useForm';


export default function SubmitInfo() {
  const submitHandler = e => {
    console.log(values)
  }
  const [values, handleChange, handleSubmit] = useForm(submitHandler);

  return (
    <>
      <Header
        color="white"
      />
      <div className="submit-info">
        <div className="contact-wrap">
          <div className="contact-info">
            <h1>We'd love to hear from You</h1>
            <div className="contact-sub-header">
              info@scenario.com
            </div>
            <div className="contact-dump">
              +47 22 93 12 50
            </div>
            <p>
              Contact us for questions about assignments,<br/>
              career opportunities or anything else you may be wondering<br/>
              about!
            </p>
          </div>
          <div className="contact-info">
            <h1>Want to join our team?</h1>
            <div className="contact-sub-header">
              Do you want to work with us?
            </div>
            <div className="contact-dump">
              jobb@scenario.com
            </div>
            <p>
              AS Scenario Interior Architects MNIL,<br/>
              Pilestredet 75c, Entrance 48, N-0354 Oslo, Norway
            </p>
          </div>
        </div>
        <div className="form-wrap">
          <form 
            onSubmit={handleSubmit}>

            <label>Name</label>
            <input 
              name="name"
              value={values.name || ""}
              onChange={handleChange}
            />

            <label>Email</label>
            <input 
              name="email"
              value={values.email || ""}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <ContactPageBanner/>
      <Footer/>
    </>
  )
}
