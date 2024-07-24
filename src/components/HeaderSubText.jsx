import {
  AppBar,
  Grid,
  TextField,
  Autocomplete,
  FormControl,
  Input,
  InputAdornment,
  Button,
} from "@mui/material";

export function HeaderSubText() {
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={10}
        style={{ borderTop: "1px solid #7d79795c" }}
    >
      <Grid item>
        <Button color="primary">Home</Button>
      </Grid>
      <Grid item>
        <Button color="primary">Book A table</Button>
      </Grid>
      <Grid item>
        <Button color="primary">Blog</Button>
      </Grid>
    </Grid>
  );
}
