import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div>
        <Link className='text-3xl text-black' href={'/'}>Home</Link>
        <h1 className='text-6xl text-white bg-indigo-800 text-center'>Welcome!</h1>
      
    </div>
  )
}

export default Menu
