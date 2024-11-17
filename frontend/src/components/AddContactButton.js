import ContactForm from "./ContactForm";
import { Add } from "@mui/icons-material";
import { Button, Dialog, DialogTitle, DialogContent } from "@mui/material";
import React, { useState } from "react";

const AddContactButton = ({ onAdd }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = (contact) => {
    onAdd(contact);
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Add />}
        onClick={handleOpen}
        sx={{
          mb: 2,
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          color: "text.primary",
          "&:hover": {
            background: "rgba(255, 255, 255, 0.35)",
          },
        }}
      >
        Add New Contact
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Add New Contact</DialogTitle>
        <DialogContent>
          <ContactForm onAdd={handleAdd} onCancel={handleClose} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddContactButton;
