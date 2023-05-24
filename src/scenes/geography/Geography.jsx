import { Box, useTheme } from "@mui/material";
import Header from "components/header/Header";
import React from "react";
import { useGetGeographyQuery } from "state/api";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoData } from "state/geoData";

const Geography = () => {
  const theme = useTheme();
  const { data } = useGetGeographyQuery();

  return (
    <Box>
      <Header title={"Geography"} subTitle={""} />
      Geography
    </Box>
  );
};

export default Geography;
