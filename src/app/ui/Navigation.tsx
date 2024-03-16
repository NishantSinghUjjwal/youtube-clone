'use client'
import React, { ReactNode, useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Navigation = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(true)
    const toggle = () => {
        setOpen(prev => !prev)
    }
    return (<>
        <Navbar toggle={toggle} />
        <div className=" flex">
            {<Sidebar open={open} />}
            {children}
        </div>
    </>
    )
}

export default Navigation