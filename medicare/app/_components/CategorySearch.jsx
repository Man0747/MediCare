"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import axios from 'axios';
import { Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function CategorySearch() {

  
    const [specialities, setSpecialities] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/speciality');
          setSpecialities(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  

    return (
      <div className='mb-10 flex flex-col items-center gap-4'>
        <h2 className='font-bold text-4xl tracking-wide'>Search <span className='text-blue-600'>Doctors</span></h2>
        <h2 className='text-gray-500'>Search for your Doctors and Book Appointments in one click</h2>
        <div className="flex items-center gap-4" >
          <Input type='text' placeholder='Search...' />
          <Button type='submit'><Search className='h-4 w-4 mr-2' />Search</Button>
        </div>
        {/* Display List of Category */}
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {specialities.length > 0 ? 
            specialities.map((speciality, index) => index < 6 && (
              <Link href={'/search/'+speciality.speciality_Name} key={index}
                className="flex flex-col text-center gap-2 p-5 bg-blue-50 m-2 items-center rounded-lg hover:scale-110 transition-all ease-in-out cursor-pointer mt-5"
              >
                <Image
                  src={`/specialities/${speciality.speciality_ImageName}`}
                  alt="icon"
                  width={40}
                  height={40}
                />
                
                
                <label className="text-blue-700 font-bold text-sm">
                  {speciality.speciality_Name}
                </label>
              </Link>
            ))
          :
          [1,2,3,4,5,6].map((index) => (
            <div key={index} className='mt-5 mr-4 w-[155px] h-[110px] bg-gray-200 animate-pulse rounded-lg'></div>
          ))}
        </div>
      </div>
    );
  
}

export default CategorySearch;
