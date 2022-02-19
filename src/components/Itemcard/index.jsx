import React, { useState } from 'react'
import { FaCheck, FaStar } from 'react-icons/fa'

const ItemCard = ({
  isMostPopular,
  pack,
  tubes,
  savings,
  savedInPercentage,
  prevPrice,
  currPrice,
}) => {
  const [isSelected, setIsSelected] = useState(false)
  return (
    <div className='flex items-center justify-between gap-3'>
      <div
        className={`${
          !isSelected ? 'bg-lightGray-900' : 'bg-lightGray-400'
        } px-4 py-3 mt-5 rounded-lg flex-grow`}
        onClick={() => setIsSelected(!isSelected)}
      >
        {isMostPopular ? (
          <div className='bg-lightBlue-400 flex items-center gap-[2px] w-fit text-white text-[6px] leading-3 px-1 rounded-full mb-2'>
            <FaStar />
            <span className='uppercase'>Most Popular</span>
            <FaStar />
          </div>
        ) : null}
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='text-base text-white font-bold font-dmSans '>
              {pack} Months Pack ({tubes} tubes)
            </h2>
            <p
              className={`text-[12px] leading-loose ${
                !isSelected ? 'text-lightGray-500' : 'text-lightGray-800'
              }  font-normal font-belgrano`}
            >
              Savings: &#8377;{savings}
            </p>
            <div className='flex items-center gap-2 text-[12px] leading-4 font-bold font-dmSans mt-2'>
              <p className='text-lightGreen-400'>{savedInPercentage} Saved</p>
              {isMostPopular ? (
                <a href='/' className='text-lightOrange'>
                  Best Results
                </a>
              ) : null}
            </div>
          </div>
          <div className='flex flex-col text-xl leading-7 font-bold font-serifDisplay'>
            <p className=' text-white '>&#8377;{currPrice}</p>
            <p
              className={`${
                !isSelected ? 'text-lightGray-600' : 'text-lightGray-800'
              } line-through`}
            >
              &#8377;{prevPrice}
            </p>
          </div>
        </div>
      </div>
      <div
        className={`${
          isSelected ? 'visible' : 'invisible'
        } text-white text-base`}
      >
        <FaCheck />
      </div>
    </div>
  )
}

export default ItemCard
