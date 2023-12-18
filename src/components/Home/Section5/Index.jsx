import React from 'react';

const Index = () => {
  return (
    <div className=' p-[50px]'>
      <p className=' p-[50px] pl-[100px] text-[50px]  font-bold '>
          <span className="">Get in Touch with our  </span>
          <span className='gradient-text'>Team </span>
          <span className="">.</span>
        </p>
    <div className='flex flex-row-reverse justify-evenly gap-10 '>
        <div className='h-[400px] rounded-lg w-[553px] relative flex justify-center items-start' style={{backgroundImage:"url('./avatarBg.png'" , backgroundRepeat:'no-repeat' , backgroundSize:"cover"}}>
         <h1 className='text-[30px] text-center font-bold w-[80%] pt-[80px]'>“We specialise in helping our customers digitise their business”</h1>
         <div className='absolute bottom-5  w-full flex justify-center flex-col items-center'>
          <div>
            <img src="avatar.png" alt="" />
          </div>
         <h1 className='text-[#C6C6C6]'>Dawood</h1>
         <h1 className='text-[#C6C6C6]'>Front-End Developer</h1>
         </div>
        </div>
        <div className='h-[438px] w-[553px]'>
          <form className='flex flex-col gap-3'>
            <div className='bg-[#161E25] flex gap-2 p-5 rounded-md'>
              <img className='h-[25px] w-[25px]' src="./vectorUser.png" alt="" />
              <input placeholder='Full Name' className=' flex-1 bg-transparent outline-none' type="text" />
            </div>
            <div className='bg-[#161E25] flex gap-2 p-5 rounded-md'>
              <img className='h-[20px] translate-y-1 w-[20px]' src="./vectorMail.png" alt="" />
              <input placeholder='Email Address' className='flex-1 bg-transparent outline-none' type="text" />
            </div>
            <div className='bg-[#161E25] flex gap-2 p-5 rounded-md'>
              <img className='h-[20px] translate-y-1 w-[20px]' src="./vectorCall.png" alt="" />
              <input placeholder='Phone Number' className='flex-1 bg-transparent outline-none' type="text" />
            </div>
            <div className='bg-[#161E25] flex gap-2 p-5 rounded-md'>
              <img className='h-[20px] translate-y-1 w-[20px]' src="./vectorMessage.png" alt="" />
              <textarea placeholder='Write something here...' className='flex-1 bg-transparent outline-none resize-none' rows={3}  />
            </div>
            <button className='bg-[#5B749D] text-[20px] text-white p-3 py-2 rounded-full w-fit'>Submit Now</button>
          </form>
        </div>
    </div>
    </div>
  );
}

export default Index;
