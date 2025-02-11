import Navbar from '../components/Navbar/Navbar';
import {useEffect} from "react";
import Hero from "../components/Hero/Hero";
import HomeContent from "../components/HomeContent/HomeContent";
import HomePicture from "../components/HomePicture/HomePicture";
import Footer from "../components/Footer/Footer";

const Home = () => {

    useEffect(() => {
        document.title = 'BeatMap - Accueil';
    }, []);


    return (
        <>
            <Navbar/>
            <Hero/>
            <HomeContent type="events"/>
            <HomePicture number="1"/>
            <HomeContent type="artists"/>
            <HomePicture number="2"/>
            <Footer/>
        </>
    );
}

export default Home;