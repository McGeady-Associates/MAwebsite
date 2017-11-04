import React from 'react';

const ClientProjectsItem = (props) => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <p><strong>{props.title}</strong></p>
      </div>
      <div style={{display: 'flex', flex: '3', justifyContent: 'center', alignItems: 'center'}}>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default ClientProjectsItem;
