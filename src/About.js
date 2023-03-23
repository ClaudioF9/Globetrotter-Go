import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'absolute',
    width: '449px',
    height: '392px',
    border: 'none'
  }));

  function ColumnsGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <img 
            src="images/about.png" 
            alt="My Image" 
            style={{ 
              width: '100%', 
              height: 'auto',
              objectFit: 'cover' // or objectFit: 'contain' depending on your preference
            }} 
          />
        </div>
      </Box>
    );
  }

export default ColumnsGrid;

