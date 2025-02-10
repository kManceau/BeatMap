import "./Navbar.scss";
import AppBar from '@mui/material/AppBar';
import {Container, Toolbar} from "@mui/material";
import LogoTitle from "./LogoTitle/LogoTitle";
import BurgerMenu from "./BugerMenu/BurgerMenu";
import Nav from "./Nav/Nav.";
import {useContext} from "react";
import {NavLinks, ProfilLinks} from "../../App";

export default function AppBaNComponent() {
    const navLinks = useContext(NavLinks);
    const profilLinks = useContext(ProfilLinks);

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
        </>
    );
}
