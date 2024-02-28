//path: src/layouts/Links.tsx
// UI for managing user links

import React from "react";
import { Container, Grid } from "@mui/material";
import { LinkCard, LinkInputDialog } from "../components";

import { mockLinks } from "../context/MockData";

import { UserLink } from "../models/UserLink";

const LinksLayout: React.FC = () => {
  const userLinks = mockLinks as UserLink[]; //TODO replace with state from context

  const linkCards = userLinks.map((el) => (
    <Grid item xs={12} sm={6} key={el.id}>
      <LinkCard key={el.id} userLink={el} />
    </Grid>
  ));

  return (
    <Container
      sx={{ maxWidth: "100vw", width: "100%", paddingLeft: 0, paddingRight: 0 }}
    >
      <LinkInputDialog />
      <Grid
        container
        // direction="column"
        sx={{ mt: "15px" }}
        wrap="wrap"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {linkCards}
      </Grid>
    </Container>
  );
};

export default LinksLayout;
