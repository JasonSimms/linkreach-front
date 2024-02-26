//components/CreateCampaignForm/CreateCampaignForm.tsx

/*
* User provides a name or other tracking data and tags to generate unqiue links for use in a campaign.
* This is a simple form that takes in a name but is optional, and selects links
*
* DESIRED OUTPUT FROM FORM: { user / campaign name, referrence, notes, links[] }
*/

import React from "react";
import {
  Container,
  TextField,
  Button,
  TextareaAutosize,
  Box,
  FormGroup, FormControlLabel, Paper
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

//LINKS come from User profile
const myLinks = ["github" , "MyCoolApp", "Sick Coding Sample", "DefinitelyNotARickRoll", "MyOtherCoolApp"];


const CreateCampaignForm = () => {

    const getLinksToInclude = (arr: FormDataEntryValue[]) => {
        const linksToInclude = [];
        for (let i = 0; i < arr.length; i++) {
            console.log('type of check', typeof arr[i])
            if (arr[i] === "on") {
                linksToInclude.push(myLinks[i]);
            }
        }
        return linksToInclude;
    }
  
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const checkBoxInput: FormDataEntryValue[] = Array.from(data.getAll("links"));
      const links = getLinksToInclude(checkBoxInput)
      console.log({
        campaignName: data.get("campaignName"),
        referrence: data.get("referrence"),
        notes: data.get("notes"),
        links: links,
      });

      // Reset the form
      event.currentTarget.reset();
    };

  return (
    <Paper elevation={3}>
      <Container maxWidth="sm">
        <form onSubmit={handleSubmit}>
          <TextField
            label="Campaign Name"
            name="campaignName"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Who will recieve this?"
          />
          <TextField
            name="referrence"
            label="Referrence"
            variant="outlined"
            fullWidth
            margin="normal"
            placeholder="Job Link or Document URL"
          />
          <FormGroup >
            {myLinks.map((link) => (
               <FormControlLabel key={link} name="links" control={<Checkbox defaultChecked />} label={link} />
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
    </Paper>
  );
};

export default CreateCampaignForm;