import "./Hero.scss";
import {Box, Button, Container, Typography} from "@mui/material";
import logoAvif from "src/assets/images/BeatMapLogo.avif";
import logoWebp from "src/assets/images/BeatMapLogo.webp";
import logoPng from "src/assets/images/BeatMapLogo.png";

const Hero = () => {
    return (
        <Box className="hero-background">
            <Container maxWidth="xl"  className="hero-container">
                <Box className="hero-content-xs">
                    <Box component="picture">
                        <source srcSet={logoAvif} type="image/avif"/>
                        <source srcSet={logoWebp} type="image/webp"/>
                        <img src={logoPng} alt="BeatMap Logo" className="hero-logo"/>
                    </Box>
                    <Typography component="h1" variant="h6">
                        BeatMap vous permets de recenser les concerts et festivals autour de vous !
                    </Typography>
                    <Typography>
                        Que vous soyez un mélomane passionné ou simplement en quête d’une sortie musicale, BeatMap est l’outil parfait pour découvrir les concerts et festivals autour de vous et partout dans le monde.
                    <br />
                        Grâce à son interface intuitive et sa carte interactive, BeatMap vous permet de visualiser en un coup d'œil tous les événements musicaux à venir. Plus besoin de fouiller des dizaines de sites pour trouver le concert parfait : tout est centralisé au même endroit !
                    <br />
                        Que vous soyez amateur de rock, d’électro, de jazz ou de musique classique, BeatMap est votre compagnon idéal pour planifier vos sorties musicales et découvrir de nouveaux artistes. Explorez, vibrez et laissez la musique vous guider !
                    </Typography>
                    <Button variant="contained" href="#explore" size="large">
                        Parcourir notre carte
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default Hero;