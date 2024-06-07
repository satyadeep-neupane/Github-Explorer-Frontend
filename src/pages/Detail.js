import { IoMdArrowRoundBack } from "react-icons/io";
import Header from "../components/Header";
import MarkdownSection from "../components/MarkdownSection";
import ProjectDetail from "../components/ProjectDetail";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

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

            <main className="lg:w-8/12 md:w-8/12 w-10/12 mx-auto mt-10">
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

                {result?.readme ? (
                    <MarkdownSection markdown={result?.readme} />
                ) : (
                    <div>
                        <hr />
                        <h3 className="text-white text-2xl m-3">
                            No Readme Available
                        </h3>
                    </div>
                )}
            </main>
        </div>
    );
}
