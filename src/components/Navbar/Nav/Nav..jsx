import "./Nav.scss";
import {Avatar, Box, Button, List, ListItem, ListItemIcon, Menu, MenuItem} from "@mui/material";
import React, {useState} from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Nav = ({navLinks, profilLinks, user}) => {
    const [anchorEl, setAnchorEl] = useState(null);

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
                        {user ? <Avatar src={user.avatar}/> : <AccountCircleIcon/>}
                    </ListItemIcon>
                </ListItem>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} className="profile-menu">
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