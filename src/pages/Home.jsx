import Navbar from '../components/Navbar/Navbar';
import Hero from "../components/Hero/Hero";
import HomeContent from "../components/HomeContent/HomeContent";
import HomePicture from "../components/HomePicture/HomePicture";
import Footer from "../components/Footer/Footer";
import SkipLinks from "../components/SkipLinks/SkipLinks";


const Home = () => {
    document.title = 'BeatMap - Accueil';

    return (
        <>
            <SkipLinks links={[['Aller aux prochains événements', '#events'], ['Aller aux artistes populaires', '#artists'], ['Aller en bas de page', '#footer']]}/>
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