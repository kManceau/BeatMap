import "./Footer.scss";
import {Box, Button, Container, List, ListItem, Typography} from "@mui/material";
import React, {useContext} from "react";
import {NavLinks} from "../../App";
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import {AuthContext} from "../../contexts/AuthContext";

const Footer = () => {
    const {auth} = useContext(AuthContext);
    const navLinks = useContext(NavLinks);
    let profilLinks = [['Se connecter', '/login'], ['S\'inscrire', '/register']];
    if(auth.user) {
        profilLinks = [['Mon compte', '/profile'], ['Déconnexion', '/logout']];
    }

    return (
        <Box sx={{backgroundColor: "#333333", paddingBlock: "2rem"}} id="footer">
            <Container maxWidth="xl" className="footer-container">
                <Typography variant="h3" sx={{color: "primary.main"}}>
                    BeatMap
                    <Typography variant="body2" sx={{color: "primary.main"}}>
                        © Tout droits réservés (ou pas). Créé par Kevin Manceau dans le cadre de la formation CDA.
                    </Typography>
                </Typography>
                <Box className="footer-links-container">
                    <List className="footer-links">
                        {navLinks.map((link, index) => (
                            <ListItem key={index}>
                                <Button href={link['1']} size="small" className="footer-button">
                                    {link['0']}
                                </Button>
                            </ListItem>
                        ))}
                        {profilLinks.map((link, index) => (
                            <ListItem key={index}>
                                <Button href={link['1']} size="small" className="footer-button">
                                    {link['0']}
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                    <Box className="footer-links social-links">
                        <Button href="https://github.com/kManceau" target="_blank" size="small" className="footer-button">
                            <GitHubIcon/>
                        </Button>
                        <Button href="mailto:kevin.manceau@gmail.com" size="small" className="footer-button">
                            <AlternateEmailIcon />
                        </Button>
                        <Button href="https://www.linkedin.com/in/kevin-manceau/" target="_blank" size="small" className="footer-button">
                            <LinkedInIcon />
                        </Button>
                        <Button href="https://beatmap.kmanceau.fr" target="_blank" size="small" className="footer-button">
                            <PublicIcon />
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}
export default Footer;