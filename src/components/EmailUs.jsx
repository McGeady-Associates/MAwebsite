import React from 'react';
import emailUsText from '../../static/text/emailUsText';

const EmailUs = (props) => {
  return (
    <section id="EmailUsContainer"
      className="bg-primary text-white text-center"
      style={{height: '30%'}}
    >
    <h1>
      Contact Us
    </h1>
    <div style={{display: 'flex'}}>
      <div>
        <p style={{marginBottom: 0}}>{emailUsText.address}</p>
        <p>{emailUsText.contacts}</p>
      </div>
      <div>

      </div>
    </div>
    </section>
  )

}

export default EmailUs;
