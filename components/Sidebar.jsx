import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FcHome } from 'react-icons/fc'
// import { RxSketchLogo } from 'react-icons/rx'
import { LuLayoutDashboard, LuListTree, LuGauge, LuSettings } from 'react-icons/lu'

function Sidebar({ children }) {
  return (
    <div className='flex'>
      <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between'>
        <div className='flex flex-col items-center'>
          <Link href='/'>
            <div className='bg-orange-400 p-3 rounded-lg inline-block'>
              <FcHome size={20} />
            </div>
          </Link>
          <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
          <Link href='/'>
            <div className='bg-orange-100 hover:bg-orange-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <LuLayoutDashboard size={20} />
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-orange-100 hover:bg-orange-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <LuListTree size={20} />
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-orange-100 hover:bg-orange-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <LuGauge size={20} />
            </div>
          </Link>
          <Link href='/'>
            <div className='bg-orange-100 hover:bg-orange-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <LuSettings size={20} />
            </div>
          </Link>
        </div>
      </div >
      <main className='ml-20 w-full'>{children}</main>
    </div>
  )
}

export default Sidebar