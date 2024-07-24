import {
  AppBar,
  Grid,
  TextField,
  Autocomplete,
  FormControl,
  Input,
  InputAdornment,
  Button,
  Toolbar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { HeaderSubText } from "./HeaderSubText";

export function Navbar() {
  return (
    <Grid container width={"100%"}>
      <Grid item width={"100%"}>
        <AppBar position="static" color="transparent">
          <Grid
            container
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            gap={2}
            padding={1}
            alignItems={"center"}
          >
            <Grid item>
              <img src="https://www.guvi.in/web-build/images/guvi-logo.8eeef9e2027d374479531095b012a87e.svg" />
            </Grid>
            <Grid item>
              <Autocomplete
                disablePortal
                id="location-options"
                options={Locations}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Locations" />
                )}
              />
            </Grid>
            <Grid item>
              <FormControl variant="filled" style={{ width: 330 }}>
                <Input
                  placeholder="Seach for Hotels"
                  startAdornment={
                    <InputAdornment>
                      <SearchIcon></SearchIcon>
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment>
                      <Button style={{ height: 30 }}>Search</Button>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item>
              <Button variant="contained">Log in</Button>
            </Grid>
            <Grid item>
              <Button variant="contained">Register</Button>
            </Grid>
          </Grid>

          <HeaderSubText />
        </AppBar>
      </Grid>
    </Grid>
  );
}

const Locations = [
  { label: "Chennai", id: 456 },
  { label: "Delhi", id: 123 },
  { label: "Mumbai", id: 987 },
];
