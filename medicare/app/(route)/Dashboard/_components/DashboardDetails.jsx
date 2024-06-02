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
      <div className="grid grid-cols-2 p-4">
       
        <div className="min-h-screen ">
          <VerticalCalendar onDateSelect={setSelectedDate} />
          <PatientList date={selectedDate} />
        </div>
          
      </div>
    </>
  );
}

export default DashboardDetails;
