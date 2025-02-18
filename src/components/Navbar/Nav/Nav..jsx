import "./Nav.scss";
import {Avatar, Box, Button, List, ListItem, ListItemIcon, Menu, MenuItem} from "@mui/material";
import React, {useContext, useState} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {AuthContext} from "../../../contexts/AuthContext";
import {imagesBaseUrl} from "../../../App";

const Nav = ({navLinks, profilLinks, user}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const {auth} = useContext(AuthContext);
    const ImagesBaseUrl = useContext(imagesBaseUrl) + 'user/';
    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{display: {xs: "none", md: 'flex'},}}>
            <List sx={{display: "flex"}}>
                {navLinks.map((link, index) => (
                    <ListItem key={index}>
                        <Button href={link['1']}
                                sx={{color: "black", "&:hover": {backgroundColor: "black", color: "primary.main"}}}>
                            {link['0']}
                        </Button>
                    </ListItem>
                ))}
                <ListItem button onClick={handleProfileClick} className="profile-icon-container">
                    <ListItemIcon className="profile-icon">
                        {auth.user ? <Avatar src={ImagesBaseUrl + auth.user.photo + '.jpg'}/> : <AccountCircleIcon/>}
                    </ListItemIcon>
                </ListItem>
                <Menu anchorEl={anchorEl} open={anchorEl} onClose={handleClose} className="profile-menu">
                    {profilLinks.map((link, index) => (
                        <MenuItem key={index}>
                            <Button href={link['1']}>
                                {link['0']}
                            </Button>
                        </MenuItem>
                    ))}
                </Menu>
            </List>
        </Box>
    )
}
export default Nav;