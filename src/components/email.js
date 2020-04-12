import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './contact.css'
const Email = () => {

  const emailTo = 'harry.g.patrick94@gmail.com'
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [confirmation, setConfirmation] = useState(false)

  const handleName = (e) => {
    let name = e.target.value
    setName(name)
  }

  const handleEmail = (e) => {
    let email = e.target.value
    setEmail(email)
  }

  const handleMessage = (e) => {
    let message = e.target.value
    setMessage(message)
  }

  const clearForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setConfirmation(true)
    console.log('sent');
  }

  const sendEmail = () => {

    axios.post('http://ec2-13-211-167-99.ap-southeast-2.compute.amazonaws.com/send?', {
      name,
      email,
      message
    })
    .then(() => clearForm())
    .catch(err => console.warn(err))

  }

  return (

    <div className="contactContainer">
      <form className="contactForm" onSubmit={() => sendEmail()}>
        <h2>Contact Us</h2>
        <ul className="formUL">
          <li className="formLI">
            <label className="contactLabel">Name</label>
            <br/>
            <input type="text" className="contactText" value={name} onChange={handleName}/>
          </li>
          <li className="formLI">
            <label className="contactLabel">Email</label>
            <br/>
            <input type="text" className="contactText" value={email} onChange={handleEmail}/>
          </li>
          <li className="formLI">
            <label className="contactLabel">Message</label>
            <br/>
            <textarea className="contactTextarea" value={message} onChange={handleMessage}/>
          </li>
          <li className="formLI">
            <input type="submit" className="contactSubmit"/>
          </li>
        </ul>
      </form>
      {
        confirmation
        ?
        <p className="messageSent">Your message has been sent</p>
        :
        <p></p>
      }

    </div>
  )
}

export default Email
