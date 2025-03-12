import React,{useContext} from 'react'
import {Input} from '@/components/ui/input'
import {Textarea} from '@/components/ui/textarea'
import { UserInputContext } from '@/app/_context/UserInputContext'

function Topic() {
    const {useCourseInput,setuseCourseInput}=useContext(UserInputContext)
    const handleInputChange=(fieldName,value)=>{
        setuseCourseInput(prev=>({
            ...prev,
            [fieldName]:value
        }))
    }
  return (
    <div className='mx-20 lg:mx-44'>
        <div className='mt-5'>
            <label>Write the topic for which you want to generate the course: </label>
            <Input placeholder={'Topic'}
            defaultValue={useCourseInput?.topic}
            onChange={(e)=>handleInputChange('topic',e.target.value)}
            />
        </div>
        <div className='mt-5'>
            <label>Tell us more about your course, what you want to include </label>
            <Textarea placeholder="Course Description"
            defaultValue={useCourseInput?.description}
            onChange={(e)=>handleInputChange('description',e.target.value)}
            />
        </div>
    </div>
  )
}

export default Topic