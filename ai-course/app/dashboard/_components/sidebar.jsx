"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import { HiHome, HiMiniCircleStack, HiMiniShieldCheck, HiOutlinePower } from "react-icons/hi2";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Progress } from "@/components/ui/progress"
import { UserCourseListContext } from '@/app/_context/UserCourseListContext';


function Sidebar() {
    const {userCourseList,setUserCourseList}=useContext(UserCourseListContext);
    const Menu = [
        {
            id: 1,
            name: 'Home',
            icon: <HiHome />,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Explore',
            icon: <HiMiniCircleStack />,
            path: '/dashboard/explore'
        },
        // {
        //     id: 3,
        //     name: 'Upgrade',
        //     icon: <HiMiniShieldCheck />,
        //     path: '/dashboard/upgrade'
        // },
        // {
        //     id: 4,
        //     name: 'Logout',
        //     icon: <HiOutlinePower />,
        //     path: '/dashboard/logout'
        // }
    ]
    const path = usePathname();
    return (
        <div className='fixed h-full md:w-64 p-5 shadow-md'>
            <Image src={'/next.svg'} width={160} height={100} />
            <hr className='my-5' />
            <ul>
                {Menu.map((item, index) => (
                    <Link href={item.path}>
                        <div className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-3 ${item.path == path && 'bg-gray-100 text-black'}`}>
                            <div className='text-2xl'>{item.icon}</div>
                            <h2>{item.name}</h2>
                        </div>
                    </Link>
                ))}
            </ul>
            <div className='absolute bottom-10 w-[80%]'>
                <Progress value={(userCourseList?.length/5)*100}/>
                <h2 className='text-sm my-2'>{userCourseList?.length} out of 5 courses created</h2>
            </div>
        </div>
    )
}

export default Sidebar