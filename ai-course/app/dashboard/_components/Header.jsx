import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='flex justify-between items-center p-3 shadow-sm'>
        <Image src={'/next.svg'} width={50} height={50}/>
        <UserButton/>
    </div>
  )
}

export default Header