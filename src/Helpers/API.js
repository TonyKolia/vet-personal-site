const API_BASE_URL = "https://localhost:7106/api/";

const ENDPOINTS = {

    GET_ACTIVE_PAGES: "Pages/language/:language",
    GET_PAGE_CONTENT: "PageContent/:route/:language",
    GET_PAGE_IMAGE: "Images/Page/:imageName"
}

const development = {

    API_URL_GET_ACTIVE_PAGES: `${API_BASE_URL}${ENDPOINTS.GET_ACTIVE_PAGES}`,
    API_URL_GET_PAGE_CONTENT: `${API_BASE_URL}${ENDPOINTS.GET_PAGE_CONTENT}`,
    API_URL_GET_PAGE_IMAGE: `${API_BASE_URL}${ENDPOINTS.GET_PAGE_IMAGE}`,
}

const API = development;

const performGet = (url) => {
    return fetch(url, {
        method: "GET"
    }).then(res => {
        return {
            status: res.status,
            data: res.json()
        }
    });
}

const formatLocation = (location) => location.pathname.replace("/", "");

const replaceParams = (url, params) =>  url.replace(/:(\w+)/g, (match,key)=>params[key]||match);

export { API, performGet, formatLocation, replaceParams };