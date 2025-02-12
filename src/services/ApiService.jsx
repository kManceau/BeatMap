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