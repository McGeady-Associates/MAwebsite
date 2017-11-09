import React from 'react';
import ServicesText from '../../static/text/servicesText';

const Services = (props) => {
  return (
    <section id="ServicesContainer"
      className="text-white text-center"
      style={{backgroundColor: 'rgba(57,68,6, 1)', height: '30%'}}
    >
    <h1 style={{display: 'flex', justifyContent: 'center'}}>
      McGeady & Associates Services
    </h1>
    <div style={{display: 'flex'}}>
      <div style={{flex: 8}}>
        <ul>
          {
            ServicesText.map((service, index) => {
              return (
                <li key={index}>{service}</li>
              );
            })
          }
        </ul>
      </div>
    </div>
    </section>
  )
}

export default Services;
