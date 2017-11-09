import React from 'react';
import { Table } from 'react-bootstrap';
import Spacer from '../util/Spacer.jsx';

const ClientProjectsItem = (props) => {
  return (
    <div style={{minHeight: 300}}>
      <div style={{display: 'flex', flex: '2', justifyContent: 'center', alignItems: 'center'}}>
        <Spacer margin="20" />
        <h2><strong>{props.title}</strong></h2>
        <Spacer margin="20" />
      </div>
      <div style={{display: 'flex', flex: '3', justifyContent: 'center', alignItems: 'center'}}>
        <Spacer margin="100" />
        <p>{props.details}</p>
        <Spacer margin="100" />
      </div>
    </div>
  );
}

export default ClientProjectsItem;
