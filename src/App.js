import { FaRegStar, FaRegEye, FaLink } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { VscIssues } from "react-icons/vsc";
import { DiGitBranch } from "react-icons/di";
import Markdown from "react-markdown";
import { FaGithubAlt } from "react-icons/fa";

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
            <header>
                <nav className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                        <a
                            href="#"
                            className="flex-shrink-0 text-white text-xl hidden md:block"
                        >
                            <FaGithubAlt className="inline-block mb-1" /> Github Explorer
                        </a>
                        <div className="absolute left-0 right-0 mx-auto w-10/12 md:w-6/12 flex justify-center xs:px-10">
                            <div className="relative mx-auto w-full">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <IoSearch className="text-white" />
                                </span>
                                <input
                                    placeholder="Enter your search keyword"
                                    className="w-full bg-gray-900 text-white rounded-md px-3.5 py-2 pl-10 text-sm font-medium"
                                    aria-label="Search"
                                />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="lg:w-8/12 md:w-8/12 w-10/12 mx-auto mt-3">
                <button className="my-3 bg-indigo-400 rounded-full px-3 py-1 text-white flex items-center">
                    <IoMdArrowRoundBack className="mr-2" />
                    View More
                </button>
                <section className="border-gray-400 rounded-t-lg border-x border-t py-1.5 px-4">
                    <a
                        href="#"
                        className="text-2xl font-semibold text-sky-500 underline"
                    >
                        kunal-kushwaha/DSA-Bootcamp-Java
                    </a>
                    <h2 className="text-zinc-200 text-lg flex items-center">
                        Kunal Kushwaha{" "}
                        <FaLink className="inline-block text-sky-500 ml-2" />
                    </h2>
                    <p className="text-zinc-200 text-xs">
                        Last update on: 14th May
                    </p>
                    <div className="flex mt-2 flex-wrap">
                        <span className="border-gray-600 rounded-full border text-white px-3 py-0.5 my-2 mx-1 text-xs bg-[#111827] flex items-center">
                            <VscIssues className="mr-1" /> Open Issues: 23
                        </span>
                        <span className="border-gray-600 rounded-full border text-white px-3 py-0.5 my-2 mx-1 text-xs bg-[#111827] flex items-center">
                            <DiGitBranch className="mr-1" /> Default: main
                        </span>
                        <span className="border-gray-600 rounded-full border text-white px-3 py-0.5 my-2 mx-1 text-xs bg-[#111827] flex items-center">
                            <FaRegStar className="mr-1" /> Stars: 23
                        </span>
                        <span className="border-gray-600 rounded-full border text-white px-3 py-0.5 my-2 mx-1 text-xs bg-[#111827] flex items-center">
                            <FaRegEye className="mr-1" /> Watcher: 23
                        </span>
                        <span className="border-gray-600 rounded-full border text-white px-3 py-0.5 my-2 mx-1 text-xs bg-[#111827] flex items-center">
                            <FaCodeFork className="mr-1" /> Forks: 23
                        </span>
                    </div>
                </section>

                <section className="text-white border-gray-400 border-x border-b rounded-b-lg py-3 px-4">
                    <h3 className="text-2xl text-zinc-400 mb-2">Readme</h3>
                    <hr className="mb-2" />
                    <Markdown className="prose prose-slate dark:prose-invert lg:prose-sm">
                        {markdown}
                    </Markdown>
                </section>
            </main>
        </div>
    );
}
