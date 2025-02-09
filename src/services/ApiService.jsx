import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// ARTISTS
export const apiGetSoonEvents = async (limit) => {
    return await axios.get(API_BASE_URL + "events?limit=" + limit + "&order_by=start_date").then((response) => response.data);
}