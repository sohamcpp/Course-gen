"use client"
import { db } from '@/configs/db'
import { Chapters, CourseList } from '@/configs/schema'
import { and, eq } from 'drizzle-orm';
import { index } from 'drizzle-orm/mysql-core';
import React, { useEffect, useState } from 'react'
import ChapterListCard from './_components/ChapterListCard';
import ChapterContent from './_components/ChapterContent';

function CourseStart({params}) {
    useEffect(()=>{
        GetCourse();
    },[])
    const [course,setCourse]=useState();
    const [selectedChapter,setSelectedChapter]=useState();
    const [chapterContent,setChapterContent]=useState()
    const GetCourse=async()=>{
        const result=await db.select().from(CourseList).where(eq(CourseList?.courseId,params?.courseId));
        GetSelectedChapterContent(0)
        setCourse(result[0]);
    }
    const GetSelectedChapterContent=async(chapterId)=>{
        const result=await db.select().from(Chapters).where(and(eq(Chapters.chapterId,chapterId),eq(Chapters.courseId,course?.courseId)))
        setChapterContent(result[0])
        console.log(result)
    }   
  return (
    <div>
        <div className='fixed md:w-64 hidden md:block h-screen border-r shadow-sm'>
            <h2 className='font-medium text-lg bg-primary p-3 text-white'>{course?.courseOutput?.course?.name}</h2>
            <div>
                {course?.courseOutput?.course?.chapters.map((chapter,index)=>(
                    <div key={index} className={`cursor-pointer hover:bg-purple-50
                        ${selectedChapter?.name==chapter?.name&&'bg-purple-100'}`} 
                    onClick={()=>{setSelectedChapter(chapter)
                        GetSelectedChapterContent(index)
                    }}>
                        <ChapterListCard chapter={chapter} index={index}/>
                    </div>
                ))}
            </div>
        </div>
        <div className='md:ml-64'>
                <ChapterContent chapter={selectedChapter} content={chapterContent}/>
        </div>
    </div>
  )
}

export default CourseStart