//components/LinkInputForm/LinkInputForm.tsx
/*
* User provides links which will be re-used often in application or compaign process. 
*  This is a simple form that takes in a URL, a nickname, and notes.
*  TODO : Consider adding a user defined image or icon for use in the CampaignTable.
*  TODO : Consider adding tags or rev numbers for the links
*/

import React from "react";
import {
  Container,
  TextField,
  Button,
  TextareaAutosize,
  Box, Paper
} from "@mui/material";

const LinkInputForm = () => {
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            url: data.get("url"),
            nickname: data.get("nickname"),
            notes: data.get("notes"),
        });

        // Reset the form
        event.currentTarget.reset();
    };

  return (
    <Paper elevation={3}>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <TextField
            label="URL"
            name="url"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name="nickname"
            label="Nickname"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextareaAutosize
            name="notes"
            minRows={3}
            placeholder="NOTES"
            style={{ width: "100%", marginBottom: "16px" }}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ position: "relative", bottom: "0", right: "0" }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Container>
    </Paper>
  );
};

export default LinkInputForm;
