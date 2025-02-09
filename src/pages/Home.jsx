import Navbar from '../components/Navbar/Navbar';
import {useEffect, useState} from "react";
import Hero from "../components/Hero/Hero";
import HomeSoon from "../components/HomeSoon/HomeSoon";
import HomePicture from "../components/HomePicture/HomePicture";
import {Box, CircularProgress} from "@mui/material";

const Home = () => {
    const [loader, setLoader] = useState(true);
    const loading = async () => {
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }

    useEffect(() => {
        document.title = 'BeatMap - Accueil';
        loading();
    }, []);


    return (
        <>
            <Navbar/>
            {
                loader ? (
                    <Box sx={{width:'100%', minHeight:'calc(100vh - 4rem)', display:'flex', justifyContent:'center', alignItems: 'center'}}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                        <Hero/>
                        <HomeSoon/>
                        <HomePicture number="1" />
                        <HomePicture number="2" />
                    </>
                )
            }
        </>
    );
}

export default Home;