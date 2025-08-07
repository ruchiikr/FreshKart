import React from 'react';
import { assets } from '../assets/assets';
import { Link } from "react-router-dom";

const MainBanner = () => {
  return (
    <div className='relative z-0'>
      {/* Background Images */}
      <img src={assets.main_banner_bg} alt="banner" className='hidden md:block relative' />
      <img src={assets.main_banner_bg_sm} alt="banner" className='w-full md:hidden relative' />

      {/* Content Container */}
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end text-center md:text-left px-4 md:pl-18 lg:pl-24 pb-24 md:justify-center md:pb-0 gap-6'>

        
        {/* Heading */}
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15'>
          Delivering Freshness to Your Doorstep.
        </h1>

        {/* Buttons */}
        <div className='flex flex-col md:flex-row items-center gap-4 font-medium'>
          <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
            Shop Now
            <img className='md:hidden transition group-focus:translate-x-1' src={assets.white_arrow_icon} alt="arrow" />
          </Link>
          <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'>
            Explore Deals
            <img className='transition group-hover:translate-x-1' src={assets.black_arrow_icon} alt="arrow" />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default MainBanner;
