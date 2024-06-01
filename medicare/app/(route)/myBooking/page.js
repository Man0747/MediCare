"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingList from './_components/BookingList';

function MyBooking() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/appointments');
        setAppointments(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className='px-4 sm:px-10 mt-10'>
        <h2 className='font-bold text-2xl'>MyBooking</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className='w-full justify-start'>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              <BookingList expired={false} appointments={appointments.filter(appointment => new Date(appointment.appointment_Date) >= new Date())} />
            </TabsContent>
            <TabsContent value="expired">
              <BookingList expired={true} appointments={appointments.filter(appointment => new Date(appointment.appointment_Date) < new Date())} />
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
}

export default MyBooking;
