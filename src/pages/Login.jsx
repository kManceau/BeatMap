import Navbar from '../components/Navbar/Navbar';
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import SkipLinks from "../components/SkipLinks/SkipLinks";
import {Alert, Button, Container, Typography} from "@mui/material";
import LoginForm from "../components/LoginForm/LoginForm";
import {useState} from "react";

const Login = () => {
    document.title = 'BeatMap - Connexion';
    const [status, setStatus] = useState({});

    return (
        <>
            <SkipLinks links={[['Aller au formulaire de connexion', '#login-form'], ['Aller en bas de page', '#footer']]} />
            <Navbar/>
            <Breadcrumb links={[['Accueil', '/'], ['Connexion', '/login']]}/>
            <Container maxWidth="xl" sx={{paddingBlock: "2rem"}}>
                {status.error && <Alert severity="error" sx={{marginBlockEnd: "2rem"}}>{status.error}</Alert>}
                <Typography component="h1" variant="h4" sx={{color: 'primary.main'}}>
                    Connexion
                </Typography>
                <Typography variant="body1" component="p" sx={{paddingBlockStart: "1rem"}}>
                    Connectez vous pour profiter de tout un tas de super fonctions trop top !
                </Typography>

                <LoginForm setStatus={setStatus} />
                <Typography variant="body1" component="p">
                    Profitez d’une multitude de fonctionnalités pensées pour vous simplifier la vie.
                    Que ce soit pour gagner du temps, personnaliser votre expérience ou explorer de nouvelles options, tout est à portée de main.
                    Ne passez pas à côté des outils exclusifs qui rendront votre utilisation encore plus fluide et agréable.
                </Typography>
                <Typography variant="h6" component="p" sx={{paddingBlock: "1rem"}}>
                    Rejoignez-nous et débloquez tout le potentiel de notre plateforme dès aujourd’hui !
                </Typography>
                <Button href="/register">
                    Pas encore inscrit ?
                </Button>
            </Container>
            <Footer />
        </>
    );
}

export default Login;