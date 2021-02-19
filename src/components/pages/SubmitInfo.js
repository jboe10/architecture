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
          </div>
          <div className="contact-info">
            <h1>Want to join our team?</h1>
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
