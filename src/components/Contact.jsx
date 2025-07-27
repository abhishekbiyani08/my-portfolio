import React, { useState } from 'react';
import { FaHandshake } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const validateForm = () => {
    let formErrors = {};

    if (!name.trim()) {
      formErrors.name = "Name is required";
    }
    if (!email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!message.trim()) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with submission
      e.target.submit();
    }
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a1926] flex justify-center items-center p-4'>
      <form method='POST' action="https://api.web3forms.com/submit" className='flex flex-col max-w-[600px] w-full' onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="cf804a2b-0eda-4b68-a0df-c37b99006640"></input>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact</p>
        </div>
        <input
          className={`p-2 rounded-md focus:bg-blue-200 ${nameFocused || name ? 'bg-[#ccd6f6]' : ''}`} type="text" placeholder='Name' name='name' value={name}
          onChange={handleNameChange} onFocus={() => setNameFocused(true)} onBlur={() => setNameFocused(false)}
        />
        {errors.name && <p className='text-red-500'>{errors.name}</p>}
        <input
          className={`my-4 p-2 rounded-md focus:bg-blue-200 ${emailFocused || email ? 'bg-[#ccd6f6]' : ''}`} type="email" placeholder='Email' name='email' value={email}
          onChange={handleEmailChange} onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)}
        />
        {errors.email && <p className='text-red-500'>{errors.email}</p>}
        <textarea
          className={`p-2 rounded-lg focus:bg-blue-200 ${messageFocused || message ? 'bg-[#ccd6f6]' : ''}`} name="message" rows="7" placeholder='Your Message..' value={message}
          onChange={handleMessageChange} onFocus={() => setMessageFocused(true)} onBlur={() => setMessageFocused(false)}
        >
        </textarea>
        {errors.message && <p className='text-red-500'>{errors.message}</p>}
        <button className='px-4 py-3 my-8 mx-auto flex items-center button'>
          <FaHandshake className='mr-2' /> Let's Collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
