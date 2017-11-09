import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from '../../static/img/logo.jpg'

import './index.css'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar fixedTop style={{backgroundColor: 'white', maxHeight: 70}}>
        <Navbar.Toggle />
        <Navbar.Header style={{maxWidth: '30%'}}>
          <a href="#"><img src={logo} style={{maxWidth: '70%', maxHeight: '70%'}}/></a>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/#/AboutUsContainer">About Us</NavItem>
            <NavItem eventKey={2} href="/#/ServicesContainer">Services</NavItem>
            <NavItem eventKey={3} href="/#/ClientProjectsContainer">Key Client Engagements</NavItem>
            <NavItem eventKey={4} href="/#/ContactUsContainer">Contact Us</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const TemplateWrapper = ({ children }) => (
  <div style={{backgroundColor: 'white'}}>
    <Helmet
      title="McGeady & Associates LLC"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        paddingTop: 60,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
