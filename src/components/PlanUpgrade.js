import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const buttonStyle = {
  bgcolor: 'white',
  m: 1,
  border: 1,
  borderRadius: '20px 0 20px 20px',
  width: '5rem',
  height: '2rem',
};

const PlanUpgrade = () => {
  return (
    <Box sx={{ display: 'block' }}>
      <Card
        sx={{
          display: 'flex',
          borderRadius: '2rem',
          backgroundColor: '#3827B3',
        }}
      >
        <CardContent>
          <Typography sx={{fontWeight: 'bold'}} color="white" variant="h5">
            Go Pro
          </Typography>
          <Typography color="white" px={2}>
            Upgrade your plan to get pro benefits
          </Typography>
          <Box sx={{display: 'flex',justifyContent: 'flex-end' }}>
          <Box
            sx={{
              ...buttonStyle,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ fontWeight: 'bold', color:'#3827B3' }} variant="body2">Let's Start</Typography>
          </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PlanUpgrade;
