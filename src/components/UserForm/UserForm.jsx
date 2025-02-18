import React, {useState} from 'react';
import {TextField, Button, IconButton, InputAdornment, Container} from '@mui/material';
import {Visibility, VisibilityOff} from '@mui/icons-material';
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {apiRegister} from "../../services/ApiService";

export default function RegistrationForm({setStatus}) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        photo: null,
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const {name, value, files} = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        let response = await apiRegister(formData);
        if (response.meta.status === "success") {
            localStorage.setItem("access_token", response.data.token.access_token);
            document.location.href = '/';
        } else {
            setStatus({"error": "Erreur à l'inscription"});
        }
    };

    return (
        <Container maxWidth="xl">
            <form onSubmit={handleSubmit} style={{display: "grid", gap: "2rem"}}>
                <TextField
                    label="Nom"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                />
                <TextField
                    label="Mot de passe"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    required
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility} edge="end" sx={{color: "primary.main"}}>
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                    <input
                        type="file"
                        id="photo-upload"
                        name="photo"
                        hidden
                        accept="image/*"
                        onChange={handleChange}
                    />
                <label htmlFor="photo-upload">
                    <Button
                        variant="contained"
                        component="span"
                        startIcon={<CloudUploadIcon />}
                        fullWidth
                    >
                        Photo
                    </Button>
                </label>
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    S'inscrire
                </Button>
            </form>
        </Container>
    );
}
