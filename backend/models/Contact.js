// models/Contact.js
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
      index: true, // Add index
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
      index: true, // Add index
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Please use a valid email address'],
      index: true, // Add index
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      match: [/^\+?[1-9]\d{1,14}$/, 'Please use a valid phone number'],
      index: true, // Add index
    },
    company: {
      type: String,
      required: [true, 'Company is required'],
      trim: true,
      index: true, // Add index
    },
    jobTitle: {
      type: String,
      required: [true, 'Job title is required'],
      trim: true,
      index: true, // Add index
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for text search (optional)
contactSchema.index({
  firstName: 'text',
  lastName: 'text',
  email: 'text',
  phoneNumber: 'text',
  company: 'text',
  jobTitle: 'text',
});

module.exports = mongoose.model('Contact', contactSchema);
