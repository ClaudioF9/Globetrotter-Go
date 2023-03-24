import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
} from '@mui/material';
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
  return (
    <div></div>
  );
};

export default Contact;
