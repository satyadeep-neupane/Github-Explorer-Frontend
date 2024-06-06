import { FaRegStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { VscIssues } from "react-icons/vsc";
import { DiGitBranch } from "react-icons/di";
import Markdown from "react-markdown";
import { IoMdArrowRoundBack } from "react-icons/io";

const markdown = `
# Project Title

Simple overview of use/purpose.

## Description

An in-depth paragraph about your project and overview of use.

## Getting Started

### Dependencies

* Describe any prerequisites, libraries, OS version, etc., needed before installing program.
* ex. Windows 10

### Installing

* How/where to download your program
* Any modifications needed to be made to files/folders

### Executing program

* How to run the program
* Step-by-step bullets

## Help

Any advise for common problems or issues.

## Authors

Contributors names and contact info

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## Version History

* 0.2
    * Various bug fixes and optimizations
    * See [commit change]() or See [release history]()
* 0.1
    * Initial Release

## License

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)
* [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
* [dbader](https://github.com/dbader/readme-template)
* [zenorocha](https://gist.github.com/zenorocha/4526327)
* [fvcproductions](https://gist.github.com/fvcproductions/1bfc2d4aecb01a834b46)`;

export default function App() {
    return (
        <div className="container-full mx-auto min-h-screen bg-custom-black pb-3">
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
            <div className="lg:w-8/12 md:w-8/12 w-10/12 mx-auto mt-3">
                <button className="my-3">
                    <p className="text-white bg-indigo-400 rounded-full px-3 py-1">
                        <IoMdArrowRoundBack className="inline-block mb-1" />{" "}
                        View More
                    </p>
                </button>
                <div className="border-gray-400 rounded-t-lg border-x border-t py-1.5 px-4">
                    <a className="text-2xl font-semibold text-sky-500 underline">
                        kunal-kushwaha/DSA-Bootcamp-Java
                    </a>
                    <h2 className="text-zinc-200 text-lg">
                        Kunal Kushwaha{" "}
                        <a>
                            <FaLink className="inline-block text-sky-500" />
                        </a>
                    </h2>
                    <p className="text-zinc-200 text-xs">
                        Last update on: 14th May
                    </p>
                    <div className="flex mt-2">
                        <div className="w-12/12">
                            <div className="border-gray-600 rounded-full border text-white px-3 inline-block py-0.5 my-2 mx-1 text-xs bg-[#111827]">
                                <VscIssues className="inline-block mb-0.5" />{" "}
                                Open Issues: 23
                            </div>
                            <div className="border-gray-600 rounded-full border text-white px-3 inline-block py-0.5 my-2 mx-1 text-xs bg-[#111827]">
                                <DiGitBranch className="inline-block mb-0.5" />{" "}
                                Default: main
                            </div>
                            <div className="border-gray-600 rounded-full border text-white px-3 inline-block py-0.5 my-2 mx-1 text-xs bg-[#111827]">
                                <FaRegStar className="inline-block mb-1" />{" "}
                                Stars: 23
                            </div>
                            <div className="border-gray-600 rounded-full border text-white px-3 inline-block py-0.5 my-2 mx-1 text-xs bg-[#111827]">
                                <FaRegEye className="inline-block mb-0.5" />{" "}
                                Watcher: 23
                            </div>
                            <div className="border-gray-600 rounded-full border text-white px-3 inline-block py-0.5 my-2 mx-1 text-xs bg-[#111827]">
                                <FaCodeFork className="inline-block mb-0.5" />{" "}
                                Forks: 23
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white lg:w-8/12 md:w-8/12 w-10/12 mx-auto px-3 border-x border-b rounded-b-lg border-gray-400 py-3">
                <h3 className="text-2xl text-zinc-400">Readme</h3>
                <hr className="mb-2" />
                <Markdown className="prose prose-slate dark:prose-invert lg:prose-sm">
                    {markdown}
                </Markdown>
            </div>
        </div>
    );
}
