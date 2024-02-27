import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { CampaignTable } from "../components";

const HomeLayout: React.FC = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant="h5">
            Customized Hyperlink Traffic Capture!
          </Typography>
          <Typography variant="h4">LinkReach</Typography>
          <Typography variant="body1">
            Does github show repo visit count? Better to know who , when , and
            how the visitors came to see it!
          </Typography>
        </Paper>
      </Grid>
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
      <CampaignTable />
    </Grid>
  );
};

export default HomeLayout;
