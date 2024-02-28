import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  ButtonGroup,
} from "@mui/material";
import { CampaignTable } from "../components";

import { useNavigate } from "react-router-dom";

// const BannerStyles = {
//   fontFamily: '"Link Sans", "Arial Black", Arial, sans-serif',
//   fontSize: "clamp(32px, 8.5vmin, 88px)",
//   fontWeight: 820,
//   letterSpacing: "-0.02em",
//   lineHeight: 1.05,
//   textAlign: "left",
//   color: "rgb(210, 232, 35)",
// };

const HomeLayout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        // height: "100vh",
        bgcolor: "rgba(0, 0, 0, 0.7)",
        borderRadius: 2,
        padding: "15px 15px",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Typography variant="h6">Dashboard</Typography>
            <Typography variant="body1">
              Today, 350 users have clicked on this site.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper>
            <Typography variant="h6">How it works</Typography>
            <Typography variant="body1">
              Simply provide a URL and my Bitly API will do the rest. Paste your
              shortened link on resumes, websites, qr codes, and more!
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <ButtonGroup variant="outlined" aria-label="Campaign Button Group">
            <Button size="large" variant="contained" color="secondary">
              Start a Campaign
            </Button>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              onClick={() => navigate("/links")}
            >
              Review your links
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={12}>
          <CampaignTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeLayout;
