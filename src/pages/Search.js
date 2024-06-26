import { useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import ProjectCard from "../components/ProjectCard";
import Paginate from "../components/Paginate";
import axios from "axios";
import Loading from "../components/Loading";
import { parseCustomDate } from "../helpers/functions";
import { getSearchResult } from "../helpers/api";

function generatePageString(perPage, page, totalItems) {
    const startItem = (page - 1) * perPage + 1;
    const endItem = Math.min(page * perPage, totalItems);
    return `Showing ${isNaN(startItem) ? 0 : startItem} - ${
        isNaN(endItem) ? 0 : endItem
    } of ${isNaN(totalItems) ? 0 : totalItems}`;
}

export default function Search() {
    const [searchParams, setSearchParams] = useSearchParams();

    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState(searchParams.get("q") || "");
    const [searchResults, setSearchResults] = useState([]);
    const [pagination, setPagination] = useState({});

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

    const getResult = async () => {
        try {
            setLoading(true);
            const result = await getSearchResult(searchParams.toString());

            setSearchResults(result.data?.data?.items);
            setPagination(result?.data?.pagination);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getResult();
    }, [searchParams]);

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
                        {generatePageString(
                            pagination?.perPage,
                            pagination?.currentPage,
                            pagination?.totalCount
                        )}
                    </p>
                </section>

                {loading ? (
                    <Loading />
                ) : (
                    searchResults.map((r) => (
                        <ProjectCard
                            key={r.id}
                            repositoryName={r.repoFullName}
                            ownerName={r.ownerId}
                            description={r.description?.substring(0, 150)}
                            stars={r.starsCount}
                            watchers={r.watchersCount}
                            forks={r.forksCount}
                            updatedAt={parseCustomDate(r.updatedAt)}
                            href={`/repos/${r.ownerId}/${r.repoName}`}
                        />
                    ))
                )}

                <Paginate
                    total={pagination.totalPages}
                    active={params.page || 1}
                    changePage={changePage}
                />
            </main>
        </div>
    );
}
