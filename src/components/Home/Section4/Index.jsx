import React from 'react';
import './style.css';
const Index = () => {
  return (
    <div className='sectionBg h-[100vh] flex flex-col justify-center gap-[70px] items-center relative'>
         <div className='absolute right-0'>
          <img src="subject.png" alt="" />
         </div>
        <h1 className='text-[35px] font-bold text-start flex self-start pl-[150px]'>Our Awesome Portfolio</h1>
      <div className='flex gap-10'>
          <div>
            <img src="port1.png" alt="" />
          </div>
          <div className=' translate-y-10'>
            <img src="port2.png" alt="" />
          </div>
          <div className='translate-y-20'>
            <img src="port3.png" alt="" />
          </div>
      </div>
    </div>
  );
}

export default Index;
