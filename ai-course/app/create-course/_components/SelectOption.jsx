import React, { useContext } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Input} from '@/components/ui/input'
import { UserInputContext } from '@/app/_context/UserInputContext'

function SelectOption() {
    const {useCourseInput,setuseCourseInput}=useContext(UserInputContext)
    const handleInputChange=(fieldName,value)=>{
        setuseCourseInput(prev=>({
            ...prev,
            [fieldName]:value
        }))
    }
    return (
        <div className='px-10 md:px-20 lg:px-44'>
            <div className='grid grid-cols-2 gap-10'>
                <div>
                    <label className='text-sm'>Difficulty Level</label>
                    <Select onValueChange={(value)=>handleInputChange('level',value)}
                        defaultValue={useCourseInput?.level}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Beginner">Beginner</SelectItem>
                            <SelectItem value="Intermediate">Intermediate</SelectItem>
                            <SelectItem value="Advance">Advance</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>Course Duration</label>
                    <Select onValueChange={(value)=>handleInputChange('duration',value)}
                        defaultValue={useCourseInput?.duration}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1 Hour">1 Hour</SelectItem>
                            <SelectItem value="2 Hour">2 Hour</SelectItem>
                            <SelectItem value="3 Hour">3 Hour</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>Display Video</label>
                    <Select onValueChange={(value)=>handleInputChange('video',value)}
                        defaultValue={useCourseInput?.video}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className='text-sm'>No of chapters</label>
                    <Input type="number"
                    defaultValue={useCourseInput?.chapters}
                    onChange={(event)=>handleInputChange('chapters',event.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectOption