//components/CreateCampaignForm/CreateCampaignForm.tsx

/*
* User provides a name or other tracking data and tags to generate unqiue links for use in a campaign.
* This is a simple form that takes in a name but is optional, and selects links
*
*/

import React from "react";
import {
  Container,
  TextField,
  Button,
  TextareaAutosize,
  Box,
  FormGroup, FormControlLabel
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

//LINKS come from User profile
const myLinks = ["github" , "MyCoolApp", "Sick Coding Sample", "DefinitelyNotARickRoll", "MyOtherCoolApp"];


const CreateCampaignForm = () => {
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            campaignName: data.get("campaignName"),
            referrence: data.get("referrence"),
            notes: data.get("notes"),
        });

        // Reset the form
        event.currentTarget.reset();
    };

  return (
    <Box sx={{ boxShadow: 3, padding: "5px" }}>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Campaign Name"
            name="campaignName"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            name="referrence"
            label="Referrence"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <FormGroup>
            {myLinks.map((link) => (
               <FormControlLabel control={<Checkbox defaultChecked />} label={link} />
            ))}
          </FormGroup>
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
    </Box>
  );
};

export default CreateCampaignForm;