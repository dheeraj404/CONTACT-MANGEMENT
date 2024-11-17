import React, { useState, useMemo } from 'react';
import { Container, Typography, Box, Snackbar, Alert, IconButton, Switch, FormControlLabel } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ContactForm from './components/ContactForm';
import ContactsTable from './components/ContactsTable';
import SearchBar from './components/SearchBar';
import AddContactButton from './components/AddContactButton';
import api from './services/api';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './theme/theme';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });
  const [mode, setMode] = useState('dark'); // Default theme mode set to dark

  // Memoize theme to prevent unnecessary recalculations
  const theme = useMemo(() => getTheme(mode), [mode]);

  // Toggle theme mode
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  // Fetch all contacts
  const fetchContacts = async (params = {}) => {
    try {
      const response = await api.get('/contacts', { params });
      setContacts(response.data.contacts);
    } catch (error) {
      console.error(error);
      showNotification('Failed to fetch contacts', 'error');
    }
  };

  React.useEffect(() => {
    fetchContacts();
  }, []);

  // Notification handler
  const showNotification = (message, severity) => {
    setNotification({ open: true, message, severity });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  // Add new contact
  const handleAddContact = async (contact) => {
    try {
      const response = await api.post('/contacts', contact);
      setContacts([response.data, ...contacts]);
      showNotification('Contact added successfully', 'success');
    } catch (error) {
      console.error(error);
      const msg = error.response?.data?.message || 'Failed to add contact';
      showNotification(msg, 'error');
    }
  };

  // Update existing contact
  const handleUpdateContact = async (id, updatedContact) => {
    try {
      const response = await api.put(`/contacts/${id}`, updatedContact);
      setContacts(contacts.map(contact => (contact._id === id ? response.data : contact)));
      showNotification('Contact updated successfully', 'success');
    } catch (error) {
      console.error(error);
      const msg = error.response?.data?.message || 'Failed to update contact';
      showNotification(msg, 'error');
    }
  };

  // Delete contact
  const handleDeleteContact = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
      showNotification('Contact deleted successfully', 'success');
    } catch (error) {
      console.error(error);
      showNotification('Failed to delete contact', 'error');
    }
  };

  // Search contacts
  const handleSearch = async (params) => {
    if (Object.keys(params).length === 0) {
      fetchContacts(); // Fetch all contacts if no search params
      return;
    }

    try {
      const response = await api.get('/contacts/search', { params });
      setContacts(response.data.contacts);
      showNotification(`Found ${response.data.contacts.length} contact(s)`, 'info');
    } catch (error) {
      console.error(error);
      showNotification('Search failed', 'error');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100vh',
          color: 'text.primary',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
            <Typography variant="h4" align="center">
              Contact Management
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={mode === 'dark'}
                  onChange={toggleMode}
                  color="default"
                  icon={<Brightness7Icon />}
                  checkedIcon={<Brightness4Icon />}
                />
              }
              label={mode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
            />
          </Box>

          {/* Add Contact Button */}
          <AddContactButton onAdd={handleAddContact} />

          {/* Search Bar */}
          <Box sx={{ mb: 2 }}>
            <SearchBar onSearch={handleSearch} />
          </Box>

          {/* Contacts Table */}
          <ContactsTable
            contacts={contacts}
            onUpdate={handleUpdateContact}
            onDelete={handleDeleteContact}
          />

          {/* Notification Snackbar */}
          <Snackbar
            open={notification.open}
            autoHideDuration={6000}
            onClose={handleCloseNotification}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert onClose={handleCloseNotification} severity={notification.severity} sx={{ width: '100%' }}>
              {notification.message}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
