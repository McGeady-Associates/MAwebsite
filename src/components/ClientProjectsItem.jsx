import React from 'react';

const ClientProjectsItem = (props) => {
  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <p><strong>{props.title}</strong></p>
      </div>
      <div style={{display: 'flex'}}>
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default ClientProjectsItem;
