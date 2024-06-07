import { useState, useCallback, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import ProjectCard from "../components/ProjectCard";
import Paginate from "../components/Paginate";

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();
    const total = 10;

    const [query, setQuery] = useState(searchParams.get("q") || "");

    const [params, setParams] = useState({
        q: searchParams.get("q") || "",
        per_page: searchParams.get("per_page") || 30,
        page: searchParams.get("page") || 1,
        sort: searchParams.get("sort") || "",
        order: searchParams.get("order") || "",
    });

    const handleParamChange = useCallback((e) => {
        const { name, value } = e.target;
        setParams((prevParams) => ({
            ...prevParams,
            [name]: value,
        }));
    }, []);

    const handleQueryChange = useCallback((e) => setQuery(e.target.value), []);

    const handleSortByParamChange = useCallback((e) => {
        const [sort, order] = e.target.value.split("-");
        setParams((prevParams) => ({
            ...prevParams,
            sort: sort || "",
            order: order || "",
        }));
    }, []);

    const changePage = useCallback((pageNo) => {
        setParams((prevParams) => ({
            ...prevParams,
            page: pageNo,
        }));
    }, []);

    useEffect(() => {
        const newSearchParams = new URLSearchParams();

        Object.keys(params).forEach((key) => {
            if (params[key]) {
                newSearchParams.set(key, params[key]);
            }
        });

        setSearchParams(newSearchParams);
    }, [params, setSearchParams]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setParams({ q: query });
    };

    return (
        <div className="container-full mx-auto min-h-screen bg-custom-black">
            <Header
                q={query}
                handleQueryChange={handleQueryChange}
                handleSubmit={handleSubmit}
            />

            <main className="lg:w-6/12 md:w-8/12 w-10/12 mx-auto my-3">
                <SearchFilter
                    perPage={params.per_page || 30}
                    handleParamChange={handleParamChange}
                    sortBy={`${params.sort}${
                        params.order ? `-${params.order}` : ""
                    }`}
                    handleSortByParamChange={handleSortByParamChange}
                />

                <section className="mt-3">
                    <p className="text-slate-500 text-xs">
                        Showing 1 - {params.per_page} of 1160
                    </p>
                </section>

                <ProjectCard
                    repositoryName="kunal-kushwaha/DSA-Bootcamp-Java"
                    ownerName="kunal-kushwaha"
                    description="This repository consists of the code samples, assignments, and notes for the Java data structures & algorithms + interview preparation bootcamp."
                    stars={23}
                    watchers={6}
                    forks={10}
                    updatedAt="May 18"
                    href="#"
                />

                <Paginate
                    total={total}
                    active={params.page}
                    changePage={changePage}
                />
            </main>
        </div>
    );
}
