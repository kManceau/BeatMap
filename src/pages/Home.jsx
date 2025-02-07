import Navbar from '../components/Navbar/Navbar';
import {useEffect} from "react";
import Hero from "../components/Hero/Hero";

const Home = () => {

    useEffect(() => {
        document.title = 'BeatMap - Accueil';
    }, []);

    return (
        <>
            <Navbar/>
            <Hero />
        </>
    );
}

export default Home;