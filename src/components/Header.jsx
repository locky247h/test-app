import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='w-full h-16 bg-black flex justify-between items-center px-4'>
      <Link to="/" className='text-white mr-4'>
        Blog
      </Link>
      <Link to="/contact" className='text-white'>
        お問い合わせ
      </Link>
    </header>
  )
};