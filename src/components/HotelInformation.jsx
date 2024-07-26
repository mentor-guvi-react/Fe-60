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

import React from "react";

import { Filter } from "./Filter";
import { HotelCards } from "./HotelCards";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import { useParams } from "react-router-dom";

export function HotelInformation() {
  const [selectedTags, setSelectedTags] = React.useState([]);

  const { location } = useParams();

  const breadcrumbs = [
    <Typography key="3" color="text.primary">
      {location}
    </Typography>,
    <Typography key="3" color="text.primary">
      {location} Restaurents
    </Typography>,
  ];

  const handleFilterChange = (event) => {
    if (selectedTags.find((e) => e === event.target.value)) {
      const updatedTags = selectedTags.filter((e) => e !== event.target.value);
      setSelectedTags([...updatedTags]);
      return;
    }
    setSelectedTags([...selectedTags, event.target.value]);
  };

  console.log(selectedTags, "selectedTags");
  return (
    <Grid
      container
      display={"flex"}
      flexDirection={"row"}
      gap={2}
      width={"100%"}
      marginTop={1}
    >
      <Grid item maxWidth={"30%"}>
        <Filter handleFilterChange={handleFilterChange} />
      </Grid>
      <Grid item width={"75%"}>
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
                    Best Restaurants Near Me in {location}
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
                        value={1}
                        label="Age"
                        onChange={() => {}}
                        style={{
                          verticalAlign: "baseline",
                        }}
                      >
                        {sortData.map((element) => {
                          return (
                            <MenuItem key={element.value} value={element.value}>
                              {element.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <HotelCards location={location} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const sortData = [
  { value: 1, name: "Rating" },
  { value: 2, name: "Price Low to High" },
  { value: 3, name: "Price High to Low" },
];
