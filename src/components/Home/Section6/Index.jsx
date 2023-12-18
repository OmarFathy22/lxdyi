import React from 'react';

const Index = () => {
  return (
    <div className='h-[300px] w-[70%]  flex flex-col justify-center items-center grad mx-auto rounded-lg translate-y-[100px] z-10'>
      <div className='flex gap-2 items-center '>
        <h1 className='font-bold text-[30px]'>Move even faster with</h1>
        <div>
          <img src="logo.png" alt="" />
        </div>
      </div>
      <h1 className='text-[rgba(255, 255, 255, 0.80)] -translate-y-5 font-bold text-[25px]'>Your Guide in the Creative Marketing Agency</h1>
      <button className='bg-[#8000FF] mt-5 text-white px-4 py-2 rounded-lg'>Contact Us</button>
    </div>
  );
}

export default Index;
