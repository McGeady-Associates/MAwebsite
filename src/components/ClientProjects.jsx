import React from 'react';
import ClientProjectsItem from './ClientProjectsItem.jsx';
import clientProjectsText from '../../static/text/clientProjectsText';

const ClientProjects = (props) => {
  return (
    <section id="ClientProjectsContainer"
      className="bg-primary text-white text-center"
      style={{height: '30%'}}
    >
    <h1 style={{display: 'flex', justifyContent: 'center'}}>
      Key Client Engagements
    </h1>
    <div style={{display: 'flex', flex: '0 0 auto'}}>
      <ClientProjectsItem title={clientProjectsText.egsk.title} details={clientProjectsText.egsk.details} />
      <ClientProjectsItem title={clientProjectsText.nawl.title} details={clientProjectsText.nawl.details} />
      <ClientProjectsItem title={clientProjectsText.mcca.title} details={clientProjectsText.mcca.details} />
    </div>
    <div style={{display: 'flex'}}>
      <ClientProjectsItem title={clientProjectsText.neaf.title} details={clientProjectsText.neaf.details} />
      <ClientProjectsItem title={clientProjectsText.aacedc.title} details={clientProjectsText.aacedc.details} />
      <ClientProjectsItem title={clientProjectsText.ee.title} details={clientProjectsText.ee.details} />
    </div>
    </section>
  )
}

export default ClientProjects;
