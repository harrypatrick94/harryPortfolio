import React from 'react';
import harry from './projects/harryPatrick.jpg';

const Contact = () => {

  return (
    <div className="containerContact">
        <h1>Hi I'm Harry!</h1>
        <img src={harry} alt="ME!!" className="me"/>
        <p>
          I am Melbourne based aspiring developer. With an interest in creative coding, environmental kindness and outdoor entertainment.
        </p>
        <ul className="contactUl">
          <li className="contactLI"><a href="https://www.linkedin.com/in/harrygpatrick/" target="_blank">linkedin</a></li>
          <li className="contactLI"><a href="https://github.com/harrypatrick94" target="_blank">github</a></li>
          <li className="contactLI"><a href="mailto:harry.g.patrick94@gmail.com" target="_blank">Email</a></li>
        </ul>
    </div>
  )
}

export default Contact
