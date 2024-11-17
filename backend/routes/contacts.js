const express = require("express");
const Contact = require("../models/Contact");
const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      company,
      jobTitle,
      page = 1,
      limit = 10,
      sortBy = "createdAt",
      order = "asc",
    } = req.query;

    const searchCriteria = {};

    if (firstName) {
      searchCriteria.firstName = { $regex: firstName, $options: "i" };
    }
    if (lastName) {
      searchCriteria.lastName = { $regex: lastName, $options: "i" };
    }
    if (email) {
      searchCriteria.email = { $regex: email, $options: "i" };
    }
    if (phoneNumber) {
      searchCriteria.phoneNumber = { $regex: phoneNumber, $options: "i" };
    }
    if (company) {
      searchCriteria.company = { $regex: company, $options: "i" };
    }
    if (jobTitle) {
      searchCriteria.jobTitle = { $regex: jobTitle, $options: "i" };
    }

    if (Object.keys(searchCriteria).length === 0) {
      return res
        .status(400)
        .json({ message: "Please provide at least one search parameter." });
    }

    const sortOrder = order === "desc" ? -1 : 1;

    const contacts = await Contact.find(searchCriteria)
      .sort({ [sortBy]: sortOrder })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Contact.countDocuments(searchCriteria);

    res.json({
      contacts,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      totalResults: total,
    });
  } catch (error) {
    console.error("Search Error:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
});
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, company, jobTitle } =
      req.body;

    const existingContact = await Contact.findOne({ email });
    if (existingContact) {
      return res
        .status(400)
        .json({ message: "Contact with this email already exists" });
    }

    const contact = new Contact({
      firstName,
      lastName,
      email,
      phoneNumber,
      company,
      jobTitle,
    });

    const savedContact = await contact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ message: messages });
    }
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      sortBy = "createdAt",
      order = "asc",
    } = req.query;

    const sortOrder = order === "desc" ? -1 : 1;

    const contacts = await Contact.find()
      .sort({ [sortBy]: sortOrder })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));

    const total = await Contact.countDocuments();

    res.json({
      contacts,
      totalPages: Math.ceil(total / limit),
      currentPage: parseInt(page),
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, company, jobTitle } =
      req.body;

    let contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    if (email && email !== contact.email) {
      const existingContact = await Contact.findOne({ email });
      if (existingContact) {
        return res
          .status(400)
          .json({ message: "Another contact with this email already exists" });
      }
    }

    contact.firstName = firstName || contact.firstName;
    contact.lastName = lastName || contact.lastName;
    contact.email = email || contact.email;
    contact.phoneNumber = phoneNumber || contact.phoneNumber;
    contact.company = company || contact.company;
    contact.jobTitle = jobTitle || contact.jobTitle;

    const updatedContact = await contact.save();
    res.json(updatedContact);
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ message: messages });
    }
    res.status(500).json({ message: "Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    const result = await Contact.deleteOne({ _id: id });
    res.json({ message: "Contact removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
