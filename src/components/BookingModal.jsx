import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import Slider from "@mui/material/Slider";

import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Chip from "@mui/material/Chip";

export function BookingModal({ open, setOpen, hotelId }) {
  const [bookingState, setBookingState] = React.useState({
    selectedTime: "",
    selectedSeats: "",
    selectedDate: "",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
  };

  const handleDateChange = (date) => {
    const month = new Date(date).getMonth() + 1;
    const year = new Date(date).getFullYear();
    const day = new Date(date).getDate();

    setBookingState({
      ...bookingState,
      selectedDate: `${day}-${month}-${year}`,
    });
  };

  return (
    <div>
      <div>
        <Modal
          open={open}
          onClose={() => {
            setOpen();
          }}
        >
          <Box sx={style}>
            <Grid
              container
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={4}
            >
              <Grid item width={"100%"}>
                <div
                  style={{
                    background: "black",
                    width: "100%",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h5">Select an Offer or Deal</Typography>
                </div>
              </Grid>

              <Grid width={"90%"} item textAlign={"center"}>
                <Typography variant="h5">Select Seats</Typography>
                <Slider
                  defaultValue={0}
                  valueLabelDisplay="auto"
                  shiftStep={1}
                  step={1}
                  marks
                  min={0}
                  max={10}
                  onChange={(e) => {
                    setBookingState({
                      ...bookingState,
                      selectedSeats: e.target.value,
                    });
                  }}
                />
              </Grid>

              <Grid item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      onChange={handleDateChange}
                      label="Select Date"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Grid>

              <Grid item>
                <Typography paddingBottom={4} textAlign={"center"} variant="h5">
                  Select Time
                </Typography>
                <Grid container justifyContent={"center"} spacing={2}>
                  {timeSlots.map((ele) => {
                    return (
                      <Grid item key={ele}>
                        <Chip
                          label={ele}
                          variant="outlined"
                          color={
                            ele === bookingState.selectedTime
                              ? "success"
                              : "default"
                          }
                          onClick={() => {
                            setBookingState({
                              ...bookingState,
                              selectedTime: ele,
                            });
                          }}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>

              <Grid item paddingBottom={4}>
                <Button
                  variant="contained"
                  onClick={(e) => {
                    console.log(bookingState);
                  }}
                >
                  Make Booking
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

const timeSlots = [
  "10 am - 11 am",
  "11 am - 12 am",
  "12 am - 1 am",
  "1 pm - 2 pm",
  "6 pm - 7 pm",
  "7 pm - 8 pm",
  "8 pm - 9 pm",
  "9 pm - 10 pm",
];
