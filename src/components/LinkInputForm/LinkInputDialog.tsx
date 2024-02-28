//path: src/components/LinkInputForm/LinkInputDialog.tsx
// This component replaces the Link input form
// Dialog box is a better user experience for adding links

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { TransitionProps } from "@mui/material/transitions";

type FormData = {
  url: string;
  nickname: string;
  // notes: string;
};

type LinkInputDialogProps = {
  addUserLink: (url: string, nickname: string) => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<React.HTMLAttributes<HTMLElement>>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LinkInputDialog = ({ addUserLink }: LinkInputDialogProps) => {
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    url: "",
    nickname: "",
  } as FormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setFormData({ url: "", nickname: "" });
    setOpen(false);
  };

  const handleSubmit = () => {
    const { url, nickname } = formData;
    addUserLink(url, nickname);
    handleClose();
  };

  const isInputValid = (input: FormData) => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/; // Simple URL validation regex

    if (!input.nickname || input.nickname.length < 1) {
      return false;
    }

    if (!input.url || !urlRegex.test(input.url)) {
      return false;
    }

    return true;
  };

  return (
    <React.Fragment>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        sx={{ borderRadius: 99 }}
        onClick={handleClickOpen}
      >
        + Add Link
      </Button>
      <br />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add to your link collection"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Visitors will be redirected to the URL you provide below. <br />
            <br />
            *Note - generated hyperlinks will be anonymized and appear as
            linkreach.com/5324kjdf
          </DialogContentText>
          <TextField
            label="URL"
            name="url"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.url}
            required
          />
          <TextField
            name="nickname"
            label="Nickname"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={handleChange}
            value={formData.nickname}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Discard</Button>
          <Button disabled={!isInputValid(formData)} onClick={handleSubmit}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default LinkInputDialog;
