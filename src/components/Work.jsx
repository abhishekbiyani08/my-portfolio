import React from 'react';
import { data } from "../data/data.js";

const Work = () => {
  const project = data;
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a1926]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-yellow-400'>
            Work
          </p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-3 md:grid-cols-3 gap-4">
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-xl shadow-[#040c16] group container rounded-lg flex justify-center text-center items-center content-div w-full bg-center">
              
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white tracking-normal">
                  {item.name}
                </span>
                <div className="pt-8 text-center">
                  <a href={item.link} target="_blank" rel='noreferrer'>
                    <button className="text-center rounded-md px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
                      Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
