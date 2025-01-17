import React from 'react'

function About() {
  return (
  <section className="bg-[#000]">
    <div className="px-2 about-me-section mb-[40px]">
      <p className='text-[30px]'><span className='font-silkscreen'>About Me</span> - Experienced Front End Developer having hands-on experience in developing and implementing quality designs & architecture. I Want to work on challenging tasks which provide an opportunity to enhance my skills and knowledge. This could provide me an insight into new aspects so that it would be helpful for my career.</p>
    </div>
    <div className='grid grid-cols-3 gap-2'>
      <div className="bg-zinc-900 p-5 data-container">
        <h2 className="text-[60px] mb-[15px] font-bold data-couter">
          3
        </h2>
        <p className="text-[40px] exp-content">
          Organization Worked with
        </p>
      </div>
      <div className="bg-zinc-900 p-5 data-container">
        <h2 className="text-[60px] mb-[15px] font-bold data-couter">
          5
        </h2>
        <p className="text-[40px] exp-content">
          Years
        </p>
      </div>
      <div className="bg-zinc-900 p-5 data-container">
        <h2 className="text-[60px] mb-[15px] font-bold data-couter">
          10
        </h2>
        <p className="text-[40px] exp-content">
          Projects
        </p>
      </div>
    </div>
  </section>      
  )
}

export default About
