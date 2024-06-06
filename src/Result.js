import { FaRegStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

export default function App() {
    return (
        <div className="container-full mx-auto min-h-screen bg-custom-black">
            <nav className="bg-gray-800">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                            <div className="w-10/12 md:w-6/12">
                                <div className="flex space-x-4">
                                    <div className="relative mx-auto w-full">
                                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                            <IoSearch className="text-white" />
                                        </span>
                                        <input
                                            placeholder="Enter your search keyword"
                                            className="w-full bg-gray-900 text-white rounded-md px-3.5 py-2 pl-10 text-sm font-medium"
                                            aria-current="page"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="lg:w-6/12 md:w-8/12 w-10/12 mx-auto my-3 flex">
                <div className="w-8/12">
                    <div>
                        <label className="text-white me-2">Sort By:</label>
                        <select className="bg-[#111827] text-white p-2 rounded-md">
                            <option selected>Best Match</option>
                            <option>Most Stars</option>
                            <option>Fewest Stars</option>
                            <option>Most Forks</option>
                            <option>Fewest Forks</option>
                            <option>Recently Updated</option>
                            <option>Least Recently Updated</option>
                        </select>
                    </div>
                </div>
                <div className="w-4/12 flex justify-end">
                    <div>
                        <label className="text-white me-2">Per Page:</label>
                        <select className="bg-[#111827] text-white p-2 rounded-md">
                            <option>10</option>
                            <option>25</option>
                            <option selected>30</option>
                            <option>50</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="lg:w-6/12 md:w-8/12 w-10/12 mx-auto mt-3">
                <p className="text-slate-500 text-xs">Showing 1 - 30 of 1160</p>
            </div>
            <div className="lg:w-6/12 md:w-8/12 w-10/12 mx-auto mt-3">
                <div className="border-gray-400 rounded-lg border py-1.5 px-4">
                    <h1 className="text-zinc-100 text-2xl font-semibold">
                        kunal-kushwaha/DSA-Bootcamp-Java
                    </h1>
                    <h2 className="text-zinc-200 text-lg">kunal-kushwaha</h2>
                    <p className="text-zinc-300 text-sm">
                        This repository consists of the code samples,
                        assignments, and notes for the Java data structures &
                        algorithms + interview preparation bo…
                    </p>
                    <div className="flex mt-2">
                        <div className="w-10/12">
                            <div className="border-white rounded-full border text-white px-3 inline-block py-0.5 my-2 mx-1 text-xs bg-[#111827]">
                                <FaRegStar className="inline-block mb-1" />{" "}
                                Stars: 23
                            </div>
                            <div className="border-white rounded-full border text-white px-3 inline-block py-0.5 my-2 mx-1 text-xs bg-[#111827]">
                                <FaRegEye className="inline-block mb-0.5" />{" "}
                                Watcher: 23
                            </div>
                            <div className="border-white rounded-full border text-white px-3 inline-block py-0.5 my-2 mx-1 text-xs bg-[#111827]">
                                <FaCodeFork className="inline-block mb-0.5" />{" "}
                                Forks: 23
                            </div>
                            <p className="inline-block text-white text-xs ms-3">
                                Updated on: 14th May
                            </p>
                        </div>
                        <div className="w-2/12">
                            <a
                                href="#"
                                className="text-sm float-end mt-2.5 underline text-sky-500"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:2-6/12 w-10/12 mx-auto text-center py-5">
                <div className="inline-block text-white rounded-full border border-slate-600 m-0 pb-1 px-2 text-sm mx-1">
                    &lt;
                </div>
                <div className="inline-block text-white rounded-full border border-slate-600 m-0 pb-1 px-2 text-sm mx-1">
                    1
                </div>
                <div className="inline-block text-white rounded-full border border-slate-600 m-0 pb-1 px-2.5 text-sm mx-1">
                    2
                </div>
                <div className="inline-block text-white rounded-full border border-slate-600 m-0 pb-1 px-2.5 text-sm mx-1 bg-indigo-500">
                    3
                </div>
                <div className="inline-block text-white rounded-full border border-slate-600 m-0 pb-1 px-2.5 text-sm mx-1">
                    4
                </div>
                <div className="inline-block text-white rounded-full border border-slate-600 m-0 pb-1 px-2.5 text-sm mx-1">
                    5
                </div>
                <div className="inline-block text-white rounded-full border border-slate-600 m-0 pb-1 px-2 text-sm mx-1">
                    &gt;
                </div>
            </div>
        </div>
    );
}
