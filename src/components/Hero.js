// "use client";
import React from 'react';


const Hero = () => {

  return (
    <>
      <div className='w-full h-[350px] relative'>
        <img src="/images/hero-banner-image-4.png" alt="Slide 1" className='w-full h-[350px] object-cover' />
        <div className='absolute top-[5rem] left-[4rem] max-w-[350px]'>
          <h2 className='text-[2.3rem] text-white font-semibold '>Perfume GUCCI INTENSE OUD EDP</h2>
          <button className='text-white mt-[2rem] border-b-2 pb-1 cursor-pointer'> Shop Now</button>
        </div>
      </div>
      {/* <div className='w-full h-[350px] relative'>
        <img src="/images/hero-banner-image-1.png" alt="Slide 1" className='w-full h-[350px] object-cover' />
        <div className='absolute top-[5rem] left-[4rem] max-w-[350px]'>
          <h2 className='text-[2.5rem] text-white font-semibold '>Up to 10% off Voucher</h2>
          <button className='text-white mt-[2rem] border-b-2 pb-1 cursor-pointer'> Shop Now</button>
        </div>
      </div> */}

      {/* <Slider {...settings} className='max-w-[990px] max-h-[350px] mx-auto mt-4'>
        <div className='w-full h-[350px] relative'>
          <img src="/images/hero-banner-image-2.png" alt="Slide 1" className='w-full h-[350px] object-cover' />
          <div className='absolute top-[5rem] left-[4rem] max-w-[350px]'>
            <h2 className='text-[2.5rem] text-white font-semibold '>Enhance Your Music Experience</h2>
            <button className='text-white mt-[2rem] border-b-2 pb-1 cursor-pointer'> Shop Now</button>
          </div>
        </div>
        <div className='w-full h-[350px] relative'>
          <img src="/images/hero-banner-image-4.png" alt="Slide 1" className='w-full h-[350px] object-cover' />
          <div className='absolute top-[5rem] left-[4rem] max-w-[350px]'>
            <h2 className='text-[2.3rem] text-white font-semibold '>Perfume GUCCI INTENSE OUD EDP</h2>
            <button className='text-white mt-[2rem] border-b-2 pb-1 cursor-pointer'> Shop Now</button>
          </div>
        </div>
      </Slider> */}
    </>
  );
};

export default Hero;
