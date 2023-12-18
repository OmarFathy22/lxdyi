import HeroSection from '../components/Home/Section1/HeroSection';
import Section2 from '../components/Home/Section2/Index';
import Section3 from '../components/Home/Section3/Index';
import Section4 from '../components/Home/Section4/Index';
import Section5 from '../components/Home/Section5/Index';
import Section6 from '../components/Home/Section6/Index';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import React from 'react';

const Home = () => {
  return (
    <div  style={{backgroundImage:"url('./bg.png'" , backgroundRepeat:'no-repeat' , backgroundSize:"cover"}} className='h-[100vh] w-full'>
       {/* header landed here  */}
      <div className='absolute top-0 left-0 right-0 bg-transparent'>
        <Header />
      </div>
      {/* hero section landed here  */}
       <HeroSection/>
       {/* section 2 landed here  */}
       <div className=' -translate-y-1' style={{backgroundImage:"url('./bgSec4.png'" , backgroundRepeat:'no-repeat' , backgroundSize:"cover"}}>
        <Section2/>
       </div>
        {/* section 2 landed here  */}
       <div >
        <Section3/>
       </div>
       <div >
        <Section4/>
       </div>
       <Section5/>
       <Section6/>
       <Footer/>
    </div>
  );
}

export default Home;
