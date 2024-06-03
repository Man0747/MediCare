import React from 'react';

const DoctorInfo = () => {
  return (
    <div>
      <div className="mb-6">
        {/* Photo upload */}
        <div className="flex items-center justify-center mb-4">
          <img src="/mnt/data/image.png" alt="Staff" className="w-16 h-16 rounded-full mr-4" />
          <div>
            <button className="text-blue-500 mr-2">Upload Photo</button>
            <button className="text-red-500">Delete</button>
            <p className="text-xs text-gray-500">An image of the person, it’s best if it has the same length and height</p>
          </div>
        </div>
      </div>

      {/* Form fields */}
      <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
              Type
            </label>
            <div className="flex items-center">
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  name="type"
                  className="hidden"
                  value="fulltime"
                  defaultChecked
                />
                <span className="inline-flex items-center px-3 py-2 hover:border-blue-600 border border-gray-300 rounded-md cursor-pointer">
                  Full time
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  className="hidden"
                  value="parttime"
                />
                <span className="inline-flex items-center px-3 py-2 hover:border-blue-600 bg-white border border-gray-300 rounded-md cursor-pointer">
                  Part-Time
                </span>
              </label>
            </div>
          
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Darrel Stuwert"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="specialist">
          Specialist
        </label>
        <select
          id="specialist"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Pediatric Dentistry">Pediatric Dentistry</option>
          <option value="Orthodontics">Orthodontics</option>
          <option value="Oral Surgery">Oral Surgery</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="808 555-0111"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="darrelstuwert@gmail.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
        <input
          id="address"
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="North Arizona, AZ 32 TH"
        />
      </div>
    </div>
  );
};

export default DoctorInfo;