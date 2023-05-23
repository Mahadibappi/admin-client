import { Box, useTheme } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useGetTransactionsQuery } from "state/api";

const Transactions = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const theme = useTheme();
  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  console.log(data);
  return <Box>Transactions</Box>;
};

export default Transactions;
