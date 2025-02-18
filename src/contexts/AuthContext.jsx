import { createContext, useEffect, useState } from "react";
import { getAuthInfos } from "../services/Token";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAuth = async () => {
            const authData = await getAuthInfos();
            setAuth(authData);
            setLoading(false);
        };

        fetchAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ auth, setAuth, loading }}>
            {children}
        </AuthContext.Provider>
    );
}
