"use client";
import DoctorList from '@/app/_components/DoctorList';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CategoryList from './_components/CategoryList'


function layout({children}) {
  
  return (
    <div className='grid grid-cols-4'>
      <div>
        <CategoryList ></CategoryList>
      </div>
      <div className='col-span-3'>
      {children}
      </div>
    </div>
  )
}

export default layout
