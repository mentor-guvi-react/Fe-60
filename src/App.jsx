import { Grid } from "@mui/material";

import "./App.css";

import { Navbar } from "./components/Navbar";
import { HotelInformation } from "./components/HotelInformation";

function App() {
  return (
    <Grid container width={"100%"}>
      <Navbar />
      <HotelInformation />
    </Grid>
  );
}

export default App;
