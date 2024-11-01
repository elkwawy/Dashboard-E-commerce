import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const RootLayout = () => {
    const [sidebar, setSidebar] = useState(false);
    const openSidebar  = () => setSidebar(true) ;
    const closeSidebar  = () => setSidebar(false) ;
    return (
        <div className='w-full flex '>
            <Sidebar sidebar={sidebar} closeSidebar={closeSidebar} />
            <div className='flex w-full flex-col gap-20'>
                <Navbar sidebar={sidebar} openSidebar={openSidebar} />
                {/* whatever put in the App Router comes here  */}
                <div className='px-5'>
                    <Outlet /> 
                </div>
            </div>
        </div>
        
    )
}

export default RootLayout