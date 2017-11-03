import React from 'react';
import welcomeText from '../../static/text/welcome';

const Welcome = (props) => {
  return (
    <section id="welcomeContainer"
      className="bg-primary text-white text-center"
      style={{backgroundColor: '#b4c889', height: '30%'}}
    >
    <h1>
      WELCOME TO MCGEADY & ASSOCIATES
    </h1>
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
    </section>
  )

}

export default Welcome;
