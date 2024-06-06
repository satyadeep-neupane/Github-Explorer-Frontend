import React from 'react'
import Pill from './Pill'
import { FaRegStar, FaRegEye, FaLink } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { VscIssues } from "react-icons/vsc";
import { DiGitBranch } from "react-icons/di";

function ProjectCard(props) {
    return (
        <section className="mt-3 border-gray-400 rounded-lg border py-1.5 px-4">
            <h1 className="text-zinc-100 text-2xl font-semibold">
                {props.repositoryName}
            </h1>
            <h2 className="text-zinc-200 text-lg">{props.ownerName}</h2>
            <p className="text-zinc-300 text-sm">
                {props.description}
            </p>
            <div className="flex mt-2">
                <div className="w-10/12">
                    <Pill icon={FaRegStar} label="Stars" value={props.stars} />
                    <Pill icon={FaRegEye} label="Watchers" value={props.watchers} />
                    <Pill icon={FaCodeFork} label="Forks" value={props.forks} />

                    <p className="inline-block text-white text-xs ms-3">
                        Updated on: {props.updatedAt}
                    </p>
                    <p className="xs:block sm:hidden text-white text-xs ms-3">
                        <a
                            href={props.href}
                            className="text-sm mt-2.5 underline text-sky-500"
                        >
                            Read More
                        </a>
                    </p>
                </div>
                <div className="w-2/12 hidden sm:block">
                    <a
                        href={props.href}
                        className="text-sm float-end mt-2.5 underline text-sky-500"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectCard