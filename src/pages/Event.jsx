import './styles/Event.scss';
import SkipLinks from "../components/SkipLinks/SkipLinks";
import Navbar from "../components/Navbar/Navbar";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import {Box, Button, CircularProgress, Container, Typography} from "@mui/material";
import Footer from "../components/Footer/Footer";
import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {apiGetEventArtistsStyle, apiGetOneEvent} from "../services/ApiService";
import {imagesBaseUrl} from "../App";
import defaultAvif from "src/assets/images/event-default.avif";
import defaultWebp from "src/assets/images/event-default.webp";
import defaultJpg from "src/assets/images/event-default.jpg";
import ArtistCard from "../components/HomeContent/ArtistCard/ArtistCard";

const Event = () => {
    const {id} = useParams();
    const [loader, setLoader] = useState(true);
    const ImagesBaseUrl = useContext(imagesBaseUrl) + 'event/';
    const [artists, setArtists] = useState({});
    const [event, setEvent] = useState({});
    const [photoUrl, setPhotoUrl] = useState({avif: defaultAvif, webp: defaultWebp, jpg: defaultJpg});
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const getEvent = async (id) => {
        const temp = await apiGetEventArtistsStyle(id);
        setEvent(temp.event);
        setArtists(temp.artists);
        document.title = 'BeatMap - ' + temp.event.name;
        setTimeout(() => setLoader(false), 500);
        if(temp.event.photo){
            setPhotoUrl({avif: ImagesBaseUrl + temp.event.photo + '.avif', webp: ImagesBaseUrl + temp.event.photo + '.webp', jpg: ImagesBaseUrl + temp.event.photo + '.jpg'});
        }
        setStartDate(new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(temp.event.start_date)))
        setEndDate(new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(temp.event.end_date)))
    }

    useEffect(() => {
        getEvent(id);
    }, []);

    return (
        <>
            <SkipLinks links={[['Aller à l\'événement', '#event'], ['Aller en bas de page', '#footer']]}/>
            <Navbar/>
            <Breadcrumb links={[['Accueil', '/'], ['Artistes', '/artists'], [event.name, '/artist/' + event.id]]}/>
            {
                loader ? (
                    <Box sx={{
                        width: '100%',
                        minHeight: 'calc(100vh - 4rem)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <CircularProgress/>
                    </Box>
                ) : (
                    <>
                        <Container maxWidth="xl" sx={{paddingBlock: "2rem"}} className="event-container" id="event">
                            <Typography component="h1" variant="h4" sx={{color: 'primary.main'}}>
                                {event.name}
                            </Typography>
                            <Typography variant="body2">
                                {event.place.city} - {startDate === endDate ? startDate : `Du ${startDate} au ${endDate}`}
                            </Typography>
                            <Box component="picture">
                                <source srcSet={photoUrl.avif} type="image/avif"/>
                                <source srcSet={photoUrl.webp} type="image/webp"/>
                                <img src={photoUrl.jpg} alt={"Photo de " + event.name} className="event-photo"/>
                            </Box>
                            <Typography variant="body1">
                                {event.description}
                            </Typography>
                            <Typography component="h2" variant="h5" sx={{color: 'primary.main', paddingBlockStart: "2rem"}}>
                                Artistes participant à {event.name} :
                            </Typography>
                            <Typography variant="body1" sx={{ paddingBlockEnd: "2rem" }}>
                                {artists.length === 0 ? "Aucun artiste..." : null}
                            </Typography>
                            {artists.length > 0 && (
                                <Container maxWidth="xl" className="artists-cards-container">
                                    {artists.map((artist, index) => (
                                        <ArtistCard key={index} artist={artist} />
                                    ))}
                                </Container>
                            )}
                            <Button href="/events">Retour à la liste des événements</Button>
                        </Container>
                        <Footer/>
                    </>
                )
            }
        </>
    )
}

export default Event;