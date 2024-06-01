"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import Link from 'next/link';

function Command({ specialities, category, searchTerm, handleSearch, handleItemClick, handleItemHover, hoveredItem }) {
    return (
        <div>
            <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} />
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full p-2 pl-10 bg-white text-gray-600"
                />
            </div>
            <ul className="overflow-visible">
                {specialities.length === 0 ? (
                    <li>No results found.</li>
                ) : (
                    specialities.map((speciality, index) => (
                        <li key={index}>
                            <Link href={'/search/'+speciality.speciality_Name} 
                                className={`p-2 flex gap-2 text-black text-[16px] items-center font-medium rounded-md cursor-pointer bg-white w-full ${category === speciality.speciality_Name ? 'bg-blue-200 text-black' : ''} ${hoveredItem === speciality.speciality_Name ? 'hover:bg-gray-200' : ''}`}
                                onClick={() => handleItemClick(speciality.speciality_Name)}
                                onMouseEnter={() => handleItemHover(speciality.speciality_Name)}
                                onMouseLeave={() => handleItemHover(null)}
                            >
                                <Image src={`/specialities/${speciality.speciality_ImageName}`} alt="icon" width={25} height={25} />
                                <label>{speciality.speciality_Name}</label>
                            </Link>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

function CategoryList() {
    const params = usePathname();
    console.log(params);
    const pathcategory = params.split('/')[2];
    console.log(pathcategory);
    const [specialities, setSpecialities] = useState([]);
    const [filteredSpecialities, setFilteredSpecialities] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [hoveredItem, setHoveredItem] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(pathcategory);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/speciality');
                setSpecialities(response.data);
                setFilteredSpecialities(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSearch = (value) => {
        setSearchTerm(value);
        const filtered = specialities.filter((speciality) =>
            speciality.speciality_Name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredSpecialities(filtered);
    };

    const handleItemClick = (itemName) => {
        // Handle item click here
        console.log('Item clicked:', itemName);
        setSelectedCategory(itemName); // Update selected category
    };

    const handleItemHover = (itemName) => {
        setHoveredItem(itemName);
    };

    return (
        <div className='h-screen fixed flex flex-col mt-5'>
            <Command
                specialities={filteredSpecialities}
                category={selectedCategory} // Pass selected category to the Command component
                searchTerm={searchTerm}
                handleSearch={handleSearch}
                handleItemClick={handleItemClick}
                handleItemHover={handleItemHover}
                hoveredItem={hoveredItem}
            />
        </div>
    );
}


export default CategoryList;
