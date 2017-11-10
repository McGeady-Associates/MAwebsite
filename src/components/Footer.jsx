import React from 'react';
import { Table } from 'react-bootstrap';
import emailUsText from '../../static/text/emailUsText';
import linkedInIcon from '../../static/img/linkedin-icon.png';

const Footer = (props) => {
  return (
    <Table responsive bordered>
      <tbody>
        <tr>
          <td>
            <p style={{fontSize: 14, marginBottom: 0}}>{emailUsText.address}</p>
            <p style={{fontSize: 14, marginBottom: 0}}>{emailUsText.contacts}</p>
          </td>
          <td style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <a href="https://www.linkedin.com/in/patrice-mcgeady-3714812/" target="_blank">
              <img src={linkedInIcon} style={{display: 'flex', flex: 1, maxWidth: 51.2, maxHeight: 51.2}} alt="LinkedIn Link"/>
            </a>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Footer;
