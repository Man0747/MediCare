"use client"
import { Calendar } from '@/components/ui/calendar'
import { CalendarDays } from 'lucide-react'
import React, { useState } from 'react'

function DashboardDetails() {

  const [date, setDate] = useState(new Date());
  const isPastDay = (day) => {
    return day <= new Date();
  };

  return (
    <div className='p-7 text-2xl font-bold'>
      <div className='flex flex-col gap-3 items items-baseline'>
                  {/* <h2 className='flex gap-2 items-center'>
                    <CalendarDays className='text-blue-500 h-5 w-5' />
                    Select Date
                  </h2> */}
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDay}
                    className="rounded-md border"
                  />
                </div>
    </div>
  )
}

export default DashboardDetails
