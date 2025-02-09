import "./HomeSoon.scss";
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import SoonCard from "./SoonCard/SoonCard";
import {useEffect, useState} from "react";
import {apiGetSoonEvents} from "../../services/ApiService";

const HomeSoon = () => {
    const [events, setEvents] = useState([]);
    const [loader, setLoader] = useState(true);

    const getEvents = async () => {
        const eventsList = await apiGetSoonEvents(3);
        setEvents(eventsList);
    }

    useEffect(() => {
        getEvents().then(() => {
            setLoader(false);
        });
    }, [])

    return (
        <Box className="home-soon-background">
            <Container maxWidth="xl" className="home-soon-container">
                <Box className="soon-show-container">
                    <Typography component="h2" variant="h4" className="home-soon-title">
                        Prochains Evénements :
                    </Typography>
                </Box>
            </Container>
                <Container maxWidth="xl" className="home-soon-cards-container" sx={{marginBlockStart: "2rem"}}>
                    {loader ? (
                        <CircularProgress />
                    ) : (
                        events.map((event, index) => (
                        <SoonCard key={index} event={event} />
                    )))}
                </Container>
        </Box>
    )
}
export default HomeSoon;