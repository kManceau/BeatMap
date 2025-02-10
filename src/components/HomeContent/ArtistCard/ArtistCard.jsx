import "./ArtistCard.scss";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useContext} from "react";
import {imagesBaseUrl} from "../../../App";

const ArtistCard = ({artist}) => {
    const ImagesBaseUrl = useContext(imagesBaseUrl);

    return (
        <Card sx={{minWidth: 340, maxWidth: 340, backgroundColor: "background.default", display: "flex", flexDirection: "column", boxShadow: "5px 5px 10px 0px rgba(0,0,0,.5)", marginBlockEnd: "1rem"}}>
            <CardMedia component="picture" sx={{objectFit: "cover"}}>
                <source srcSet={`${ImagesBaseUrl}artist/${artist.photo}.avif`} type="image/avif"/>
                <source srcSet={`${ImagesBaseUrl}artist/${artist.photo}.webp`} type="image/webp"/>
                <img src={`${ImagesBaseUrl}artist/${artist.photo}.jpg`} alt={artist.name} loading="lazy"
                     style={{height: "140px", width: "100%", objectFit: "cover"}}/>
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"
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
                <Button size="small" color="primary" >
                    Voir l'artiste
                </Button>
            </CardActions>
        </Card>
    )
}
export default ArtistCard;