import React from 'react'

function Pill({ icon: Icon, label, value }) {
    return (
        <span className="border-white rounded-full border text-white px-3 inline-block py-0.5 my-2 mx-1 text-xs bg-[#111827]">
            <Icon className="inline-block mb-0.5" />{" "}
            {label}: {value}
        </span>
    )
}

export default Pill