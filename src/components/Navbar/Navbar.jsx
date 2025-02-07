import "./Navbar.scss";
import AppBar from '@mui/material/AppBar';
import {Container, Toolbar} from "@mui/material";
import LogoTitle from "./LogoTitle/LogoTitle";
import BurgerMenu from "./BugerMenu/BurgerMenu";
import Nav from "./Nav/Nav.";


export default function AppBarComponent() {
    const navLinks = [['Accueil', '/'], ['Artistes', '/artists'], ['Evénements', '/events']];
    const profilLinks = [];
    const token = localStorage.getItem("token");
    if(token){
        profilLinks.push(['Mon profil', '/profil']);
        profilLinks.push(['Se déconnecter', '/logout']);
    } else {
        profilLinks.push(['Se connecter', '/login']);
        profilLinks.push(['S\'inscrire', '/register']);
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar disableGutters>
                    <Container maxWidth="xl" sx={{height: "4rem", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <LogoTitle />
                        <BurgerMenu navLinks={navLinks} profilLinks={profilLinks} />
                        <Nav navLinks={navLinks} profilLinks={profilLinks} />
                    </Container>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    );
}
