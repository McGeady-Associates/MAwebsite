import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import FieldGroup from '../components/FieldGroup.jsx';

class EmailForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{display: 'flex', flex: 10, justifyContent: 'center', alignItems: 'center'}}>
        <form style={{width: '50%'}}onSubmit={(e) => {e.preventDefault()}}>
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
            placeholder="Enter your email"
          />
          <FieldGroup
            id="EmailSubject"
            type="email"
            label="Email Subject"
            placeholder="Subject"
          />
          <FormGroup controlId="Textarea">
            <ControlLabel>Body</ControlLabel>
            <FormControl componentClass="textarea" placeholder="What would you like to tell us?" />
          </FormGroup>
          <Button type="submit">
            Submit
          </Button>
        </form>
      </div>
    )
  }
}

export default EmailForm;
