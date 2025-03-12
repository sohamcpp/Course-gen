"use client"
import React,{useState} from 'react'
import Header from '../dashboard/_components/Header'
import {UserInputContext} from '../_context/UserInputContext'

function CreateCourseLayout({ children }) {
    const [useCourseInput,setuseCourseInput]=useState([]);
    return (
        <div>
            <UserInputContext.Provider value={{useCourseInput,setuseCourseInput}}>
                <>
            <Header />
            {children}
            </>
            </UserInputContext.Provider>
            </div>
    )
}

export default CreateCourseLayout