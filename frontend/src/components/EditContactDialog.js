// src/components/EditContactDialog.jsx
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ContactForm from './ContactForm';

const EditContactDialog = ({ contact, onClose, onUpdate }) => {
  const handleUpdate = (updatedContact) => {
    onUpdate(contact._id, updatedContact);
    onClose();
  };

  return (
    <Dialog open={Boolean(contact)} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
        <ContactForm contact={contact} onAdd={handleUpdate} onCancel={onClose} />
      </DialogContent>
      <DialogActions>
        {/* The Cancel and Save buttons are now part of ContactForm */}
      </DialogActions>
    </Dialog>
  );
};

export default EditContactDialog;
