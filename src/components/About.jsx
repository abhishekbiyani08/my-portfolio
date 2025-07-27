import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#0a1926] text-gray-300 py-20'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='text-center md:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-yellow-400'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-8 px-4 flex items-center'>
            <div className='text-center md:text-right text-4xl font-bold'>
              <p>Greetings! I'm <span className='text-[#dbab00]'>Abhishek Biyani</span>, where Coding meets Creativity, check out my projects!</p>
            </div>
            <div className='md:text-left sm:text-center lg:text-left xl:text-left xs:text-center'>
              <p>From video editing to graphic design, and now diving into the world of Web Development – I do it all! Armed with a passion for tech and a knack for Data Structures, I'm on a mission to become a top-notch software engineer. Whether it's crafting stunning visuals or writing clean code, I'm here to make an impact.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
