import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import Header from "components/header/Header";
import { useGetProductsQuery } from "state/api";

const Product = ({
  _id,
  name,
  description,
  price,
  category,
  supply,
  rating,
  stat,
}) => {
  const theme = useTheme();
  const [isExpand, setIsExpand] = useState();
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: "14" }}
          color={theme.palette.secondary[700]}
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography>${Number(price).toFixed(2)}</Typography>
        <Rating value={rating} readOnly />
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => {
            setIsExpand(!isExpand);
          }}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpand}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>id:{_id}</Typography>
          <Typography>Supply Left:{supply}</Typography>
          <Typography>
            Yearly Sales This Year:{stat.yearlySalesTotal}
          </Typography>
          <Typography>
            Yearly Units Sold This Year:{stat.yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width:1000px)");
  console.log(data);
  return (
    <Box>
      <Header title="Products" subTitle="See Your List Of Products" />

      {data || !isLoading ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minMax(0,1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& >div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {data.map(
            ({
              _id,
              name,
              description,
              price,
              category,
              supply,
              rating,
              stat,
            }) => (
              <Product
                key={_id}
                _id={_id}
                name={name}
                description={description}
                price={price}
                category={category}
                supply={supply}
                rating={rating}
                stat={stat}
              />
            )
          )}
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Products;
