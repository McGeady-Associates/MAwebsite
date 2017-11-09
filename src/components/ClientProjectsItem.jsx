import React from 'react';
import { Table } from 'react-bootstrap';

const ClientProjectsItem = (props) => {
  return (
    <Table responsive bordered>
      <thead>
        <tr>
          <th>{props.title}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.details}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default ClientProjectsItem;

// <div>
//   <div style={{display: 'flex', justifyContent: 'center'}}>
//     <p><strong>{props.title}</strong></p>
//   </div>
//   <div style={{display: 'flex', flex: '3', justifyContent: 'center', alignItems: 'center'}}>
//     <p>{props.details}</p>
//   </div>
// </div>
