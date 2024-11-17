const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
      index: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
      index: true,
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^\+?[1-9]\d{1,14}$/, "Please use a valid phone number"],
      index: true,
    },
    company: {
      type: String,
      required: [true, "Company is required"],
      trim: true,
      index: true,
    },
    jobTitle: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

contactSchema.index({
  firstName: "text",
  lastName: "text",
  email: "text",
  phoneNumber: "text",
  company: "text",
  jobTitle: "text",
});

module.exports = mongoose.model("Contact", contactSchema);
