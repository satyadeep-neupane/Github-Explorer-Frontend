import React from 'react'

function SearchFilter() {
    return (
        <section className="flex mb-3">
            <div className="w-8/12">
                <label className="text-white me-2">Sort By:</label>
                <select className="bg-[#111827] text-white p-2 rounded-md">
                    <option defaultValue>Best Match</option>
                    <option>Most Stars</option>
                    <option>Fewest Stars</option>
                    <option>Most Forks</option>
                    <option>Fewest Forks</option>
                    <option>Recently Updated</option>
                    <option>Least Recently Updated</option>
                </select>
            </div>
            <div className="w-4/12 flex justify-end">
                <label className="text-white me-2 mt-1">
                    Per Page:
                </label>
                <select className="bg-[#111827] text-white p-2 rounded-md">
                    <option>10</option>
                    <option>25</option>
                    <option defaultValue>30</option>
                    <option>50</option>
                </select>
            </div>
        </section>
    )
}

export default SearchFilter