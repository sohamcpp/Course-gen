import Image from 'next/image'
import React from 'react'
import {Button} from '@/components/ui/button'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-sm'>
        <Image src='/next.svg' width={100} height={100}></Image>
        <Button>Get started</Button>
    </div>
  )
}

export default Header