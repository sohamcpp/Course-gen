"use client"
import React, { useState,useContext, useEffect } from 'react'
import { HiMiniSquares2X2, HiLightBulb, HiClipboardDocumentCheck } from "react-icons/hi2";
import { Button } from '@/components/ui/button';
import SelectCategory from './_components/SelectCategory';
import Topic from './_components/Topic';
import SelectOption from './_components/SelectOption';
import { UserInputContext } from '@/app/_context/UserInputContext'
import { GenerateCourseLayout_AI } from '@/configs/AiModel';
import LoadingDialog from './_components/LoadingDialog';
import { db } from '@/configs/db';
import { CourseList } from '@/configs/schema';
import uuid4 from 'uuid4';
import { useUser } from '@clerk/nextjs';
import { UserProfile } from '@clerk/clerk-react';
import { useRouter } from 'next/navigation';

function CreateCourse() {
    const StepperOptions = [
        {
            id: 1,
            name: 'Category',
            icon: <HiMiniSquares2X2 />
        },
        {
            id: 2,
            name: 'Topics',
            icon: <HiLightBulb />
        },
        {
            id: 3,
            name: 'Options',
            icon: <HiClipboardDocumentCheck />
        }
    ]

    const {useCourseInput,setuseCourseInput}=useContext(UserInputContext)
    const [loading,setLoading]=useState(false)
    const [activeIndex, setActiveIndex] = useState(0);
    const{user}=useUser();
    const router=useRouter();

    useEffect(()=>{
        console.log(useCourseInput)
    },[useCourseInput])


    const GenerateCourseLayout=async()=>{
        setLoading(true)
        const BASIC_PROMPT='Generate A Course Tutorial on Following Detail with field as Course Name,Description,Along with Chaper Name,about,Duration: '
        const USER_INPUT_PROMPT='Category:'+useCourseInput?.category+',Topic:'+useCourseInput?.topic+',Level:'+useCourseInput?.level+',Duration:'+useCourseInput?.duration+',NoOf Chapters:'+useCourseInput?.chapters+', in JSON format'
        const FINAL_PRMOPT=BASIC_PROMPT+USER_INPUT_PROMPT;
        console.log(FINAL_PRMOPT)
        const result=await GenerateCourseLayout_AI.sendMessage(FINAL_PRMOPT)
        console.log(result.response?.text())
        console.log(JSON.parse(result.response?.text()))
        setLoading(false)
        SaveCurseLayoutInDb(JSON.parse(result.response?.text()))
    }
    const SaveCurseLayoutInDb=async(courseLayout)=>{
        var id = uuid4();
        setLoading(true)
        const result=await db.insert(CourseList).values({
            courseId:id,
            name:useCourseInput?.topic,
            level:useCourseInput?.level,
            category:useCourseInput?.category,
            courseOutput:courseLayout,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            userName:user?.fullName,
            userProfileImage:user?.imageUrl
        })
        console.log("finished")
        
        setLoading(false);
        router.replace('/create-course/'+id)
    }

    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-10'>
                <h2 className='text-4xl text-primary font-medium'>Create Course</h2>
                <div className='flex mt-10'>
                    {StepperOptions.map((item, index) => (
                        <div className='flex items-center'>
                            <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                                <div className={`bg-gray-200 p-3 rounded-full text-white
                                    ${activeIndex >= index && 'bg-primary-500'}`}>
                                    {item.icon}
                                </div>
                                <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                            </div>
                            {index != StepperOptions?.length - 1 &&
                                <div className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-200
                            ${activeIndex - 1 >= index && 'bg-purple-500'}
                            `}></div>}
                        </div>
                    ))}
                </div>
            </div>
            <div className='px-10 md:px-20 lg:px-44 mt-10'>
                {activeIndex==0?<SelectCategory/>:
                activeIndex==1?<Topic/>:
                <SelectOption/>}
                <div className='flex justify-between mt-10'>
                    <Button disabled={activeIndex == 0} 
                    variant='outline'
                    onClick={() => setActiveIndex(activeIndex - 1)}>Previous</Button>
                    {activeIndex<2&& <Button onClick={() => setActiveIndex(activeIndex + 1)}>Next</Button>}
                    {activeIndex==2&& <Button onClick={()=>GenerateCourseLayout()}>Generate Course Layout</Button>}
                </div>
            </div>
            <LoadingDialog loading={loading}/>
        </div>
    )
}

export default CreateCourse