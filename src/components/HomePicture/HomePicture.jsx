import {Box} from "@mui/material";


const HomePicture = ({number}) => {
    const jpg = require(`src/assets/images/home-picture-${number}.jpg`);
    const webp = require(`src/assets/images/home-picture-${number}.webp`);
    const avif = require(`src/assets/images/home-picture-${number}.avif`);

    return (
        <Box sx={{
                 width: "100vw",
                 height: "50vh",
                 backgroundImage: `image-set(url(${avif}) 1x, url(${webp}) 1x, url(${jpg}) 1x);`,
                 backgroundRepeat: "no-repeat",
                 backgroundSize: "cover",
                 backgroundPosition: "center",
            }} />
    )
};

export default HomePicture;
