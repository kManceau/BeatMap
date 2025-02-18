import "./LoginForm.scss";
import {Box, Button, Container, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import {apiLogin} from "../../services/ApiService";

const LoginForm = ({setStatus}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        let response = await apiLogin(formData);
        if (response.meta.status === "success") {
            localStorage.setItem("access_token", response.data.token.access_token);
            document.location.href = '/';
        } else {
            setStatus({"error": "Erreur de connexion"});
        }
    };

    return (
        <Container maxWidth="xl" sx={{paddingBlock: "2rem"}} id="login-form">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: {xs: "center", md: "start"},
                    p: 3,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Connexion
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{width: "100%"}}>
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        sx={{ color: "primary.main", "& fieldset": {borderColor: "primary.main"}}}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Mot de passe"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        sx={{ color: "primary.main", "& fieldset": {borderColor: "primary.main"}}}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={() => setShowPassword(!showPassword)} sx={{color: 'primary.main'}}>
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button type="submit" variant="contained" sx={{mt: 2, width: {xs: "100%", md:"auto"}}}>
                        Se connecter
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default LoginForm;