import './styles/Artist.scss';
import SkipLinks from "../components/SkipLinks/SkipLinks";
import Navbar from "../components/Navbar/Navbar";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import {Box, Button, CircularProgress, Container, Typography} from "@mui/material";
import Footer from "../components/Footer/Footer";
import {useParams} from "react-router";
import {useContext, useEffect, useState} from "react";
import {apiGetArtistEventsPlaces} from "../services/ApiService";
import {imagesBaseUrl} from "../App";
import defaultAvif from "src/assets/images/artist-default.avif";
import defaultWebp from "src/assets/images/artist-default.webp";
import defaultJpg from "src/assets/images/artist-default.jpg";
import EventCard from "../components/HomeContent/EventCard/EventCard";

const Artist = () => {
    const {id} = useParams();
    const [loader, setLoader] = useState(true);
    const ImagesBaseUrl = useContext(imagesBaseUrl) + 'artist/';
    const [artist, setArtist] = useState({});
    const [events, setEvents] = useState({});
    const [photoUrl, setPhotoUrl] = useState({avif: defaultAvif, webp: defaultWebp, jpg: defaultJpg});

    const getArtist = async (id) => {
        const temp = await apiGetArtistEventsPlaces(id);
        setArtist(temp.artist);
        setEvents(temp.events);
        document.title = 'BeatMap - ' + temp.artist.name;
        setTimeout(() => setLoader(false), 500);
        if(temp.artist.photo){
            setPhotoUrl({avif: ImagesBaseUrl + temp.artist.photo + '.avif', webp: ImagesBaseUrl + temp.artist.photo + '.webp', jpg: ImagesBaseUrl + temp.artist.photo + '.jpg'});
        }
    }

    useEffect(() => {
        getArtist(id);
    }, []);

    return (
        <>
            <SkipLinks links={[['Aller à l\'artiste', '#artist'], ['Aller en bas de page', '#footer']]}/>
            <Navbar/>
            <Breadcrumb links={[['Accueil', '/'], ['Artistes', '/artists'], [artist.name, '/artist/' + artist.id]]}/>
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
                        <Container maxWidth="xl" sx={{paddingBlock: "2rem"}} className="artist-container" id="artist">
                            <Typography component="h1" variant="h4" sx={{color: 'primary.main'}}>
                                {artist.name}
                            </Typography>
                            <Typography variant="body2">
                                {artist.style.name}
                            </Typography>
                            <Box component="picture">
                                <source srcSet={photoUrl.avif} type="image/avif"/>
                                <source srcSet={photoUrl.webp} type="image/webp"/>
                                <img src={photoUrl.jpg} alt={"Photo de " + artist.name} className="artist-photo"/>
                            </Box>
                            <Typography variant="body1">
                                {artist.description}
                            </Typography>
                            <Typography component="h2" variant="h5" sx={{color: 'primary.main', paddingBlockStart: "2rem"}}>
                                Evénements auxquels participe {artist.name} :
                            </Typography>
                            <Typography variant="body1" sx={{ paddingBlockEnd: "2rem" }}>
                                {events.length === 0 ? "Aucun événement trouvé." : null}
                            </Typography>
                            {events.length > 0 && (
                                <Container maxWidth="xl" className="events-cards-container">
                                    {events.map((event, index) => (
                                        <EventCard key={index} event={event} />
                                    ))}
                                </Container>
                            )}
                            <Button href="/artists">Retour à la liste des artistes</Button>
                        </Container>
                        <Footer/>
                    </>
                )
            }
        </>
    )
}

export default Artist;