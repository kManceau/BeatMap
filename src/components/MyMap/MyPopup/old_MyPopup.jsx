import './MyPopup.scss';
import React from "react";
import {Popup} from "react-leaflet";

const MyPopup = ({event}) => {
    const startDate = new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(event.start_date));
    const endDate = new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(event.end_date));

    return (
        <Popup>
            <div style={{ maxWidth: "200px" }}>
                <h3>{event.name}</h3>
                <p><strong>Type :</strong> {event.type.substring(0, 1).toUpperCase() + event.type.substring(1)}</p>
                <p><strong>Description : </strong>
                    {event.description.length > 50 ?
                        event.description.substring(0, 50) + ' (...)' :
                        event.description
                    }</p>
                <p><strong>Date : </strong>
                    {startDate === endDate ?
                        `Le ${startDate}` :
                        `Du ${startDate} au ${endDate}`
                    }
                </p>
                <p><strong>Lieu :</strong> {event.place.name}</p>
                <p><strong>Adresse :</strong> {event.place.address}, {event.place.city}</p>
                <a href={`https://www.google.com/maps/search/?api=1&query=${event.place.latitude},${event.place.longitude}`} target="_blank" rel="noopener noreferrer">
                    Voir sur Google Maps
                </a>
            </div>
        </Popup>
    )
}
export default MyPopup;