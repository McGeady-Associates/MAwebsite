import React from 'react';
import emailUsText from '../../static/text/emailUsText';
import EmailForm from '../containers/EmailForm.jsx';

const ContactUs = (props) => {
  return (
    <section id="ContactUsContainer"
      className="text-white text-center"
      style={{height: '30%'}}
    >
    <h1>
      Contact Us
    </h1>
    <div style={{display: 'flex'}}>
      <div>
        <div>
          <EmailForm />
        </div>
        <p style={{marginBottom: 0}}>{emailUsText.address}</p>
      </div>
    </div>
    </section>
  )

}

export default ContactUs;
