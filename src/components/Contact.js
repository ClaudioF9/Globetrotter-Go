import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from '@material-ui/core';
import travelBg from '../images/travel-bg.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundImage: `url(${travelBg})`,
    backgroundSize: 'cover',
  },
  contactContainer: {
    padding: theme.spacing(8, 0),
    maxWidth: 800,
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
      maxWidth: '100%',
    },
  },
  contactTitle: {
    fontWeight: 700,
  },
  contactFormCard: {
    maxWidth: 600,
    margin: 'auto',
    border: 'none',
    background: 'transparent',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      boxShadow: 'none',
    },
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border: 'none',
  },
  formField: {
    margin: theme.spacing(2, 0),
  },
  submitButton: {
    margin: theme.spacing(3, 0),
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="contact">
    <div className={classes.contactContainer}>
      <Typography component="h3" variant="h3" align="center" gutterBottom  className={classes.contactTitle}>
        We would love to hear from you!
      </Typography>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12}>
          <Card className={classes.contactFormCard}>
            <CardContent>
              <form className={classes.contactForm}>
                <TextField
                  label="Name"
                  variant="outlined"
                  className={classes.formField}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  className={classes.formField}
                />
                <TextField
                  label="What are you thinking?"
                  variant="outlined"
                  multiline
                  rows={4}
                  className={classes.formField}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.submitButton}
                  style={{ backgroundColor: '#00AAF8', color: '#fff' }}
                >
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default Contact;
