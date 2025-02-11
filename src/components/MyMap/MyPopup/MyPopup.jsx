import './MyPopup.scss';
import React from "react";
import {Popup} from "react-leaflet";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import EventCard from "../../HomeContent/EventCard/EventCard";

const MyPopup = ({event}) => {

    return (
        <Popup style={{padding: 0, margin: 0}}>
            <EventCard event={event}/>
        </Popup>
    )
}
export default MyPopup;