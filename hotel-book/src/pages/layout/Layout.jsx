import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='layout'>

            <div className='content'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout