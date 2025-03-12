import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'
import { HiOutlinePuzzle } from "react-icons/hi";
import EditCourseBasicInfo from './EditCourseBasicInfo';
import Link from 'next/link';

function CourseBasicInfo({course,refreshData,edit=true}) {
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div>
                <h2 className='font-bold text-3xl'>{course?.courseOutput?.course?.name} 
                  {edit&&<EditCourseBasicInfo course={course} refreshData={()=>refreshData(true)}/>} </h2>
                <p className='text-s text-gray-800 mt-3'>{course?.courseOutput?.course?.description}</p>
                <h2 className='font-medium mt-2 flex gap-2 items-center text-primary'><HiOutlinePuzzle />{course?.category}</h2>
                {!edit &&<Link href={'/course/'+course?.courseId+'/start'}>
                <Button className='w-full mt-5'>Start</Button>
                </Link>}
            </div>
            <div>
            <Image src={'/image.png'} width={300} height={300} className='w-full rounded-xl h-[250px] object-cover'/>
            </div>
        </div>
        
    </div>
  )
}

export default CourseBasicInfo