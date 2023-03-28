import * as React from 'react';
import Box from '@mui/material/Box';

  function ColumnsGrid() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} id="about">
          <img 
            src="images/about.png" 
            alt="a group of hikers on top of a mountain" 
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

