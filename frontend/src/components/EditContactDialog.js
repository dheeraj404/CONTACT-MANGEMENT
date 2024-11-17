import ContactForm from "./ContactForm";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import React from "react";

const EditContactDialog = ({ contact, onClose, onUpdate }) => {
  const handleUpdate = (updatedContact) => {
    onUpdate(contact._id, updatedContact);
    onClose();
  };

  return (
    <Dialog open={Boolean(contact)} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
        <ContactForm
          contact={contact}
          onAdd={handleUpdate}
          onCancel={onClose}
        />
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default EditContactDialog;
