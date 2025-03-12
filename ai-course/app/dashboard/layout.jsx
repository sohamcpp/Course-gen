"use client"
import { UserCourseListContext } from '../_context/UserCourseListContext'
import Header from './_components/Header'
import Sidebar from './_components/sidebar'
import React, { useState } from 'react'



function DashboardLayout({ children }) {
    const [userCourseList,setUserCourseList]=useState([]);
    return (
        <UserCourseListContext.Provider value={{userCourseList,setUserCourseList}}>
        <div>
            <div className='md:w-64 hidden md:block'>
                <Sidebar />
            </div>
            <div className='md:ml-64 p-10'>
                <Header />
                <div className='pd-10'>
                    {children}
                </div>

            </div>

        </div>
        </UserCourseListContext.Provider>
    )
}

export default DashboardLayout