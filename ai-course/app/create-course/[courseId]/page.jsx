'use client';
import { db } from '@/configs/db';
import { Chapters, CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import CourseBasicInfo from './_components/CourseBasicInfo';
import CourseDetail from './_components/CourseDetail';
import ChapterList from './_components/ChapterList';
import { Button } from '@/components/ui/button';
import { GenerateChapterContent_AI } from '@/configs/AiModel';
import LoadingDialog from '../_components/LoadingDialog';
import service from '@/configs/service';
import { useRouter } from 'next/navigation';

function CourseLayout({ params }) {
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    params && GetCourse();
  }, [params, user]);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, params?.courseId),
          eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    setCourse(result[0]);
  };

  const GenerateChapterContent = async () => {
    setLoading(true);
    const chapters = course?.courseOutput?.course?.chapters;

    chapters.forEach(async(chapter,index)=> {
      //const chapter = chapters[index];
      const PROMPT = `Explain the concept in Detail on Topic:${course?.name},Chapter:${chapter?.name}, in JSON Format with list of array with field as title,description in detail, Code Example(Code field in <precode> format) if applicable`;
      console.log(PROMPT);
      // if (index < 3) {
        try {
          // Await the video ID fetching
          const videoResponse = await service.getVideo(`${course?.name}:${chapter?.name}`);
          const videoId = videoResponse[0]?.id?.videoId || ''; // Handle potential undefined values
          console.log(`from page.jsx ${videoId}`);
          console.log(`chapters index ${index}`);
          console.log(`chapters name ${chapter?.name}`);

          // Generate chapter content with AI
          const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
          const content = JSON.parse(await result?.response?.text());

          // Insert the chapter content into the database
          await db.insert(Chapters).values({
            chapterId: index,
            courseId: course?.courseId,
            content: content,
            videoId: videoId,
          });
        } catch (e) {
          setLoading(false);
          console.log(e);
        }
      }
    )
    
    router.replace('/create-course/' + course?.courseId + '/finish');
  };

  return (
    <div className='mt-10 px-7 md:px-20 lg:px-44'>
      <h2 className='font-bold text-center text-2xl'>Course Layout</h2>
      <LoadingDialog loading={loading} />
      <CourseBasicInfo course={course} refreshData={() => GetCourse()} />
      <CourseDetail course={course} />
      <ChapterList course={course} refreshData={() => GetCourse()} />
      <Button onClick={GenerateChapterContent} className='my-10'>
        Generate Content
      </Button>
    </div>
  );
}

export default CourseLayout;
