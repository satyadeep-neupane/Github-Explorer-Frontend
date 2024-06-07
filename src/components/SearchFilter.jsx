import React from 'react'

function SearchFilter({ sortBy, handleSortByParamChange, perPage, handleParamChange }) {
    return (
        <section className="flex mb-3">
            <div className="w-8/12">
                <label className="text-white me-2">Sort By:</label>
                <select className="bg-[#111827] text-white p-2 rounded-md" value={sortBy} onChange={handleSortByParamChange}>
                    <option value="" defaultValue>Best Match</option>
                    <option value="stars-desc">Most Stars</option>
                    <option value="stars-asc">Fewest Stars</option>
                    <option value="forks-desc">Most Forks</option>
                    <option value="forks-asc">Fewest Forks</option>
                    <option value="updated-desc">Recently Updated</option>
                    <option value="updated-asc">Least Recently Updated</option>
                </select>
            </div>
            <div className="w-4/12 flex justify-end">
                <label className="text-white me-2 mt-1">
                    Per Page:
                </label>
                <select name="per_page" className="bg-[#111827] text-white p-2 rounded-md" value={perPage} onChange={handleParamChange}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="30" defaultValue>30</option>
                    <option value="50">50</option>
                </select>
            </div>
        </section>
    )
}

export default SearchFilter