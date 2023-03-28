import React from 'react';
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import travelBg from '../images/travel-bg.jpg';

const Contact = () => {
  return (
    <div id="contact">
    <Box
      sx={{
        py: 8,
        backgroundImage: `url(${travelBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '500px',
        backgroundPosition: 'center center'
      }}
    >
      <Container maxWidth="md" style={{
        padding: '64px',
        maxWidth: '800px',
        margin: '0 auto',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
      }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
        We would love to hear from you!
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              margin="dense"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              margin="dense"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="What are you thinking?"
              variant="outlined"
              margin="dense"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">
              Send
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  );
};

export default Contact;