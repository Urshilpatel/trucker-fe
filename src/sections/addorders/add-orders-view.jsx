import React, { useState } from 'react';

import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
 // Correct import order

 export default function AddOrdersPageView() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [selectedEqNumber, setSelectedEqNumber] = useState(null);
  
    const tableData = [
      { number: 1, eqNumber: 'EQ001', portName: 'Port A', dateTime: '2023-11-20 10:30 AM', status: 'Active' },
      { number: 2, eqNumber: 'EQ002', portName: 'Port B', dateTime: '2023-11-21 02:45 PM', status: 'Inactive' },
      // Add more data as needed
    ];
  
    const filteredData = tableData.filter((item) =>
      item.eqNumber.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === '' || item.status.toLowerCase() === filter.toLowerCase())
    );
  
    const handleShowEqNumber = (eqNumber) => {
      setSelectedEqNumber(eqNumber);
    };
  
    const handleActionButtonClick = (action, eqNumber) => {
      // Handle logic for the action (e.g., release, add, delay)
      console.log(`Action: ${action}, EQ Number: ${eqNumber}`);
    };
  
    return (
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Add Orders
        </Typography>
  
        <div className="filters">
          <TextField
            label="Search EQ Number"
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            margin="normal"
          />
          <TextField
            select
            label="Filter Status"
            fullWidth
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            margin="normal"
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </TextField>
        </div>
  
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Number</TableCell>
                <TableCell>EQ Number</TableCell>
                <TableCell>Port Name</TableCell>
                <TableCell>Time and Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell> {/* New column for actions */}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((item) => (
                <TableRow key={item.number}>
                  <TableCell>{item.number}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleShowEqNumber(item.eqNumber)}>{item.eqNumber}</Button>
                  </TableCell>
                  <TableCell>{item.portName}</TableCell>
                  <TableCell>{item.dateTime}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    {/* Add button for each row */}
                    <Button onClick={() => handleActionButtonClick('release', item.eqNumber)}>Release</Button>
                    <Button onClick={() => handleActionButtonClick('add', item.eqNumber)}>Add</Button>
                    <Button onClick={() => handleActionButtonClick('delay', item.eqNumber)}>Delay</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        {selectedEqNumber && (
          <div>
            <p>Selected EQ Number: {selectedEqNumber}</p>
            <Button onClick={() => setSelectedEqNumber(null)}>Close</Button>
          </div>
        )}
      </Container>
    );
  }
