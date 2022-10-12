import React from 'react'

export const Header = () => {
  return (
    <section className='flex justify-between ml-24 mr-28 my-6'>
        <div className=''>
            <h3 className='font-bold text-4xl text-primary leading-10 font-Open-sans'>Dealerz.</h3>
        </div>
        <div className='flex items-center'>
            <div className='flex mr-9 items-center'>
                <img src="../../src/assets/phone.svg" className='w-5 h-5 mr-2.5'></img>
                <span>Call Center</span>
            </div>
            <div className='flex items-center'>
                <img src="../../src/assets/truck-delivery.svg" className='w-5 h-5 mr-2.5'></img>
                <span>Shipping & Returns</span>
            </div>
        </div>
    </section>
  )
}
