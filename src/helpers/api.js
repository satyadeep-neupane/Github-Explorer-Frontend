import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_API_URL;

const instance = axios.create({
    baseURL: BACKEND_URL,
});

export function getSearchResult(query) {
    return instance.get(`/search?${query}`);
}

export function getResultDetail(ownerId, repoName) {
    return instance.get(`/repos/${ownerId}/${repoName}`);
}
