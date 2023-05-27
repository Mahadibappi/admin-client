import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import OverviewChart from "components/OverviewChart";
import Header from "components/header/Header";
import React from "react";
import { useState } from "react";

const Overview = () => {
  const theme = useTheme();
  const [view, setView] = useState("units");

  return (
    <Box ml="5px">
      <Header
        title={"Overview"}
        subtitle={"Overview of general revenue and profit"}
      />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            label="View"
            value={view}
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
