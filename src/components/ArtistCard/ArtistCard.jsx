import "./ArtistCard.scss";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useContext} from "react";
import {imagesBaseUrl} from "../../App";
import defaultAvif from "src/assets/images/artist-default.avif";
import defaultWebp from "src/assets/images/artist-default.webp";
import defaultJpg from "src/assets/images/artist-default.jpg";

const ArtistCard = ({artist}) => {
    const ImagesBaseUrl = useContext(imagesBaseUrl) + 'artist/';
    let photoUrl = {avif: defaultAvif, webp: defaultWebp, jpg: defaultJpg};

    if(artist.photo){
        photoUrl = {avif: ImagesBaseUrl + artist.photo + '.avif', webp: ImagesBaseUrl + artist.photo + '.webp', jpg: ImagesBaseUrl + artist.photo + '.jpg'};
    }

    return (
        <Card sx={{minWidth: 340, maxWidth: 340, backgroundColor: "background.default", display: "flex", flexDirection: "column", boxShadow: "5px 5px 10px 0px rgba(0,0,0,.5)", marginBlockEnd: "1rem"}}>
            <CardMedia component="picture" sx={{objectFit: "cover"}}>
                <source srcSet={photoUrl.avif} type="image/avif"/>
                <source srcSet={photoUrl.webp} type="image/webp"/>
                <img src={photoUrl.jpg} alt={artist.name} loading="lazy"
                     style={{height: "140px", width: "100%", objectFit: "cover"}}/>
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" tabIndex="0"
                            sx={{overflow: "hidden", textOverflow: 'ellipsis'}}>
                    {artist.name}
                    <Typography sx={{color: 'text.secondary'}}>
                        {artist.style.name}
                    </Typography>
                </Typography>
                <Typography variant="body2" sx={{flexGrow: 1, color: 'text.secondary', marginBlockStart: '2rem'}}>
                    {(artist.description).length > 100 ? (artist.description).substring(0, 100) + " (...)" : (artist.description)}
                </Typography>
            </CardContent>
            <CardActions sx={{marginBlockStart: "auto"}}>
                <Button size="small" color="primary" href={'/artist/' + artist.id}>
                    Voir l'artiste
                </Button>
            </CardActions>
        </Card>
    )
}
export default ArtistCard;