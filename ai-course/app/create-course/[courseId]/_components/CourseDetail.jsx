import React from 'react'
import { HiChartBar,HiClock,HiBookOpen,HiOutlineVideoCamera } from "react-icons/hi";

function CourseDetail({ course }) {
    return (
        <div className='border p-6 rounded-xl shadow-sm mt-3'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
            <div className='flex gap-2'>
                <HiChartBar className='text-4xl text-primary' />
                <div>
                    <h2 className='text-xs text-gray-500'>Skill Level</h2>
                    <h2 className='font-medium text-lg'>{course?.level}</h2>
                </div>
            </div>
            <div className='flex gap-2'>
                <HiClock className='text-4xl text-primary' />
                <div>
                    <h2 className='text-xs text-gray-500'>Duration</h2>
                    <h2 className='font-medium text-lg'>{course?.courseOutput?.course?.duration}</h2>
                </div>
            </div>
            <div className='flex gap-2'>
                <HiBookOpen className='text-4xl text-primary' />
                <div>
                    <h2 className='text-xs text-gray-500'>No of chapters</h2>
                    <h2 className='font-medium text-lg'>{course?.courseOutput?.course?.noOfChapters}</h2>
                </div>
            </div>
            <div className='flex gap-2'>
                <HiOutlineVideoCamera className='text-4xl text-primary' />
                <div>
                    <h2 className='text-xs text-gray-500'>Video Included?</h2>
                    <h2 className='font-medium text-lg'>{course?.includeVideo}</h2>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default CourseDetail