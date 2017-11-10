import React from 'react';
import emailUsText from '../../static/text/emailUsText';
import EmailForm from '../containers/EmailForm.jsx';
import Footer from '../components/Footer.jsx';

const ContactUs = (props) => {
  return (
    <section id="ContactUsContainer"
      className="text-white"
      style={{height: '30%', padding: 25}}
    >
    <h1 className="text-center">
      Contact Us
    </h1>
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div>
        <p className="text-center">{emailUsText.instructions}</p>
      </div>
      <div>
        <EmailForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </section>
  )

}

export default ContactUs;
