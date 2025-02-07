import "./LogoTitle.scss";
import {Link} from "react-router";
import {Box, Typography} from "@mui/material";
import logoAvif from "src/assets/images/logoBlack.avif";
import logoWebp from "src/assets/images/logoBlack.webp";
import logoPng from "src/assets/images/logoBlack.png";

const LogoTitle = () => {
    return (
        <Box sx={{display: "flex", alignItems: "center", gap: ".5rem", height: "100%"}}>
            <Link to="/" style={{display: "flex", alignItems: "center", height: "100%"}}>
                <Box component="picture" sx={{display: "flex", height: "100%"}}>
                    <source srcSet={logoAvif} type="image/avif" />
                    <source srcSet={logoWebp} type="image/webp" />
                    <img src={logoPng} alt="BeatMap Logo" style={{height: "100%", paddingBlock: "0.5rem",}}/>
                </Box>
            </Link>
            <Typography component={Link} to="/" variant="h4"
                        sx={{textDecoration: "none", fontFamily: "MoveOnly", fontWeight: 900, color: "text.primary"}}>
                Beat Map
            </Typography>
        </Box>
    );
}

export default LogoTitle;