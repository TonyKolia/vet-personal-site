const API_BASE_URL = "https://localhost:7106/api/";

const ENDPOINTS = {

    GET_ACTIVE_PAGES: "Pages/language/:language",
    GET_PAGE_CONTENT: "PageContent/:route/:language"
}

const development = {

    API_URL_GET_ACTIVE_PAGES: `${API_BASE_URL}${ENDPOINTS.GET_ACTIVE_PAGES}`,
    API_URL_GET_PAGE_CONTENT: `${API_BASE_URL}${ENDPOINTS.GET_PAGE_CONTENT}`
}

const API = development;

const performGet = (url) => {
    return fetch(url, {
        method: "GET"
    }).then(res => res.json());
}

export {API, performGet};