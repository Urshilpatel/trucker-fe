// BolPage.js
import React, { useState } from 'react';

import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function BolPageView() {
  const [clientId, setClientId] = useState('');
  const [bolNumber, setBolNumber] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [eta, setEta] = useState('');

  const clientList = [
    { id: 1, name: 'Client 1' },
    { id: 2, name: 'Client 2' },
    { id: 3, name: 'Client 3' },
    { id: 4, name: 'Client 4' },
  ];

  const pickupLocations = ['Montreal', 'Toronto'];

  const handleAddButtonClick = () => {
    // Handle logic for adding the BOL (e.g., sending data to server)
    console.log('Add button clicked');
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        BOL Page
      </Typography>

      <form>
        <FormControl fullWidth margin="normal">
          <InputLabel id="client-label">Client</InputLabel>
          <Select
            labelId="client-label"
            id="client-select"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
          >
            {clientList.map((client) => (
              <MenuItem key={client.id} value={client.id}>
                {client.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="BOL Number"
          fullWidth
          value={bolNumber}
          onChange={(e) => setBolNumber(e.target.value)}
          margin="normal"
          disabled // Assuming BOL is auto-generated and should not be edited
        />

        <FormControl fullWidth margin="normal">
          <InputLabel id="pickup-location-label">Pickup Location</InputLabel>
          <Select
            labelId="pickup-location-label"
            id="pickup-location-select"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          >
            {pickupLocations.map((location) => (
              <MenuItem key={location} value={location}>
                {location}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="ETA (hours)"
          type="number"
          fullWidth
          value={eta}
          onChange={(e) => setEta(e.target.value)}
          margin="normal"
        />

        <Button variant="contained" color="primary" onClick={handleAddButtonClick}>
          Add
        </Button>
      </form>
    </Container>
  );
}
