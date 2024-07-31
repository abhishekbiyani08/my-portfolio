import React, { useState } from 'react';
import { FaHandshake } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#0a1926] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/lbjkzjea" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-400 text-gray-300'>Contact</p>
            </div>
            <input 
              className={`p-2 rounded-md focus:bg-blue-200 ${nameFocused || name ? 'bg-[#ccd6f6]' : ''}`} type="text" placeholder='Name' name='name'value={name}
              onChange={handleNameChange} onFocus={() => setNameFocused(true)} onBlur={() => setNameFocused(false)}
            />
            <input 
              className={`my-4 p-2 rounded-md focus:bg-blue-200 ${emailFocused || email ? 'bg-[#ccd6f6]' : ''}`} type="email" placeholder='Email' name='email'value={email}
              onChange={handleEmailChange} onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)}
            />
            <textarea 
              className={`p-2 rounded-lg focus:bg-blue-200 ${messageFocused || message ? 'bg-[#ccd6f6]' : ''}`} name="message" rows="7" placeholder='Your Message..'value={message}
              onChange={handleMessageChange} onFocus={() => setMessageFocused(true)} onBlur={() => setMessageFocused(false)}
            >
            </textarea>
            <button className='text-white border-2 rounded-lg hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out px-4 py-3 my-8 mx-auto flex items-center'>
              <FaHandshake className='mr-2' /> Let's Collaborate
            </button>
        </form>
    </div>
  )
}

export default Contact;
