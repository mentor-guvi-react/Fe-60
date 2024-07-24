import {
  AppBar,
  Grid,
  TextField,
  Autocomplete,
  FormControl,
  Input,
  MenuItem,
  Typography,
  Select,
  Breadcrumbs,
} from "@mui/material";
import { Filter } from "./Filter";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export function HotelInformation() {
  const breadcrumbs = [
    <Typography key="3" color="text.primary">
      Chennai
    </Typography>,
    <Typography key="3" color="text.primary">
      Chennai Restaurents
    </Typography>,
  ];

  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"row"}
      gap={1}
      width={"100%"}
      marginTop={1}
    >
      <Grid item maxWidth={"30%"}>
        <Filter />
      </Grid>
      <Grid item width={"65%"}>
        <Grid container gap={2} flexDirection={"column"}>
          <Grid item>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Grid>
          <Grid item>
            <Grid container justifyContent={"space-between"}>
              <Grid item>
                <Grid container alignItems={"center"} gap={1}>
                  <Typography key="3" variant="h5" color="text.primary">
                    Best Restaurants Near Me in Chennai
                  </Typography>

                  <Typography key="3" variant="caption" color="text.primary">
                    (7882)
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Grid
                  container
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={2}
                >
                  <Grid item>
                    <Typography
                      textAlign={"center"}
                      variant="h6"
                      color="text.primary"
                    >
                      Sort By
                    </Typography>
                  </Grid>
                  <Grid item>
                    <FormControl
                      style={{
                        width: 150,
                        height: 30,
                        verticalAlign: "super",
                      }}
                    >
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={10}
                        label="Age"
                        onChange={() => {}}
                        style={{
                          verticalAlign: "baseline",
                        }}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>3</Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
