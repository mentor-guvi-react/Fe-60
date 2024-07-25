import { Grid } from "@mui/material";

import "./App.css";

import { Navbar } from "./components/Navbar";
import { HotelInformation } from "./components/HotelInformation";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const RootNode = () => (
    <Grid container width={"100%"}>
      <Navbar />
      <HotelInformation />
    </Grid>
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
