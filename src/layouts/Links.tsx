//path: src/layouts/Links.tsx
// UI for managing user links

import React from "react";
import { Container, Grid } from "@mui/material";
import { LinkCard, LinkInputDialog } from "../components";

import { mockLinks } from "../Context/MockData";

import { UserLink } from "../models/UserLink";

const LinksLayout: React.FC = () => {
  const userLinks = mockLinks as UserLink[]; //TODO replace with state from context

  const linkCards = userLinks.map((el) => (
    <Grid item xs={12} sm={12} md={12} sx={{ my: 1 }} key={el.id}>
      <LinkCard key={el.id} userLink={el} />
    </Grid>
  ));

  return (
    <Container maxWidth="sm">
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={3}
        sx={{ mt: "15px" }}
      >
        <LinkInputDialog />
        <Grid spacing={2}>{linkCards}</Grid>
      </Grid>
    </Container>
  );
};

export default LinksLayout;
