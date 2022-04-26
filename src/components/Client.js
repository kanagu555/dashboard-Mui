import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

const cardTitle = {
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const Client = () => {
  return (
    <Box sx={{ display: 'inline-block', p: '20px' }}>
      <Card
        sx={{
          borderRadius: '2rem',
        }}
      >
        <CardContent >
          <Box sx={{ ...cardTitle }}>
          <SentimentSatisfiedAltIcon sx={{ fontSize: 100 }} />
          <Typography sx={{ ...cardTitle }} variant="h5">
            Dear Client 
          </Typography>
          <KeyboardArrowDownIcon fontSize="large" />
          </Box>
          <Typography color="text.secondary">
            Join our online community. It helps in managing your projects
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Client;
