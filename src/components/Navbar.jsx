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
import { RegistrationModal } from "./RegistrationModal";
import { MyBookingModal } from "./MyBookingModal";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

export function Navbar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("login");

  const [bookingModelOpen, setBookingModelOpen] = useState(false);

  const username = localStorage.getItem("username");

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
                onChange={(event) => {
                  console.log(event.target.innerHTML, "element");
                  navigate("/" + event.target.innerHTML);
                }}
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

            {username ? (
              <>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      setBookingModelOpen(true);
                    }}
                  >
                    My Booking
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      localStorage.setItem("username", "");
                      window.location.reload();
                    }}
                  >
                    Log out
                  </Button>
                </Grid>
              </>
            ) : (
              <>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      setOpen(true);
                      setModalType("login");
                    }}
                  >
                    Log in
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      setOpen(true);
                      setModalType("register");
                    }}
                  >
                    Register
                  </Button>
                </Grid>
              </>
            )}
          </Grid>

          <HeaderSubText />
        </AppBar>
      </Grid>
      {open && (
        <RegistrationModal
          modalType={modalType}
          open={open}
          setOpen={() => setOpen(!open)}
        />
      )}

      {bookingModelOpen && (
        <MyBookingModal
          bookingModelOpen={bookingModelOpen}
          setBookingModelOpen={() => setBookingModelOpen(!bookingModelOpen)}
        />
      )}
    </Grid>
  );
}

const Locations = [
  { label: "Chennai", id: 456 },
  { label: "Delhi", id: 123 },
  { label: "Mumbai", id: 987 },
];
