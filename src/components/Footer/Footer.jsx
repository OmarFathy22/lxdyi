import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#19171C] h-[500px] w-full relative flex justify-center z-[-1] ">
    <div className="w-full flex pt-[100px] px-[132px] gap-[122px]  mt-[100px]">
        <div className="w-[20%] flex flex-col gap-3">
          <h1 className="text-[20px] font-bold">Company Info</h1>
          <p className="text-[12px] text-[#C6C6C6]">
            Reach out to us anytime and lets create a better future for all
            technology users together, forever. We are open to all types of collab
            offers and tons more.
          </p>
        <div className="flex items-center gap-2">
            <img className="h-[20px] w-[20px]" src="footer-time.png" alt="" />
            <p className="text-[12px] text-[#C6C6C6]">Office Hours <br/> Monday-Friday 9 AM-5 PM PST</p>
        </div>
        <div className="flex items-center gap-2">
            <img className="h-[20px] w-[20px]" src="footer-support.png" alt="" />
          <p className="text-[12px] text-[#C6C6C6]">Support Hours <br/> 24/7 365</p>
          </div>
        </div>
      
        <div className="w-[20%] flex flex-col gap-3">
        <h1 className="text-[20px] font-bold">Contact Info</h1>
        <div className="flex items-center gap-2">
            <img className="h-[20px] w-[20px]" src="footer-mail.png" alt="" />
          <p className="text-[12px] text-[#C6C6C6]">
          flicker.ae1@gmail.com
          </p>
          </div>
          <div className="flex items-center gap-2">
            <img className="h-[20px] w-[20px]" src="footer-phone.png" alt="" />
          <p className="text-[12px] text-[#C6C6C6]">
          +2 0155 452 2388
          </p>
          </div>
        </div>
      
        <div className="w-[20%] flex flex-col gap-3">
        <h1 className="text-[20px] font-bold">Our Services</h1>
         <p className="text-[12px] text-[#C6C6C6]">Graphic design</p>
         <p className="text-[12px] text-[#C6C6C6]">Marketing</p>
         <p className="text-[12px] text-[#C6C6C6]">Branding</p>
         <p className="text-[12px] text-[#C6C6C6]">Photography</p>
         <p className="text-[12px] text-[#C6C6C6]">Web,Ecommerce & Mobile Apps</p>
         <p className="text-[12px] text-[#C6C6C6]">Creative</p>
        </div>
      
    </div>
    <div className="bg-[#1C1C1C] absolute bottom-0 right-0 left-0">
      <p className="text-center">© 2023 Flicker. All Rights Reserved</p>
    </div>
    </div>
  );
};

export default Footer;
