import React from 'react'
import Link from 'gatsby-link'
import Welcome from '../components/Welcome.jsx';
import AboutUs from '../components/AboutUs.jsx';
import Services from '../components/Services.jsx';
import ClientProjects from '../components/ClientProjects.jsx';
import Testimonials from '../components/Testimonials.jsx';
import EmailUs from '../components/EmailUs.jsx';

const IndexPage = () => (
  <div>
    <Welcome />
    <AboutUs />
    <Services />
    <ClientProjects />
    <Testimonials />
    <EmailUs />
    <Link to="/404"><a>Some link</a></Link>
  </div>
)

export default IndexPage
