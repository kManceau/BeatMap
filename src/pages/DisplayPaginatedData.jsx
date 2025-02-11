import "./styles/DisplayPaginatedData.scss";
import {useEffect, useState} from "react";
import SkipLinks from "../components/SkipLinks/SkipLinks";
import Navbar from "../components/Navbar/Navbar";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import {useLocation, useParams} from "react-router";
import {apiGetArtistsPaginated, apiGetEventsPaginated} from "../services/ApiService";
import ListPagination from "../components/ListPagination/ListPagination";
import {Box, Container, Typography} from "@mui/material";
import ArtistCard from "../components/HomeContent/ArtistCard/ArtistCard";
import EventCard from "../components/HomeContent/EventCard/EventCard";


const DisplayPaginatedData = ({dataType}) => {
    const [artists, setArtists] = useState([]);
    const [events, setEvents] = useState([]);
    const [pageInfos, setPageInfos] = useState({});
    const breadcrumbLinks = [['Accueil', '/']];
    dataType === "événements" && breadcrumbLinks.push(['Evénements', '/events']);
    dataType === "artistes" && breadcrumbLinks.push(['Artistes', '/artists']);
    const {page} = useParams();
    const currentPage = page ? parseInt(page, 10) : 1;
    const location = useLocation();

    const getArtistsPaginated = async () => {
        const temp = await apiGetArtistsPaginated(currentPage);
        setArtists(temp.data);
        setPageInfos({lastPage: temp.last_page});
    }

    const getEventsPaginated = async () => {
        const temp = await apiGetEventsPaginated(currentPage);
        setEvents(temp.data);
        setPageInfos({lastPage: temp.last_page});
    }

    useEffect(() => {
        document.title = 'BeatMap - Liste des ' + dataType;
        dataType === "artistes" && getArtistsPaginated();
        dataType === "événements" && getEventsPaginated();
    }, [location.pathname]);

    return (
        <>
            <SkipLinks links={[['Aller en bas de page', '#footer']]}/>
            <Navbar/>
            <Breadcrumb links={breadcrumbLinks}/>
            <Container maxWidth="xl" sx={{paddingBlock: "2rem"}}>
                <Typography component="h1" variant="h4" sx={{color: 'primary.main'}}>
                    Liste des {dataType}
                </Typography>
                <Box className="paginated-data-container">
                    {dataType === "artistes" && (
                            artists.map((artist, index) => (<ArtistCard key={index} artist={artist}/>))
                    )}
                    {dataType === "événements" && (
                            events.map((event, index) => (<EventCard key={index} event={event}/>))
                    )}
                </Box>
                <ListPagination type={dataType === 'artistes' ? 'artists' : 'events'} currentPage={currentPage} lastPage={pageInfos.lastPage}/>
            </Container>
        </>
    )
}

export default DisplayPaginatedData;