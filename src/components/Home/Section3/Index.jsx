import React from 'react';
import Card from './Card';
import './CardStyle.css';

const Index = () => {
  return (
    <div style={{backgroundImage:"url('./bg2.png'" , backgroundRepeat:'no-repeat' , backgroundSize:"cover"}} className=' flex justify-center pt-[100px] w-full'>
      <div className='absolute right-0'>
          <img src="subject.png" alt="" />
         </div>
      <div className='flex flex-col items-center gap-7'>
      <p className='text-center '>
          <span className="span text-[#0beade]">02&nbsp;&nbsp;|</span>
          <span className="text-wrapper-2">&nbsp;</span>
          <span className="text-wrapper-3">ALL OUR SERVICES</span>
        </p>
      <p className='text-center text-[30px] w-[500px] font-bold'>
          <span className="">Our </span>
          <span className='gradient-text'>Comprehensive Services </span>
          <span className="text-wrapper-3">will cover all your needs</span>
        </p>

        <p className="text-[#C9C9C9] w-[600px] text-center">
        We don&#39;t just help with your IT needs. We focus on the entire ecosystem surrounding it. Bringing together
        people, process, and technology, we pride ourselves on delivering solutions that work in reality. Not theory.
      </p>
        
      <div className='pt-[150px]'>
        <Card/>
      </div>
        <button className='AllServicesButton'>show all services</button>
      </div>
    </div>
  );
}

export default Index;
