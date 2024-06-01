import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div>
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="/Doctors3.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Find & Book <span className='text-blue-900'>Appointments</span> with our <span className='text-blue-900'>Doctors</span></h2>

        <p className="mt-4 text-gray-600">
        Experience seamless appointment scheduling with MediCare. Find your preferred doctor, choose a convenient time, and book your appointment effortlessly. Empower your health journey today.
        </p>

        <Link href='/search'>
        <Button className='mt-8'>
          Book Now
        </Button>
        
        </Link>

      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero
