import { IoMdArrowRoundBack } from "react-icons/io";
import Header from "../components/Header";
import MarkdownSection from "../components/MarkdownSection";
import ProjectDetail from "../components/ProjectDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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

export default function Detail() {
    const [result, setResult] = useState({});
    const { ownerId, repoName } = useParams();

    const getResult = async () => {
        try {
            const result = await axios.get(
                `http://127.0.0.1:5000/api/repos/${ownerId}/${repoName}`
            );

            setResult(result.data?.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getResult();
    }, []);

    return (
        <div className="container-full mx-auto min-h-screen bg-custom-black pb-3">
            <Header />

            <main className="lg:w-8/12 md:w-8/12 w-10/12 mx-auto mt-3">
                <button className="my-3 bg-indigo-400 rounded-full px-3 py-1 text-white flex items-center">
                    <IoMdArrowRoundBack className="mr-2" />
                    View More
                </button>
                <ProjectDetail
                    repositoryName={`${result?.ownerName}/${result?.repositoryName}`}
                    repositoryUrl={result?.repositoryUrl}
                    ownerName={result?.ownerName}
                    ownerUrl={result?.ownerUrl}
                    updatedAt={"May 18"}
                    stars={result?.starsCount}
                    openIssues={result?.openIssuesCount}
                    defaultBranch={result?.defaultBranch}
                    watchers={result?.watchersCount}
                    forks={result?.forksCount}
                />

                {result?.readme && <MarkdownSection markdown={result?.readme} />}
            </main>
        </div>
    );
}
