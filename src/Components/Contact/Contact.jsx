import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9bd4dd6f-5044-4c43-a7dd-70e397532467");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    
  return (
    <div className='contact'>
        <div className='contact-call'>
            <h3>Send us a message! <img src={message_icon}></img></h3>
            <p>Feel free to reach out with any questions whatsoever!</p>
            <ul>
                <li><img src = {mail_icon}></img>email@email.com</li>
                <li><img src = {phone_icon}></img>1234567890</li>
                <li><img src = {location_icon}></img>Address, street, apt, city, state - zip, country</li>
            </ul>
        </div>
        <div className='contact-call'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Name' required/>
                <label>Phone number</label>
                <input type='tel' name='phone' placeholder='Mobile Number' required/>
                <label>Write the message here</label>
                <textarea name='message' id = '' rows='6' placeholder='Enter your Message' required/>
                <button type='submit' className='btn dark-btn'>Submit now</button>
            </form>
            <span>{result}</span>

        </div>
    </div>
  )
}

export default Contact