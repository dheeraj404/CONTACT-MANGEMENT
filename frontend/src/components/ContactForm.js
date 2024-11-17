// src/components/ContactForm.jsx
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  company: '',
  jobTitle: '',
};

const ContactForm = ({ onAdd, onCancel, contact = null }) => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (contact) {
      setForm({
        firstName: contact.firstName || '',
        lastName: contact.lastName || '',
        email: contact.email || '',
        phoneNumber: contact.phoneNumber || '',
        company: contact.company || '',
        jobTitle: contact.jobTitle || '',
      });
    }
  }, [contact]);

  // Validate form fields
  const validate = () => {
    const temp = {};
    temp.firstName = form.firstName ? '' : 'First Name is required';
    temp.lastName = form.lastName ? '' : 'Last Name is required';
    temp.email = /^\S+@\S+\.\S+$/.test(form.email) ? '' : 'Email is not valid';
    temp.phoneNumber = /^\+?[1-9]\d{1,14}$/.test(form.phoneNumber)
      ? ''
      : 'Phone Number is not valid';
    temp.company = form.company ? '' : 'Company is required';
    temp.jobTitle = form.jobTitle ? '' : 'Job Title is required';
    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === '');
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onAdd(form);
      setForm(initialFormState);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        {/* First Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            name="firstName"
            label="First Name"
            fullWidth
            value={form.firstName}
            onChange={handleChange}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName}
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={6}>
          <TextField
            name="lastName"
            label="Last Name"
            fullWidth
            value={form.lastName}
            onChange={handleChange}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName}
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6}>
          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={form.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
          />
        </Grid>

        {/* Phone Number */}
        <Grid item xs={12} sm={6}>
          <TextField
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            value={form.phoneNumber}
            onChange={handleChange}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber}
          />
        </Grid>

        {/* Company */}
        <Grid item xs={12} sm={6}>
          <TextField
            name="company"
            label="Company"
            fullWidth
            value={form.company}
            onChange={handleChange}
            error={Boolean(errors.company)}
            helperText={errors.company}
          />
        </Grid>

        {/* Job Title */}
        <Grid item xs={12} sm={6}>
          <TextField
            name="jobTitle"
            label="Job Title"
            fullWidth
            value={form.jobTitle}
            onChange={handleChange}
            error={Boolean(errors.jobTitle)}
            helperText={errors.jobTitle}
          />
        </Grid>

        {/* Action Buttons */}
        <Grid item xs={12} display="flex" justifyContent="flex-end">
          {onCancel && (
            <Button onClick={onCancel} color="secondary" sx={{ mr: 2 }}>
              Cancel
            </Button>
          )}
          <Button type="submit" variant="contained" color="primary">
            {contact ? 'Update Contact' : 'Add Contact'}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;

