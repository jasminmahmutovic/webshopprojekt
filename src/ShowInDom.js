import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuNavbar from './components/MenuNavbar'
import Admin from './pages/admin'

const showInDom = () => {
    
    return (
        <div>
           <MenuNavbar></MenuNavbar>
            <Outlet />
            <Admin/>
        </div>
    )
}

export default showInDom
