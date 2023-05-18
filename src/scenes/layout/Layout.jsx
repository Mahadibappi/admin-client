import { Box } from "@mui/material";
import NavBar from "components/navbar/NavBar";
import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box width="100%" height="100%">
      <Box>
        <NavBar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
