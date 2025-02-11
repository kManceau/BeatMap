import Navbar from '../components/Navbar/Navbar';
import {useEffect, useState} from "react";
import {Box, CircularProgress, Container, Typography} from "@mui/material";
import Footer from "../components/Footer/Footer";
import {apiGetCityName} from "../services/ApiService";
import MyMap from "../components/MyMap/MyMap";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";

const Map = () => {
    const [loader, setLoader] = useState(true);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [location, setLocation] = useState({});
    const [city, setCity] = useState('La Porcherie');
    const [dep, setDep] = useState('89');



    const getCity = async (latitude, longitude) => {
        const city = await apiGetCityName(latitude, longitude);
        if(city.address.village){
            setCity(city.address.village);
        } else{
            setCity(city.address.city);
        }
        setDep(city.address.postcode.substring(0, 2));
    }

    const getLocation = async () => {
        let position;
        if(navigator.geolocation) {
            try{
                position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject, {maximumAge : 60000});
                });
            } catch {
                position = {coords: {latitude: 47.69625008673613, longitude: -1.64534100035814}}
            }
        } else {
            position = {coords: {latitude: 47.69625008673613, longitude: -1.64534100035814}}
        }
        setTimeout(() => {
            setLoader(false);
        }, 1000)
        setLocation({latitude: position.coords.latitude, longitude: position.coords.longitude});
        await getCity(position.coords.latitude, position.coords.longitude);
        setPageLoaded(true);
    }


    useEffect(() => {
        document.title = 'BeatMap - Carte des événements';
        getLocation();
    }, []);

    return (
        <>
            <Navbar/>
            <Breadcrumb links={[['Accueil', '/'], ['Carte', '/map']]}/>
            {
                loader ? (
                    <Box sx={{width:'100%', minHeight:'calc(100vh - 4rem)', display:'flex', justifyContent:'center', alignItems: 'center'}}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                        <Container maxWidth="xl" sx={{paddingBlock: "2rem"}}>
                            <Typography component="h1" variant="h4" sx={{color: 'primary.main'}}>
                                Les événements autour de vous :
                            </Typography>
                            <Typography>
                                Vous êtes à : {city} ({dep})
                            </Typography>
                            <Typography>
                                {location.latitude}, {location.longitude}
                            </Typography>
                        </Container>
                        {
                            pageLoaded ? (
                            <Container maxWidth="xl" sx={{paddingBlock: "2rem"}}>
                                <MyMap latitude={location.latitude} longitude={location.longitude}/>
                            </Container>
                        ) : null
                        }
                    </>
                )
            }
            <Footer />
        </>
    );
}

export default Map;