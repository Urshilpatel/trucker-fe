// NewOrdersPage.js
import React, { useState } from 'react';

import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function NewOrdersPageView() {
  const [bolNumber, setBolNumber] = useState('');
  const [eqNumber, setEqNumber] = useState('');
  const [deliveryDateTime, setDeliveryDateTime] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');

  const handleAddButtonClick = () => {
    // Handle logic for adding the order (e.g., sending data to the server)
    console.log('Add button clicked');
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        New Orders
      </Typography>

      <form>
        <TextField
          label="BOL Number"
          fullWidth
          value={bolNumber}
          onChange={(e) => setBolNumber(e.target.value)}
          margin="normal"
        />
        <TextField
          label="EQ Number"
          fullWidth
          value={eqNumber}
          onChange={(e) => setEqNumber(e.target.value)}
          margin="normal"
        />
        <TextField
          label=""
          type="datetime-local"
          fullWidth
          value={deliveryDateTime}
          onChange={(e) => setDeliveryDateTime(e.target.value)}
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="pickup-location-label">Pickup Location</InputLabel>
          <Select
            labelId="pickup-location-label"
            id="pickup-location-select"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          >
            <MenuItem value="Montreal">Montreal</MenuItem>
            <MenuItem value="Toronto">Toronto</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Drop Location"
          fullWidth
          value={dropLocation}
          onChange={(e) => setDropLocation(e.target.value)}
          margin="normal"
        />

        <Button variant="contained" color="primary" onClick={handleAddButtonClick}>
          Add
        </Button>
      </form>
    </Container>
  );
}
