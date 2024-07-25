import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function RegistrationModal({ open, setOpen, modalType }) {
  const [formState, setFormState] = React.useState({
    username: "",
    password: "",
    email: "",
    phonenumber: "",
    address: "",
    // confirmpassword: "",
  });

  const handleSubmit = () => {
    console.log(formState);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          setOpen(!open);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container flexDirection={"column"} gap={4}>
            <Grid item>
              <Typography variant="h4">
                {modalType === "register"
                  ? `Registration Modal`
                  : `Login Modal`}
              </Typography>
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                label={"User Name"}
                id={"username"}
                variant="outlined"
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    username: e.target.value,
                  });
                }}
              ></TextField>
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                label={"Password"}
                id={"password"}
                variant="outlined"
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    password: e.target.value,
                  });
                }}
              ></TextField>
            </Grid>

            {/* <Grid item>
              <TextField
                fullWidth
                label={"Confirm Password"}
                id={"confirmpassword"}
                variant="outlined"
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    confirmpassword: e.target.value,
                  });
                }}
              ></TextField>
            </Grid> */}

            {modalType === "register" && (
              <>
                <Grid item>
                  <TextField
                    fullWidth
                    label={"Email"}
                    id={"email"}
                    variant="outlined"
                    onChange={(e) => {
                      setFormState({
                        ...formState,
                        email: e.target.value,
                      });
                    }}
                  ></TextField>
                </Grid>

                <Grid item>
                  <TextField
                    fullWidth
                    label={"PhoneNumber"}
                    id={"Phonenumber"}
                    variant="outlined"
                    onChange={(e) => {
                      setFormState({
                        ...formState,
                        phonenumber: e.target.value,
                      });
                    }}
                  ></TextField>
                </Grid>

                <Grid item>
                  <TextField
                    fullWidth
                    label={"Address"}
                    id={"address"}
                    variant="outlined"
                    onChange={(e) => {
                      setFormState({
                        ...formState,
                        address: e.target.value,
                      });
                    }}
                  ></TextField>
                </Grid>
              </>
            )}

            <Grid item>
              <Button variant="contained" fullWidth onClick={handleSubmit}>
                {modalType === "register" ? `Register` : `Log In`}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
