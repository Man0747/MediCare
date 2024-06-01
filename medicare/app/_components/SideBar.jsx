"use client"
import { MenuHandler } from '@material-tailwind/react'
import { ArrowBigLeft, ChevronDown, ChevronLeft, LayoutDashboard } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

function SideBar() {
    const [open, setOpen] = useState(false)
    const[submenuOpen,setSubmenuOpen]= useState(false)
    const Menu = [
      { title: "Dashboard" },
      { title: "Patients" },
      { title: "Media",spacing: true },
      { title: "Projects",
        submenu: true,
        submenuItems: [
          { title: "Dashboard" },
          { title: "Dashboard" },
          { title: "Dashboard" },
        ]
      },
      { title: "Dashboard",spacing: true },
      { title: "Dashboard" },
    ]
    return (
      <>
        <div className={`${open ? "w-72" : "w-[76px]"} duration-300 h-screen bg-[#F1F2F4] relative`}>
          <div className={`absolute cursor-pointer -right-3.5 top-5 w-7 border-2 bg-white border-[#C7C7C7] rounded-full ${!open && "rotate-180 "}`} onClick={() => setOpen(!open)}>
            <ChevronLeft />
          </div>
          <div className='pl-4 pt-3 flex gap-2 items-center'>
            <Image src="/MediCareLogo.png" alt="doctor" height={40} width={40} className="rounded-full" />
            <h1 className={`text-primary origin-left font-bold text-3xl ${!open && "scale-0"}`}>MediCare</h1>
          </div>
          <ul className='pt-2 pl-4'>
            {Menu.map((menu, index) => (
              <>
                <li key={index} className={`text-primary text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#E3E7FC] hover:text-[#415BE7] rounded-md ${menu.spacing ? "mt-9" : "mt-2"}`}>
                  <span className='text-2xl block float-left'><LayoutDashboard /></span>
                  <span className={`text-base font-medium flex-1 ${!open && "hidden"}`}>{menu.title}</span>
                  {menu.submenu && (<ChevronDown className={`${!open && "scale-0" } ${submenuOpen && "rotate-180"}`} onClick={()=> setSubmenuOpen(!submenuOpen)} />)}
                </li>
                {menu.submenu && submenuOpen && open &&(
                  <ul>
                    {menu.submenuItems.map((submenuItem,index) => (
                      <li key={index} className={`text-primary text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#E3E7FC] hover:text-[#415BE7] rounded-md px-5`}>
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
      </>
    )
}

export default SideBar
// import React from 'react';

// const Sidebar = () => {
//   return (
//     <div className="flex flex-col h-screen w-20 bg-gray-100 hover:w-64 transition-all duration-300">
//       <div className="flex items-center justify-center h-16">
//         <img src="/path/to/icon.png" alt="icon" className="h-10 w-10" />
//       </div>
//       <div className="flex flex-col p-2 space-y-2">
//         <div className="relative group">
//           <div className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
//             <span className="ml-2">Tasks</span>
//           </div>
//           <div className="absolute left-20 top-0 w-40 bg-white shadow-lg hidden group-hover:block">
//             <div className="p-2 hover:bg-gray-200">Task 1</div>
//             <div className="p-2 hover:bg-gray-200">Task 2</div>
//             <div className="relative group">
//               <div className="p-2 hover:bg-gray-200">
//                 Subtasks
//                 <span className="ml-1">▶</span>
//               </div>
//               <div className="absolute left-40 top-0 w-40 bg-white shadow-lg hidden group-hover:block">
//                 <div className="p-2 hover:bg-gray-200">Subtask 1</div>
//                 <div className="p-2 hover:bg-gray-200">Subtask 2</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
