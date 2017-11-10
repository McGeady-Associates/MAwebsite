import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import FieldGroup from '../components/FieldGroup.jsx';

class EmailForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form>
          <FieldGroup
            id="fullNameText"
            type="text"
            label="Full Name"
            placeholder="Enter full name"
          />
          <FieldGroup
            id="EmailAddress"
            type="email"
            label="Email address"
            placeholder="Enter email"
          />
          <FormGroup controlId="Textarea">
            <ControlLabel>Body</ControlLabel>
            <FormControl componentClass="textarea" placeholder="What would you like to tell us?" />
          </FormGroup>
        </form>
      </div>
    )
  }
}

export default EmailForm;
