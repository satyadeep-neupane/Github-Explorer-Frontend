import React from 'react'
import { FaRegStar, FaRegEye, FaLink } from "react-icons/fa";
import { FaCodeFork } from "react-icons/fa6";
import { VscIssues } from "react-icons/vsc";
import { DiGitBranch } from "react-icons/di";
import Pill from './Pill';


function ProjectDetail(props) {
    return (
        <section className="border-gray-400 rounded-t-lg border-x border-t py-1.5 px-4">
            <a
                href="#"
                className="text-2xl font-semibold text-sky-500 underline"
            >
                {props.repositoryName}
            </a>
            <h2 className="text-zinc-200 text-lg flex items-center">
                {props.ownerName + " "}
                <FaLink className="inline-block text-sky-500 ml-2" />
            </h2>
            <p className="text-zinc-200 text-xs">
                Last update on: {props.updatedAt}
            </p>
            <div className="flex mt-2 flex-wrap">
                <Pill icon={VscIssues} label="Open Issues" value={props.openIssues} />
                <Pill icon={DiGitBranch} label="Default" value={props.defaultBranch} />
                <Pill icon={FaRegStar} label="Stars" value={props.stars} />
                <Pill icon={FaRegEye} label="Watchers" value={props.watchers} />
                <Pill icon={FaCodeFork} label="Forks" value={props.forks} />
            </div>
        </section>
    )
}

export default ProjectDetail