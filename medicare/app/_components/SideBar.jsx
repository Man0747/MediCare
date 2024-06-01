"use client"
import { ChevronDown, ChevronLeft, LayoutDashboard } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function SideBar() {
    const [open, setOpen] = useState(false)
    const [submenuOpen, setSubmenuOpen] = useState(false)

    const Menu = [
        { title: "Dashboard" },
        { title: "Patients" },
        { title: "Media", spacing: true },
        {
            title: "Projects",
            submenu: true,
            submenuItems: [
                { title: "Project 1" },
                { title: "Project 2" },
                { title: "Project 3" },
            ]
        },
        { title: "Reports", spacing: true },
        { title: "Settings" },
    ]

    return (
        <div className={`transition-all duration-300 h-screen bg-[#F1F2F4] relative ${open ? "w-64" : "w-[76px]"}`}>
            <div className={`absolute cursor-pointer -right-3.5 top-5 w-7 border-2 bg-white border-[#C7C7C7] rounded-full ${!open && "rotate-180"}`} onClick={() => setOpen(!open)}>
                <ChevronLeft />
            </div>
            <div className='pl-4 pt-3 flex gap-2 items-center'>
                <Image src="/MediCareLogo.png" alt="doctor" height={40} width={40} className="rounded-full" />
                <h1 className={`text-primary origin-left font-bold text-3xl ${!open && "scale-0"}`}>MediCare</h1>
            </div>
            <ul className={`pt-2 pl-4 pr-2 ${!open && "pr-5"} `}>
                {Menu.map((menu, index) => (
                    <div key={index}>
                        <li className={`text-primary text-sm flex items-center gap-x-3 cursor-pointer p-2 hover:bg-[#E3E7FC] hover:text-[#415BE7] rounded-md ${menu.spacing ? "mt-9" : "mt-2"} relative group`}>
                            <span className='text-2xl block float-left'><LayoutDashboard /></span>
                            <span className={`text-base font-medium flex-1 ${!open && "hidden group-hover:block absolute text-primary left-20 bg-white shadow-lg p-2 rounded-md z-10"}`}>{menu.title}</span>
                            {menu.submenu && (
                                <ChevronDown className={`${!open && "scale-0"} ${submenuOpen && "rotate-180"}`} onClick={() => setSubmenuOpen(!submenuOpen)} />
                            )}
                        </li>
                        {menu.submenu && submenuOpen && open && (
                            <ul>
                                {menu.submenuItems.map((submenuItem, subIndex) => (
                                    <li key={subIndex} className={`text-primary text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#E3E7FC] hover:text-[#415BE7] rounded-md px-5 `}>
                                        {submenuItem.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default SideBar
