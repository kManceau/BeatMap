import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext";
import {useParams} from "react-router";
import {apiDeleteEvent} from "../services/ApiService";

const DeleteEvent = () => {
    const {auth} = useContext(AuthContext);
    const {id} = useParams();
    const deleting = async () => {
        await apiDeleteEvent(id, auth.token);
        document.location.href = "/events";
    }

    if (auth && auth.user && auth.user.role === 'admin')
    {
        deleting();
    } else{
        window.history.back();
    }
}

export default DeleteEvent;