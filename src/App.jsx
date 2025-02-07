import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router";
import Home from "./pages/Home";

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
            text:{
                defaut: '#000000',
            },
            background: {
                default: '#333333',
                paper: '#a6a6a6',
                burgerMenu : '#333333',
            },
            divider: '#F9A602',
        },
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
