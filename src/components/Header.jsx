import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Header({ q, handleQueryChange, handleSubmit }) {
    return (
        <header>
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                    <Link
                        to="/"
                        className="flex-shrink-0 text-white text-xl hidden md:block"
                    >
                        <FaGithubAlt className="inline-block mb-1" /> Github Explorer
                    </Link>

                    <div className="absolute left-0 right-0 mx-auto w-10/12 md:w-6/12 flex justify-center xs:px-10">
                        <div className="relative mx-auto w-full">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <IoSearch className="text-white" />
                            </span>
                            <form onSubmit={handleSubmit}>
                                <input
                                    name="q"
                                    value={q}
                                    onChange={handleQueryChange}
                                    placeholder="Enter your search keyword"
                                    className="w-full bg-gray-900 text-white rounded-md px-3.5 py-2 pl-10 text-sm font-medium"
                                    aria-label="Search"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header