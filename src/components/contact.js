import React from 'react';
import {Link} from 'react-router-dom'
import harry from './projects/harry.png';
import resume from './projects/resume.pdf';
const Contact = () => {

  return (
    <div className="containerContact">

        <img src={harry} alt="ME!!" className="me"/>
        <p id='harryHi'>Hi I'm Harry!</p>
        <p id="meet">
          I am a Melbourne based aspiring developer. With an interest in creative coding, environmental kindness and outdoor entertainment.
        </p>
        <ul className="contactUl">
          <li className="contactLI"><a href="https://www.linkedin.com/in/harrygpatrick/" target="_blank">linkedin</a></li>
          <li className="contactLI"><a href="https://github.com/harrypatrick94" target="_blank">github</a></li>
          <li className="contactLI"><a href="mailto:harry.g.patrick94@gmail.com">Contact Me</a></li>
          <li className="contactLI"><a href={resume} download>Download CV</a></li>
        </ul>
    </div>
  )
}

export default Contact

// <li className="contactLI"><a href="mailto:harry.g.patrick94@gmail.com">Contact Me</a></li>

  // <li className="contactLI"><Link to="/email">Email</Link></li>
