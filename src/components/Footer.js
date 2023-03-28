import { Box, Container, Grid, Link, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#222', color: '#fff', py: 4 }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2">
              <Link href="ButtonAppBar" color="inherit" sx={{ mr: 2 }}>
                Home
              </Link>
              <Link href="#about" color="inherit" sx={{ mr: 2 }}>
                About
              </Link>
              <Link href="#contact" color="inherit" sx={{ mr: 2 }}>
                Contact
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" align="center">
              &copy; {new Date().getFullYear()} Globe-Trotter-Go. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: 'right' }}>
            <Link
              href="https://github.com/ClaudioF9/Globetrotter-Go"
              target="_blank"
              rel="noopener"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <GitHubIcon fontSize="large" />
            </Link>
            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <LinkedInIcon fontSize="large" />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;