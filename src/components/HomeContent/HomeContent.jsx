import "./HomeContent.scss";
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import EventCard from "./EventCard/EventCard";
import {useEffect, useState} from "react";
import {apiGetPopularArtists, apiGetSoonEvents} from "../../services/ApiService";
import ArtistCard from "./ArtistCard/ArtistCard";

const HomeContent = ({type}) => {
    const [events, setEvents] = useState([]);
    const [artists, setArtists] = useState([]);
    const [loader, setLoader] = useState(true);

    const getData = async () => {
        if (type === "events") {
            const eventsList = await apiGetSoonEvents(6);
            setEvents(eventsList);
        } else if (type === "artists") {
            const artistsList = await apiGetPopularArtists(6);
            setArtists(artistsList);
        }
    }

    useEffect(() => {
        getData().then(() => {
            setLoader(false);
        });
    }, [])

    return (
        <Box className="home-content-background">
            <Container maxWidth="xl" className="home-content-container">
                <Box className="soon-show-container">
                    <Typography component="h2" variant="h4" className="home-content-title">
                        {type === "events" ? "Prochains Evénements :" : ""}
                        {type === "artists" ? "Artistes Populaires :" : ""}
                    </Typography>
                </Box>
            </Container>
            <Container maxWidth="xl" className="home-content-cards-container" sx={{marginBlockStart: "2rem"}}>
                {loader ? (
                    <CircularProgress/>
                ) : (
                    <>
                        {events && events.map((event, index) => (<EventCard key={index} event={event}/>))}
                        {artists && artists.map((artist, index) => (<ArtistCard key={index} artist={artist}/>))}
                    </>
                )
                }
            </Container>
        </Box>
    )
}
export default HomeContent;