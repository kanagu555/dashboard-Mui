import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const ProfileDetail = () => {
  return (
    <Box sx={{ display: 'block' }}>
      <Card
        sx={{
          borderRadius: '2rem',
        }}
      >
        <CardContent>
          <Typography sx={{fontWeight: 'bold'}} variant="h5">Hira R.</Typography>
          <Typography color="text.secondary" gutterBottom>
            UX/UI Designer
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <Typography
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box sx={{ fontWeight: 'bold' }}>125</Box> Projects
            </Typography>
            <Typography sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <Box sx={{ fontWeight: 'bold' }}>$124</Box> Revenue
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfileDetail;
