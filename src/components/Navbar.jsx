import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';
import { TbBrandLeetcode } from "react-icons/tb";
import { SiCodeforces } from "react-icons/si";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className={`absolute w-full h-[70px] flex justify-between items-center px-10 bg-[#0a1926] text-gray-300 z-20 transition-all duration-300 ${nav ? 'backdrop-blur-md' : ''}`}>
      <div>
        <img src={Logo} alt='' style={{ width: '100px', height: '100px' }} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li className='underline-effect'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='underline-effect'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='underline-effect'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='underline-effect'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='underline-effect'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-30 cursor-pointer'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={`${
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-20'
        } transition-all duration-500 ease-in-out`}
      >
        <li className='py-6 text-4xl hover-effect transform transition-transform duration-500 ease-in-out'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover-effect transform transition-transform duration-500 ease-in-out'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover-effect transform transition-transform duration-500 ease-in-out'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl hover-effect transform transition-transform duration-500 ease-in-out'>
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl hover-effect transform transition-transform duration-500 ease-in-out'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 z-10'>
        <ul>
          {/* Social icons */}
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/abhishek-biyani-39ba251b9/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#db8b00]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://leetcode.com/u/abhishek_biyani08/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Leetcode <TbBrandLeetcode size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#005b47]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='mailto:abhishekbiyani08@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1MAVcQCgsUZ_ro-fZC5jzg53Mfq0uzLYW/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#9f1818]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://codeforces.com/profile/abhishekbiyani08'
              target='_blank'
              rel='noopener noreferrer'
            >
              Codeforces <SiCodeforces size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
