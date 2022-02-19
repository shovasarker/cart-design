import React from 'react'
import hamburger from '../images/hamburger.svg'
import cart from '../images/cart.svg'

const Header = () => {
  return (
    <div className='px-7'>
      <div className='flex justify-between items-center py-6'>
        <button className='h-6 w-6'>
          <img src={hamburger} alt='hamburger icon' className='w-full' />
        </button>
        <button className='h-6 w-6'>
          <img src={cart} alt='cart icon' className='w-full' />
        </button>
      </div>
      <div className='border-t border-t-borderColor'></div>
    </div>
  )
}

export default Header
