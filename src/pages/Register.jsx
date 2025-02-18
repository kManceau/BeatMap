import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import SkipLinks from "../components/SkipLinks/SkipLinks";
import {Alert, Container, Typography} from "@mui/material";
import UserForm from "../components/UserForm/UserForm";
import {useState} from "react";

const Register = () => {
    document.title = 'BeatMap - Inscription';
    const [status, setStatus] = useState({});

    return (
        <>
            <SkipLinks links={[['Aller au formulaire d\'inscription', '#register-form'], ['Aller en bas de page', '#footer']]} />
            <Navbar/>
            <Breadcrumb links={[['Accueil', '/'], ['Inscription', '/register']]}/>
            <Container maxWidth="xl" sx={{paddingBlock: "2rem"}}>
                {status.error && <Alert severity="error" sx={{marginBlockEnd: "2rem"}}>{status.error}</Alert>}
                <Typography component="h1" variant="h4" sx={{color: 'primary.main'}}>
                    Inscription
                </Typography>
                <Typography variant="body1" component="p" sx={{paddingBlockStart: "1rem"}}>
                    Inscrivez vous pour profiter de tout un tas de super fonctions trop top !
                </Typography>
                <Typography variant="body1" component="p">
                    Profitez d’une multitude de fonctionnalités pensées pour vous simplifier la vie.
                    Que ce soit pour gagner du temps, personnaliser votre expérience ou explorer de nouvelles options, tout est à portée de main.
                    Ne passez pas à côté des outils exclusifs qui rendront votre utilisation encore plus fluide et agréable.
                </Typography>
                <Typography variant="h6" component="p" sx={{paddingBlock: "1rem"}}>
                    Rejoignez-nous et débloquez tout le potentiel de notre plateforme dès aujourd’hui !
                </Typography>
            </Container>
            <UserForm setStatus={setStatus}/>
            <Footer />
        </>
    );
}

export default Register;