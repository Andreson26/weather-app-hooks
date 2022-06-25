import React from 'react'

function TopButtons({setQuery}) {
    const cities = [
        {
            id: 1,
            title: "Charlotte",
        },
        {
            id: 2,
            title: "Boston",
        },
        {
            id: 1,
            title: "New York",
        },
        {
            id: 1,
            title: "Chicago",
        },
        {
            id: 1,
            title: "Houston",
        }
    ]
  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city, id) => (
            <button
                key={id}
                className="text-white text-lg font-medium"
                onClick={() => setQuery({q: city.title})}
            >  
                {city.title}  
            </button>
        ))}
    </div>
  )
}

export default TopButtons