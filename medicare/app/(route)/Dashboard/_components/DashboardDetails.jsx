"use client";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays } from "lucide-react";
import moment from "moment";
import React, { useState } from "react";
import PatientList from "./PatientList";
import VerticalCalendar from "./VerticalCalendar";
function DashboardDetails() {
  const [date, setDate] = useState(new Date());
  const isPastDay = (day) => {
    return day <= new Date();
  };
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-4 p-4">
        <div className="flex flex-col gap-3 items-baseline">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={isPastDay}
            className="rounded-md border"
          />
        </div>
        {/* <div className="App text-center mt-10">
      <h1 className="text-white text-2xl">Upcoming Appointments</h1>
      <VerticalCalendar></VerticalCalendar>
    </div> */}
    <div className="min-h-screen bg-gray-900 text-white">
      <VerticalCalendar onDateSelect={setSelectedDate} />
      <PatientList date={selectedDate} />
    </div>
       
      </div>
    </>
  );
}

export default DashboardDetails;
