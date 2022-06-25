import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
import React, { useState } from 'react'
import {  toast } from 'react-toastify';


function Input({setQuery, units, setUnits}) {

    const [city, setCity] = useState("")

    const handleSearchClick = () => {
        if(city !== "") setQuery({q: city})
    }

    const handleLocationClick = () => {
        if(navigator.geolocation) {
            toast.info("fetching users location")
            navigator.geolocation.getCurrentPosition((position) => {
                toast.success("location fetched")
                let lat = position.coords.latitude;
                let lon = position.coords.longitude

                setQuery({lat, lon})
            })
        }
    }

    const handleUnitChange = (e) => {
        const selectedUnit = e.currentTarget.name
        if(units !== selectedUnit) setUnits(selectedUnit)
    }
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
                value={city}
                onChange={(e) => setCity(e.currentTarget.value)}
                type="text"
                placeholder='Search for your City...'
                className='text-xl font-light p-2 w-full shaddow-xl focus:outline-none capitalize placeholder:lowercase'
            />
            <UilSearch size={25} 
                className="text-white cursor-pointer transition ease-out hover:scale-125"
                onClick={handleSearchClick}
            />
            <UilLocationPoint  size={25}
                className="text-white cursor-pointer transition ease-out hover:scale-125"
                onClick={handleLocationClick}
            />
        </div>

        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name="metric"
                className="text-xl text-white font-light transition ease-out hover:scale-125"
                onClick={handleUnitChange}
            >
                °C
            </button>
            <p className='text-xl text-white mx-1'>/</p>
            <button name="imperial"
                className="text-xl text-white font-light transition ease-out hover:scale-125"
                onClick={handleUnitChange}
            >
                °F
            </button>
        </div>
    </div>
  )
}

export default Input