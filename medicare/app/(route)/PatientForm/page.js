"use client"

import withAuth from '@/app/Services/withAuth'
import React from 'react'
import PatientDataForm from './_components/PatientDataForm'


const PatientForm = () => {
  return (
    <div>
      <PatientDataForm></PatientDataForm>
    </div>
  )
}
 
export default withAuth(PatientForm, ['ROLE_PATIENT']);
