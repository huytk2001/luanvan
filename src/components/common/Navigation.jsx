import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart';
import User from './User';

export default function Navigation() {
  return (
    <>
      <div className='h-[50px] flex justify-end items-center gap-[12px] text-[20px] text-grayDark'>
        <Link>
          <i className="fa-solid fa-phone"></i>
        </Link>
        |
        <Link>
          <i className="fa-solid fa-heart"></i>
        </Link>
        |
        <Cart />
        |
        <User />
      </div>
    </>
  )
}
