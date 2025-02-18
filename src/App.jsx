import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home";
import React, {createContext, useContext} from "react";
import Map from "./pages/Map";
import DisplayPaginatedData from "./pages/DisplayPaginatedData";
import Artist from "./pages/Artist";
import Event from "./pages/Event";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {AuthContext} from "./contexts/AuthContext";
import Logout from "./pages/Logout";
import DeleteArtist from "./pages/DeleteArtist";
import DeleteEvent from "./pages/DeleteEvent";


export const imagesBaseUrl = createContext(process.env.REACT_APP_IMAGES_BASE_URL);
export const NavLinks = createContext([['Accueil', '/'], ['Carte', '/map'], ['Artistes', '/artists'], ['Evénements', '/events']]);

function App() {
    const theme = createTheme({
        palette: {
            type: 'light',
            primary: {
                main: '#F9A602',
            },
            secondary: {
                main: '#db5b20',
            },
            text: {
                primary: '#FFFFFF',
                secondary: '#c1c1c1',
                defaut: '#000000',
            },
            background: {
                default: '#333333',
                paper: '#a6a6a6',
                burgerMenu: '#333333',
            },
            divider: '#F9A602',
        },
    });

    const { loading } = useContext(AuthContext);

    if(!loading) {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/map" element={<Map/>}/>
                        <Route path="/artists/:page?" element={<DisplayPaginatedData dataType={'artistes'}/>}/>
                        <Route path="/events/:page?" element={<DisplayPaginatedData dataType={'événements'}/>}/>
                        <Route path="/artist/:id" element={<Artist/>}/>
                        <Route path="/delete/artist/:id" element={<DeleteArtist/>}/>
                        <Route path="/event/:id" element={<Event/>}/>
                        <Route path="/delete/event/:id" element={<DeleteEvent/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                        <Route path="/register" element={<Register/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}

export default App;
