"use client";
import moment from "moment";
import React, { useState } from "react";
import PatientList from "./PatientList";
import VerticalCalendar from "./VerticalCalendar";

function DashboardDetails() {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));

  return (
    <>
      <div className="grid grid-cols-2 p-4">
        <div className="min-h-screen">
          <VerticalCalendar onDateSelect={setSelectedDate} />
          <PatientList date={selectedDate} />
        </div>
      </div>
    </>
  );
}

export default DashboardDetails;
