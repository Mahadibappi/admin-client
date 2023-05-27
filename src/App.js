import { createTheme } from "@mui/material/styles";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "scenes/dashboard/Dashboard";
import Layout from "scenes/layout/Layout";
import Products from "scenes/products/Products";
import Customers from "scenes/customers/Customers";
import Transactions from "scenes/transaction/Transactions";
import Geography from "scenes/geography/Geography";
import Overview from "state/overview/Overview";
import DailyChart from "scenes/daily/DailyChart";
import Monthly from "scenes/monthly/Monthly";
import BreakdownChart from "components/Breakdown";
import Admins from "scenes/admins/Admins";
import Performance from "scenes/performance/Performance";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<DailyChart />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<BreakdownChart />} />
              <Route path="/admin" element={<Admins />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
