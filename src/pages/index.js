import React from 'react'
import Link from 'gatsby-link'
import Welcome from '../components/Welcome.jsx';
import AboutUs from '../components/AboutUs.jsx';
import Services from '../components/Services.jsx';
import ClientProjects from '../components/ClientProjects.jsx';
import Testimonials from '../components/Testimonials.jsx';
import ContactUs from '../components/ContactUs.jsx';

const IndexPage = () => (
  <div>
    <Welcome />
    <AboutUs />
    <Services />
    <ClientProjects />
    <Testimonials />
    <ContactUs />
  </div>
)

export default IndexPage
