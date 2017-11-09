import React from 'react';
import { Carousel } from 'react-bootstrap';
import ClientProjectsItem from './ClientProjectsItem.jsx';
import clientProjectsText from '../../static/text/clientProjectsText';

const ClientProjects = (props) => {
  return (
    <section id="ClientProjectsContainer"
      className="text-white text-center"
      style={{height: '30%'}}
    >
      <h1 style={{display: 'flex', justifyContent: 'center'}}>
        Key Client Engagements
      </h1>
      <Carousel>
        <Carousel.Item>
          <ClientProjectsItem title={clientProjectsText.egsk.title} details={clientProjectsText.egsk.details} />
        </Carousel.Item>
        <Carousel.Item>
          <ClientProjectsItem title={clientProjectsText.nawl.title} details={clientProjectsText.nawl.details} />
        </Carousel.Item>
        <Carousel.Item>
          <ClientProjectsItem title={clientProjectsText.mcca.title} details={clientProjectsText.mcca.details} />
        </Carousel.Item>
        <Carousel.Item>
          <ClientProjectsItem title={clientProjectsText.neaf.title} details={clientProjectsText.neaf.details} />
        </Carousel.Item>
        <Carousel.Item>
          <ClientProjectsItem title={clientProjectsText.aacedc.title} details={clientProjectsText.aacedc.details} />
        </Carousel.Item>
        <Carousel.Item>
          <ClientProjectsItem title={clientProjectsText.ee.title} details={clientProjectsText.ee.details} />
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default ClientProjects;
