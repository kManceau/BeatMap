import Navbar from '../components/Navbar/Navbar';
import {useEffect} from "react";

const Home = () => {

    useEffect(() => {
        document.title = 'BeatMap - Accueil';
    }, []);

    return (
        <>
            <Navbar/>
        </>
    );
}

export default Home;