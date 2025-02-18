import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
import {useParams} from "react-router";
import {apiDeleteArtist} from "../services/ApiService";

const DeleteArtist = () => {
    const {auth} = useContext(AuthContext);
    const {id} = useParams();
    const deleting = async () => {
        await apiDeleteArtist(id, auth.token);
        document.location.href = "/artists";
    }

    if (auth && auth.user && auth.user.role === 'admin')
    {
        deleting();
    } else{
        window.history.back();
    }
}

export default DeleteArtist;