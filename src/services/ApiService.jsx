import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const apiGetSoonEvents = async (limit) => {
    return await axios.get(API_BASE_URL + "events?limit=" + limit + "&order_by=start_date").then((response) => response.data);
}

export const apiGetPopularArtists = async (limit) => {
    return await axios.get(API_BASE_URL + "artists/popular?limit=" + limit).then((response) => response.data);
}

export const apiGetCityName = async (latitude, longitude) => {
    return await axios.get("https://api-adresse.data.gouv.fr/reverse/?lat=" + latitude + "" + "&lon=" + longitude).then((response) => response.data);
}