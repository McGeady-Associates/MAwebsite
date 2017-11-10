import React from 'react';
import welcomeText from '../../static/text/welcome';

const Welcome = (props) => {
  return (
    <section id="welcomeContainer"
      style={{backgroundColor: '#7b9b4a', height: '30%'}}
    >
      <h1 className="text-center">
        WELCOME TO MCGEADY & ASSOCIATES
      </h1>
      <div style={{marginTop: 50, marginLeft: 200, marginRight: 200, marginBottom: 50}}>
        <p>
          {welcomeText.p1}
        </p>
        <p>
          {welcomeText.p2}
        </p>
        <p>
          {welcomeText.p3}
        </p>
        <p>
          {welcomeText.p4}
        </p>
        <p>
          {welcomeText.p5}
        </p>
      </div>
    </section>
  )
}

export default Welcome;
