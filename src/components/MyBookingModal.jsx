import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import { apiUrl } from "../api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export function MyBookingModal({ bookingModelOpen, setBookingModelOpen }) {
  const [bookingRecords, setBookingRecords] = React.useState([]);

  const getBookings = () => {
    const username = localStorage.getItem("username");

    axios.get(apiUrl + "mybooking/" + username).then((response) => {
      setBookingRecords(response.data);
    });
  };

  React.useEffect(() => {
    getBookings();
  }, []);

  return (
    <div>
      <Modal
        open={bookingModelOpen}
        onClose={() => {
          setBookingModelOpen(!bookingModelOpen);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <BookingTable
            bookingRecords={bookingRecords}
            setBookingModelOpen={setBookingModelOpen}
          />
        </Box>
      </Modal>
    </div>
  );
}

// TO Be created as sepearate component

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function BookingTable({ bookingRecords, setBookingModelOpen }) {
  const [cancelledId, setcancelledId] = React.useState("");

  const handleCancelBooking = (row) => {
    axios
      .put(apiUrl + "cancelBooking", {
        bookingId: row._id,
      })
      .then((response) => {
        setcancelledId(response.data._id);
        // setBookingModelOpen();
      });
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell> Booking Id </StyledTableCell>
            <StyledTableCell align="right"> Name</StyledTableCell>
            <StyledTableCell align="right"> Time </StyledTableCell>
            <StyledTableCell align="right"> Seats </StyledTableCell>
            <StyledTableCell align="right"> Date </StyledTableCell>
            <StyledTableCell align="right"> </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookingRecords?.map((row) => (
            <StyledTableRow key={row._id}>
              <StyledTableCell component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.hotelId.slice(0, 10)}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.selectedTime}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.selectedSeats}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.selectedDate}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  onClick={() => handleCancelBooking(row)}
                  variant="contained"
                  color="error"
                >
                  {cancelledId === row._id || row.isCancelled
                    ? `Cancelled`
                    : `Cancel`}
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
