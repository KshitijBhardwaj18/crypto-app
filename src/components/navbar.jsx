import React from 'react'
import { LogoIcon } from '../icons/icon'

function Navbar() {
  return (
    <div className='bg-gray-800 text-white h-14 flex items-center'>
        <div className="wrapper-container w-full ">
          <div className="flex items-center gap-1 cursor-pointer">
            <LogoIcon/>
            <p className='font-bold'>CoinCheck</p>
          </div>

        </div>
    </div>
  )
}

export default Navbar