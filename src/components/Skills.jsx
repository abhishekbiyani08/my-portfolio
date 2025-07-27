import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import GitHub from '../assets/github.png';
import bootstrap from '../assets/bootstrap.webp';
import sql from '../assets/sql.png';
import cpp from '../assets/cpp.png';
import php from '../assets/php.png'
import salesforce from '../assets/Salesforce.png'
import tailwind from '../assets/tailwind.png'
import csharp from '../assets/csharp.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full bg-[#0a1926] text-gray-300 py-1 lg:py-0 md:py-2'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-yellow-400 '>Skills</p>
              <p className='py-4'>These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 text-center py-8 md:grid-cols-4'>
              <div className='shadow-md shadow-[#040c16] hover:scale-90 duration-500'>
                  <img className='w-20 mx-auto' src={cpp} alt="C++ icon" />
                  <p className='my-4'>C++</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-90 duration-500'>
                  <img className='w-16 mx-auto mt-4' src={csharp} alt="C# icon" />
                  <p className='my-4'>C#</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-90 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="Javascript icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-90 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-90 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-90 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-90 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-90 duration-500'>
                  <img className='w-20 mx-auto' src={sql} alt="MySQL icon" />
                  <p className='my-4'>MY SQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-90 duration-500'>
                  <img className='w-20 mx-auto my-5' src={bootstrap} alt="Bootstrap icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-90 duration-500'>
                  <img className='w-24 mx-auto my-5' src={php} alt="PHP icon" />
                  <p className='my-4'>PHP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-90 duration-500'>
                  <img className='w-20 mx-auto' src={tailwind} alt="Tailwind icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-90 duration-500'>
                  <img className='w-20 mx-auto mt-6' src={salesforce} alt="Salesforce icon" />
                  <p className='my-4'>SALESFORCE</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
