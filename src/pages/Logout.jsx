import {useContext, useEffect} from "react";
import {AuthContext} from "../contexts/AuthContext";
import {apiLogout} from "../services/ApiService";

const Logout = () => {
    const {auth} = useContext(AuthContext);
    const logginOut = async () => {
        const temp = await apiLogout(auth.token);
        localStorage.removeItem("access_token");
        document.location.href = "/";
    }

    logginOut();
}

export default Logout;