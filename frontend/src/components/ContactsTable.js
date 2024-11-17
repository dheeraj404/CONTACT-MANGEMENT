// src/components/ContactsTable.jsx
import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, IconButton, TablePagination, TableSortLabel, useMediaQuery,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import EditContactDialog from './EditContactDialog';
import { useTheme } from '@mui/material/styles';

const ContactsTable = ({ contacts, onUpdate, onDelete }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedContact, setSelectedContact] = useState(null);
  
  // New state for delete confirmation
  const [contactToDelete, setContactToDelete] = useState(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Handle sorting
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Sort contacts based on order and orderBy
  const sortedContacts = [...contacts].sort((a, b) => {
    if (a[orderBy] < b[orderBy]) return order === 'asc' ? -1 : 1;
    if (a[orderBy] > b[orderBy]) return order === 'asc' ? 1 : -1;
    return 0;
  });

  // Handle pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Open edit dialog
  const openEditDialog = (contact) => {
    setSelectedContact(contact);
  };

  // Close edit dialog
  const closeEditDialog = () => {
    setSelectedContact(null);
  };

  // Open delete confirmation dialog
  const openDeleteDialog = (contact) => {
    setContactToDelete(contact);
    setIsDeleteDialogOpen(true);
  };

  // Handle confirm delete
  const handleConfirmDelete = () => {
    if (contactToDelete) {
      onDelete(contactToDelete._id);
      setContactToDelete(null);
      setIsDeleteDialogOpen(false);
    }
  };

  // Handle cancel delete
  const handleCancelDelete = () => {
    setContactToDelete(null);
    setIsDeleteDialogOpen(false);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader aria-label="contacts table">
          <TableHead>
            <TableRow>
              {['firstName', 'lastName', 'email', 'phoneNumber', 'company', 'jobTitle'].map((headCell) => (
                <TableCell
                  key={headCell}
                  sortDirection={orderBy === headCell ? order : false}
                >
                  <TableSortLabel
                    active={orderBy === headCell}
                    direction={orderBy === headCell ? order : 'asc'}
                    onClick={() => handleRequestSort(headCell)}
                  >
                    {headCell.charAt(0).toUpperCase() + headCell.slice(1)}
                  </TableSortLabel>
                </TableCell>
              ))}
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedContacts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(contact => (
                <TableRow hover key={contact._id}>
                  <TableCell>{contact.firstName}</TableCell>
                  <TableCell>{contact.lastName}</TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phoneNumber}</TableCell>
                  <TableCell>{contact.company}</TableCell>
                  <TableCell>{contact.jobTitle}</TableCell>
                  <TableCell align="center">
                    <IconButton
                      onClick={() => openEditDialog(contact)}
                      color="primary"
                      size={isMobile ? 'small' : 'medium'}
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => openDeleteDialog(contact)}
                      color="error"
                      size={isMobile ? 'small' : 'medium'}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            {contacts.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No contacts found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Controls */}
      <TablePagination
        component="div"
        count={contacts.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />

      {/* Edit Contact Dialog */}
      {selectedContact && (
        <EditContactDialog
          contact={selectedContact}
          onClose={closeEditDialog}
          onUpdate={onUpdate}
        />
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={isDeleteDialogOpen}
        onClose={handleCancelDelete}
        aria-labelledby="delete-confirmation-dialog-title"
        aria-describedby="delete-confirmation-dialog-description"
      >
        <DialogTitle id="delete-confirmation-dialog-title">
          Confirm Deletion
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-confirmation-dialog-description">
            {contactToDelete
              ? `Are you sure you want to delete ${contactToDelete.firstName} ${contactToDelete.lastName}? This action cannot be undone.`
              : ''}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default ContactsTable;
