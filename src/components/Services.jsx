import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import ServicesText from '../../static/text/servicesText';
import imagePlcaeholder from '../../static/img/wireframe-image-placeholder.png';

const Services = (props) => {
  return (
    <section id="ServicesContainer"
      className="text-center"
      style={{backgroundColor: 'rgba(250, 250, 250, 1)', height: '30%'}}
    >
    <h1 style={{display: 'flex', justifyContent: 'center', color: '#95B100'}}>
      McGeady & Associates Services
    </h1>
    <div style={{display: 'flex'}}>
      <div style={{flex: 8}}>
        <ListGroup>
          {
            ServicesText.map((service, index) => {
              return (
                <ListGroupItem
                  key={index}
                  style={{textAlign: 'left', color: '#95B100'}}
                >
                  {service}
                </ListGroupItem>
              );
            })
          }
        </ListGroup>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', flex: 8, justifyContent: 'center', alignContent: 'center'}}>
        <img src={imagePlcaeholder} style={{margin: 80, minHeight: 400}}/>
        <p style={{color: '#f00'}}>Maybe have an image for each service and a small caption/description so people can read more about each service?</p>
      </div>
    </div>
    </section>
  )
}

export default Services;
