import "./MyMap.scss";
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import React, {useEffect, useState} from "react";
import {apiGetAllEvents} from "../../services/ApiService";
import MyPopup from "./MyPopup/MyPopup";

const MyMap = ({latitude, longitude}) => {
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const events = await apiGetAllEvents();
        setEvents(events);
    }

    const customIcon = new L.Icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
    });

    useEffect(() => {
        getEvents();
    }, [])

    return(
        <MapContainer center={[latitude, longitude]} zoom={10}
                      style={{ height: "800px", maxHeight: "75vh", width: "100%", borderRadius: "1rem", boxShadow: "5px 5px 10px 0px rgba(0,0,0,.5)",}}
                        id="map" >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {events && events.map((event, index) => (
                <Marker key={index} position={[event.place.latitude, event.place.longitude]} icon={customIcon}>
                    <MyPopup event={event} />
                </Marker>
            ))}
        </MapContainer>
    );
}
export default MyMap;