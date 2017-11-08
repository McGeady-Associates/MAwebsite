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
    this.state = {
      navHeight: 50
    }
  }

  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header style={{maxWidth: '40%'}}>
          <Navbar.Toggle />
          <a href="#"><img src={logo} style={{width: '50%'}}/></a>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">About Us</NavItem>
            <NavItem eventKey={2} href="#">Services</NavItem>
            <NavItem eventKey={3} href="#">Key Client Engagements</NavItem>
            <NavItem eventKey={4} href="#">Contact Us</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
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

//
// <div
//   style={{
//     background: 'white',
//   }}
// >
//   <div
//     style={{
//       margin: '0',
//     }}
//   >
