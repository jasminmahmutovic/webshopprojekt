import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuNavbar from './components/MenuNavbar'

const showInDom = () => {
    
    return (
        <div>
           <MenuNavbar></MenuNavbar>
            <Outlet />
        </div>
    )
}

export default showInDom
