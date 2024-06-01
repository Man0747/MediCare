import { Button } from '@/components/ui/button'
import { Link2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
    const Menu =[
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'Doctors',
            path:'/search'
        },
        {
            id:3,
            name:'MyBooking',
            path:'/myBooking'
        },   
    ]
  return (
    <div className='flex items-center justify-between p-4 shadow-md h-[65px]'>
       
        <span className='p-4 text-2xl font-bold'>DashBoard</span>
       
        {/* <ul className='md:flex gap-8 hidden'>
            {Menu.map((item,index)=>(
                <Link href={item.path}>
                <li className='text-blue-950 hover:text-blue-600 cursor-pointer hover:scale-105 transition-all ease-in-out'>{item.name}</li>
                </Link>
            ))}
        </ul>  */}
        
        {/* <Link href='/search'>
        <Button className='bg-blue-500 '>Book Now
        </Button>
        </Link> */}
    </div>
  )
}

export default Header
