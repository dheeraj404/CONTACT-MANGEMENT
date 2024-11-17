import { TextField, Button, Grid, Paper } from "@mui/material";
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    company: "",
    jobTitle: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearch({ ...search, [name]: value });
  };

  const handleSearch = () => {
    const params = {};
    Object.keys(search).forEach((key) => {
      if (search[key]) {
        params[key] = search[key];
      }
    });
    onSearch(params);
  };

  const handleReset = () => {
    setSearch({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      company: "",
      jobTitle: "",
    });
    onSearch({});
  };

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Grid container spacing={2} alignItems="center">
        {/* First Name */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            name="firstName"
            label="First Name"
            fullWidth
            value={search.firstName}
            onChange={handleChange}
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            name="lastName"
            label="Last Name"
            fullWidth
            value={search.lastName}
            onChange={handleChange}
          />
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            name="email"
            label="Email"
            fullWidth
            value={search.email}
            onChange={handleChange}
          />
        </Grid>

        {/* Phone Number */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            value={search.phoneNumber}
            onChange={handleChange}
          />
        </Grid>

        {/* Company */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            name="company"
            label="Company"
            fullWidth
            value={search.company}
            onChange={handleChange}
          />
        </Grid>

        {/* Job Title */}
        <Grid item xs={12} sm={6} md={2}>
          <TextField
            name="jobTitle"
            label="Job Title"
            fullWidth
            value={search.jobTitle}
            onChange={handleChange}
          />
        </Grid>

        {/* Search Button */}
        <Grid item xs={12} sm={6} md={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            fullWidth
          >
            Search
          </Button>
        </Grid>

        {/* Reset Button */}
        <Grid item xs={12} sm={6} md={2}>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleReset}
            fullWidth
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SearchBar;
