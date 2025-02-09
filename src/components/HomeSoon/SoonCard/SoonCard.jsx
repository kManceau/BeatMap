import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useContext} from "react";
import {imagesBaseUrl} from "../../../App";

const SoonCard = ({event}) => {
    const ImagesBaseUrl = useContext(imagesBaseUrl);
    const startDate = new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(event.start_date));
    const endDate = new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(event.end_date));

    return (
        <Card sx={{minWidth: 345, maxWidth: 345, backgroundColor: "background.default", display: "flex", flexDirection: "column", boxShadow: "5px 5px 10px 0px rgba(0,0,0,.5)", marginBlockEnd: "1rem"}}>
            <CardMedia component="picture" sx={{objectFit: "cover"}}>
                <source srcSet={`${ImagesBaseUrl}event/${event.photo}.avif`} type="image/avif"/>
                <source srcSet={`${ImagesBaseUrl}event/${event.photo}.webp`} type="image/webp"/>
                <img src={`${ImagesBaseUrl}event/${event.photo}.jpg`} alt={event.name} loading="lazy"
                     style={{height: "140px", width: "100%", objectFit: "cover"}}/>
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"
                            sx={{overflow: "hidden", textOverflow: 'ellipsis'}}>
                    {event.name}
                    <Typography sx={{color: 'text.secondary'}}>
                        {event.type.substring(0, 1).toUpperCase() + event.type.substring(1)}
                    </Typography>
                    <Typography sx={{color: 'text.secondary', marginBlockStart: '1rem'}}>
                        {event.start_date === event.end_date ? "Le " + startDate : `Du ${startDate} au ${endDate}`}
                    </Typography>
                    <Typography sx={{color: 'text.secondary'}}>
                        {`A ${event.place.city}`}
                    </Typography>
                </Typography>
                <Typography variant="body2" sx={{flexGrow: 1, color: 'text.secondary', marginBlockStart: '2rem'}}>
                    {(event.description).length > 100 ? (event.description).substring(0, 100) + " (...)" : (event.description)}
                </Typography>
            </CardContent>
            <CardActions sx={{marginBlockStart: "auto"}}>
                <Button size="small" color="primary" >
                    Voir l'évènement
                </Button>
            </CardActions>
        </Card>
    )
}
export default SoonCard;