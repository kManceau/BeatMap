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
                    <Typography>
                        BeatMap vous permets de recenser les concerts et festivals autour de vous !
                    </Typography>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus excepturi id necessitatibus obcaecati reiciendis rem repudiandae. Cumque omnis pariatur sit! Accusantium adipisci aspernatur dicta, dignissimos earum ex iste molestiae quibusdam rem? Aliquam asperiores at deleniti iure possimus quae veniam! Consequatur delectus dignissimos dolor doloribus dolorum excepturi natus saepe totam voluptatibus.
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