import {jwtDecode} from "jwt-decode";
import {apiGetCurrentUser} from "./ApiService";

export const getToken = () => {
    return localStorage.getItem("access_token");
}

export const getDecodedToken = () => {
    if(getToken()){
        return jwtDecode(getToken());
    } else {
        return false;
    }
}
export const getTokenExpiration = () => {
    if(getDecodedToken() && (getDecodedToken().exp * 1000 > Date.now())){
        return true;
    } else{
        localStorage.removeItem("access_token");
        return false;
    }
}

export const getValidToken = async () => {
    if(getTokenExpiration()){
        const user = await apiGetCurrentUser(localStorage.getItem("access_token"));
        if(user.code === 200){
            return {'access_token': localStorage.getItem("access_token"), 'user': user.user};
        } else{
            localStorage.removeItem("access_token");
            return false;
        }
    } else{
        return false;
    }
}

export const getAuthInfos = async () => {
    const temp = await getValidToken();
    return {token: temp.access_token, user: temp.user};
}