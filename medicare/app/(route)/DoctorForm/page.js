"use client"

import withAuth from '@/app/Services/withAuth';
import React from 'react'
import DoctorDataForm from './_components/DoctorDataForm'

function DoctorForm() {
  return (
    <div>
      <DoctorDataForm></DoctorDataForm>
    </div>
  )
}


export default withAuth(DoctorForm, ['ROLE_DOCTOR']);
