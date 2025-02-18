import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const apiGetSoonEvents = async (limit) => {
    return await axios.get(API_BASE_URL + "events?limit=" + limit + "&order_by=start_date").then((response) => response.data);
}

export const apiGetPopularArtists = async (limit) => {
    return await axios.get(API_BASE_URL + "artists/popular?limit=" + limit).then((response) => response.data);
}

export const apiGetCityName = async (latitude, longitude) => {
    return await axios.get("https://nominatim.openstreetmap.org/reverse?lat=" + latitude + "&lon=" + longitude + "&format=json").then((response) => response.data);
}

export const apiGetAllEvents = async () => {
    return await axios.get(API_BASE_URL + "events").then((response) => response.data);
}

export const apiGetArtistsPaginated = async (page) => {
    return await axios.get(API_BASE_URL + "artists/paginated?page=" + page).then((response) => response.data);
}

export const apiGetEventsPaginated = async (page) => {
    return await axios.get(API_BASE_URL + "events/paginated?page=" + page).then((response) => response.data);
}

export const apiGetArtistEventsPlaces = async (id) => {
    return await axios.get(API_BASE_URL + "artist/events/" + id).then((response) => response.data);
}

export const apiGetEventArtistsStyle = async (id) => {
    return await axios.get(API_BASE_URL + "event/artists/" + id).then((response) => response.data);
}

export const apiLogin = async (formData) => {
    return await axios.post(API_BASE_URL + "login", formData, {headers : {"Content-Type": "multipart/form-data"}}).then((response) => response.data);
}

export const apiRegister = async (formData) => {
    return await axios.post(API_BASE_URL + "register", formData, {headers : {"Content-Type": "multipart/form-data"}}).then((response) => response.data);
}
export const apiGetCurrentUser = async (token) => {
    return await axios.get(API_BASE_URL + "currentuser",
        {headers : {"Content-Type": "multipart/form-data", Authorization: `Bearer ${token}`}})
        .then((response) => response.data);
}

export const apiLogout = async (token) => {
    return await axios.post(API_BASE_URL + "logout", {},
        {headers: {"Content-Type": "multipart/form-data", Authorization: `Bearer ${token}`}
        }).then((response) => response.data);
}

export const apiDeleteArtist = async (id, token) => {
    return await axios.delete(API_BASE_URL + "artist/" + id,
        {headers: {"Content-Type": "multipart/form-data", Authorization: `Bearer ${token}`}
        }).then((response) => response.data);
}

export const apiDeleteEvent = async (id, token) => {
    return await axios.delete(API_BASE_URL + "event/" + id,
        {headers: {"Content-Type": "multipart/form-data", Authorization: `Bearer ${token}`}
        }).then((response) => response.data);
}