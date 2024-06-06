import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import ProjectCard from "./components/ProjectCard";
import Paginate from "./components/Paginate";

export default function App() {
    return (
        <div className="container-full mx-auto min-h-screen bg-custom-black">
            <Header />

            <main className="lg:w-6/12 md:w-8/12 w-10/12 mx-auto my-3">
                <SearchFilter />

                <section className="mt-3">
                    <p className="text-slate-500 text-xs">
                        Showing 1 - 30 of 1160
                    </p>
                </section>

                <ProjectCard
                    repositoryName={"kunal-kushwaha/DSA-Bootcamp-Java"}
                    ownerName={"kunal-kushwaha"}
                    description={`This repository consists of the code samples,
                    assignments, and notes for the Java data structures &
                    algorithms + interview preparation bootcamp.`}
                    stars={23}
                    watchers={6}
                    forks={10}
                    updatedAt={"May 18"}
                    href={"#"}
                />

                <Paginate total={10} active={1} />
            </main>
        </div>
    );
}
