import React from 'react';
import AboutUsText from '../../static/text/AboutUs';
import PatriceBody from '../../static/img/PatriceBody.jpg';

const AboutUs = (props) => {
  return (
    <section id="AboutUsContainer"
      style={{height: '30%'}}
    >
    <h1 style={{display: 'flex', justifyContent: 'center'}}>
      ABOUT US
    </h1>
    <div style={{display: 'flex'}}>
      <div style={{display: 'flex', flex: 4, justifyContent: 'center', alignItems: 'center'}}>
        <img src={PatriceBody} style={{height: 342.7, width: 250.5}} />
      </div>
      <div style={{flex: 8, marginTop: 50, marginLeft: 100, marginRight: 100, marginBottom: 50}}>
        <p>
          {AboutUsText.p1}
        </p>
        <p>
          {AboutUsText.p2}
        </p>
        <p>
          {AboutUsText.p3}
        </p>
      </div>
    </div>
    </section>
  )
}

export default AboutUs;
