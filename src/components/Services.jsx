import React from 'react';
import ServicesText from '../../static/text/servicesText';

const Services = (props) => {
  return (
    <section id="AboutUsContainer"
      className="bg-primary text-white text-center"
      style={{backgroundColor: '#7b9b4a', height: '30%'}}
    >
    <h1 style={{display: 'flex', justifyContent: 'center'}}>
      McGeady & Associates Services
    </h1>
    <div style={{display: 'flex'}}>
      <div style={{flex: 8}}>
        <ul>
          {
            ServicesText.map(service => {
              return (
                <li>{service}</li>
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
