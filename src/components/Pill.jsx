import React from 'react'

function Pill({ icon: Icon, label, value }) {
    return (
        <span className="border-gray-600 rounded-full border text-white px-3 py-0.5 my-2 mx-1 text-xs bg-[#111827] flex items-center">
            <Icon className="mr-1" /> {label}: {value}
        </span>
    )
}

export default Pill