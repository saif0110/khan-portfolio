import React, { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import './Contact.css';
import axios from 'axios';
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('https://portfolio-mailer-api.onrender.com/contact', formData);
      setLoading(false);
      setFormData({name: '', email: '', message:''});
      alert('Email sent successfully.');
    } catch (error) {
      setLoading(false);
      setFormData({name: '', email: '', message:''});
      alert('Failed to send email.');
    }
  };
  return (
    <div className='contactContainer' >
      <div className='leftView'>
        <div id='text'>
          <h3>Get in touch:</h3>
          <p>Fill the form and start conversation</p>
        </div>
        <div id='contactAddress'>
          <div className='contact'>
            <div className='box'>
              <LocationOnIcon style={{color: "gray"}}/>
              <p>69 Babaganj-street, Intiyathok gonda, Uttarpradesh.</p>
            </div>
            <div className='box'>
              <PhoneIcon style={{color: "gray"}}/>
              <p>+91 8810700982</p>
            </div>
            <div className='box'>
              <EmailIcon style={{color: "gray"}}/>
              <p>tauheed0110@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className='rightView'>
        <div className='formElement'>
          <input type="text" id="name" name='name' placeholder='Full name' value={formData.name} onChange={handleChange}/>
        </div>
        <div className='formElement'>
          <input type="email" id="email" name='email' placeholder='Email' value={formData.email} onChange={handleChange}/>
        </div>
        <div className='formElement'>
          <textarea id="message" name='message' placeholder='Message..' rows={5} value={formData.message} onChange={handleChange}/>
        </div>
        <div className='formElement'>
          <button type='submit' id='submit' onClick={handleSubmit} >
            {loading ? 'Sending...': 'Contact'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;