import React from 'react'

function Card() {
  return (
    <>
      <div className='flex justify-center'>
        <div className=' dark:bg-gray-800 rounded-lg p-4 max-w-80 shadow-2xl'>
        <div><img src="https://images.pexels.com/photos/27514901/pexels-photo-27514901/free-photo-of-woman-in-hat-sitting-with-hand-on-cheek.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='h-56 w-full' /></div>
        <p className='dark:text-white text-black'><b>Lorem ipsum dolor sit amet consectetur adipisicing.</b></p>
        <div className='flex justify-between mt-3'>
          <div className='dark:text-white text-black'>599 rupees</div>
          <div><button className='bg-sky-700 text-white rounded-md p-2 shadow-xl'>Add to cart</button></div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Card
