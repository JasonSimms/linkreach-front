import React from "react";
import { Grid} from "@mui/material";
import { LinkCard, LinkInputForm } from "../components";

import { mockLinks } from "../Context/MockData";

import { UserLink } from "../models/UserLink";

const LinksLayout: React.FC = () => {
    const userLinks = mockLinks as UserLink[];

  return (
    <Grid container spacing={3}>
      <LinkInputForm />
      {userLinks.map((el) => (<LinkCard key={el.id} userLink={el} />))}
    </Grid>
  );
};

export default LinksLayout;
