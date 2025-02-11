import "./BurgerMenu.scss";
import React, {useState} from "react";
import {
    Drawer,
    List,
    ListItem,
    IconButton,
    Avatar,
    Divider,
    ListItemIcon,
    Box, Button, InputAdornment, OutlinedInput
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const BurgerMenu = ({navLinks, profilLinks, user}) => {
    const [open, setOpen] = useState(+false);
    const [search, setSearch] = useState("");

    const toggleDrawer = (state) => () => {
        setOpen(state);
    };


    return (
        <Box sx={{display: {xs: "flex", md: 'none'},}}>
            <IconButton onClick={toggleDrawer(+true)}>
                <MenuIcon/>
            </IconButton>

            <Drawer anchor="left" open={+open} onClose={toggleDrawer(+false)}
                    sx={{'& .MuiDrawer-paper': {width: '100%', backgroundColor: 'background.burgerMenu'}}}>
                <IconButton onClick={toggleDrawer(+false)} style={{alignSelf: "flex-end", margin: 8}}>
                    <CloseIcon sx={{color: "primary.main"}}/>
                </IconButton>
                <List>
                    <ListItem>
                        <Button href={"/profile"}>
                            <ListItemIcon>
                                {user ? <Avatar src={user.avatar}/> : <AccountCircleIcon sx={{color: "primary.main"}}/>}
                            </ListItemIcon>
                        </Button>
                    </ListItem>

                    {profilLinks.map((link, index) => (
                        <ListItem key={index}>
                            <Button href={link['1']}>
                                {link['0']}
                            </Button>
                        </ListItem>
                    ))}

                    <Divider sx={{marginBlock: "1rem", width: '75%', marginInline: 'auto'}}/>

                    {navLinks.map((link, index) => (
                        <ListItem key={index}>
                            <Button href={link['1']}>
                                {link['0']}
                            </Button>
                        </ListItem>
                    ))}
                    <ListItem>
                        <OutlinedInput
                            fullWidth
                            type="text"
                            placeholder="Rechercher..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            sx={{ color: "primary.main", "& fieldset": {borderColor: "primary.main"}}}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchIcon sx={{color: "primary.main"}}/>
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};

export default BurgerMenu;
