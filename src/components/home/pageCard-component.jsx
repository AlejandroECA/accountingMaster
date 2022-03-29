import React from "react";
import { Grid, Button, Box, Paper, Typography } from "@material-ui/core";

import { Link } from "react-router-dom";

export const CardComponent = ({ cardText, buttonText, img, to }) => {
  return (
    <Grid
      container
      direction="column"
      // justifyContent='center'
      // alignItems='flex-start'
      sx={{ borderRadius: 10 }}
      style={{
        backgroundColor: "#EEEEEE",
        borderRadius: 10,
        boxShadow: "3px 3px 3px gray",
        maxWidth: "90vw",
        margin: "auto",
        color: "gray",
        paddingTop: "20px",
      }}
    >
      <Grid
        item
        xs={12}
        style={{
          marginTop: "20px",
          display: "flex",
          width: "85vw",
          // maxWidth:'800px',
          marginLeft: "20px",
          marginBottom: buttonText ? 0 : "20px",
        }}
      >
        {img ? (
          <Grid item xs={false} md={6}>
            <img
              src={img}
              style={{ width: "40vw", marginRight: "20px" }}
              alt="img"
            />
          </Grid>
        ) : null}

        <Grid item xs={12} s={12} md={8}>
          {cardText}
        </Grid>
      </Grid>
      {buttonText ? (
        <Button
          variant="contained"
          to={to}
          style={{
            margin: "10px",
            marginBottom: "20px",
          }}
          component={Link}
        >
          {buttonText}
        </Button>
      ) : null}
    </Grid>
  );
};
