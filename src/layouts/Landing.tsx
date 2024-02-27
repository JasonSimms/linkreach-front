// import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { CampaignTable } from "../components";
//import watchdog from public folder
import watchdog from "../assets/watch_doge_by_greytonano_d7jsw62-375w-2x.jpg";

function LandingLayout() {
  const bannerStyles = {
    fontFamily: '"Link Sans", "Arial Black", Arial, sans-serif',
    fontSize: "clamp(32px, 8.5vmin, 88px)",
    fontWeight: 820,
    letterSpacing: "-0.02em",
    lineHeight: 1.05,
    textAlign: "left",
    color: "rgb(210, 232, 35)",
  };

  const infoTextStyles = {
    fontFamily: '"Link Sans", "Arial Black", Arial, sans-serif',
    fontSize: "clamp(16px, 2vmin, 20px)",
    fontWeight: 418,
    letterSpacing: "-0.02em",
    lineHeight: 1.5,
    mb: "16px",
    color: "rgb(210, 232, 35)",
  };

  return (
    <Box
      sx={{
        // height: "100vh",
        bgcolor: "rgba(0, 0, 0, 0.7)",
        borderRadius: 2,
        padding: "15px 15px",
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={12} md={7} sx={{ p: 2, textAlign: "left" }}>
          <Typography variant="h2" sx={bannerStyles} gutterBottom>
            Customized Hyperlink Traffic Capture!
          </Typography>
          <Typography variant="body1" sx={infoTextStyles} gutterBottom>
            Does github show repo visit count? Better to know who , when , and
            how the visitors came to see it!
          </Typography>
          <br />

          <Button size="large" variant="contained" color="secondary">
            Get Started!
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            src={watchdog} // Replace with your image URL
            sx={{ width: "100%", objectFit: "fit", borderRadius: 2 }}
            alt="App"
          />
        </Grid>
        <br />
        <br />
        <Grid item xs={12} md={12} lg={12} sx={{ p: 2 }}>
          <CampaignTable />
        </Grid>
      </Grid>
    </Box>
  );
}

export default LandingLayout;
