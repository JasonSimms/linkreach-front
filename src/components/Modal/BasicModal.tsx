import { Modal, Box, Typography, Button } from "@mui/material";
import React from "react";

interface BasicModalProps {
  title?: string;
  text?: string;
}

const BasicModal: React.FC<BasicModalProps> = ({title, text}) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Button variant="contained" onClick={handleOpen} color='primary'>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title? title: "Add A props.title here"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {text? text: "Add A props.text here"}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default BasicModal;
