import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import OverviewChart from "components/OverviewChart";
import StatBox from "components/StatBox";
import Header from "components/header/Header";
import React from "react";
import { useGetDashboardQuery } from "state/api";

const Dashboard = () => {
  const theme = useTheme();
  const { data, isLoadinng } = useGetDashboardQuery();
  const isNonMedium = useMediaQuery("(min-width:1200px)");
  console.log(data);
  return (
    <Box>
      <FlexBetween>
        <Header title="Dashboard" subtitle="This is your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ ml: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{ "&>div": { gridColumn: isNonMedium ? undefined : "span 12" } }}
      >
        {/* Row one */}
        <StatBox
          title="Total Customers"
          value={data && data.totalCustomers}
          increase="+12%"
          description="Since last month"
          icon={
            <Email
              sx={{ color: theme.palette.secondary[300], fontSize: "30px" }}
            />
          }
        />
        <StatBox
          title="Sales Today"
          value={data && data.todayStat.totalSales}
          increase="+31%"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{ color: theme.palette.secondary[300], fontSize: "30px" }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <OverviewChart view="Sales" isDashboard={true} />
        </Box>
        <StatBox
          title="Monthly Sale"
          value={data && data.thisMonthStats.totalSales}
          increase="+7%"
          description="Since last month"
          icon={
            <PersonAdd
              sx={{ color: theme.palette.secondary[300], fontSize: "30px" }}
            />
          }
        />
        <StatBox
          title="Yearly Sales"
          value={data && data.yearlySalesTotal}
          increase="+45%"
          description="Since last month"
          icon={
            <Traffic
              sx={{ color: theme.palette.secondary[300], fontSize: "30px" }}
            />
          }
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
