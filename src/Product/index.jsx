import React from 'react'
import { FaArrowRight, FaStar, FaStarHalf } from 'react-icons/fa'
import banner from '../images/banner.svg'
const Product = () => {
  const stars = [FaStar, FaStar, FaStar, FaStar]
  return (
    <div className='flex flex-col px-7 mt-8'>
      <div>
        <img src={banner} alt='banner' className='w-full object-cover' />
      </div>
      <h1 className='text-[32px] leading-[44px] font-bold font-dmSans text-white mt-20'>
        Everyday rinse and reload
      </h1>
      <p className='text-xs leading-[24px] text-lightGray-200 font-normal font-belgrano mt-3.5'>
        Achieve your dream skin goal with this complete package of skincare
        products that will rejuvenate your day.
      </p>
      <div className='flex items-center gap-2.5 text-white mt-3.5'>
        <div className='flex items-center gap-[2px] bg-lightGreen-600 text-[10px] px-2 py-1.5 rounded-[10px]'>
          {stars.map((item, i) => {
            return <FaStar key={i} />
          })}
          <FaStarHalf />
        </div>
        <span className='text-sm leading-4 font-bold font-montserrat text-white'>
          4.5
        </span>
        <a
          href='/'
          className='flex items-center gap-1 text-[10px] text-lightGray-700 font-bold font-dmSans'
        >
          Click to read reviews
          <FaArrowRight className='text-[8px]' />
        </a>
      </div>
      <div className='flex items-center gap-6 text-[32px] leading-10  font-montserrat mt-9'>
        <span className='text-white font-bold'>&#8377;899</span>
        <span className='line-through text-lightGray-300 font-medium '>
          &#8377;1299
        </span>
      </div>
    </div>
  )
}
export default Product
