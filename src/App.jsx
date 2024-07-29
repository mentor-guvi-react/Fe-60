import { Grid } from "@mui/material";

import "./App.css";

import { Navbar } from "./components/Navbar";
import { HotelInformation } from "./components/HotelInformation";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [searchedHotel, setSearchedHotel] = useState("");

  const RootNode = () => (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Grid container width={"100%"}>
        <Navbar
          setSearchedHotel={setSearchedHotel}
          searchedHotel={searchedHotel}
        />
        <HotelInformation searchedHotel={searchedHotel} />
      </Grid>
    </ThemeProvider>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:location" element={<RootNode />}></Route>
        <Route path="*" element={<RootNode />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
