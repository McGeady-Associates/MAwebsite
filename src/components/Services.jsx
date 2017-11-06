import React from 'react';
import ServicesText from '../../static/text/servicesText';

const Services = (props) => {
  return (
    <section id="ServicesContainer"
      className="bg-primary text-white text-center"
      style={{backgroundColor: '#b4c889', height: '30%'}}
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
