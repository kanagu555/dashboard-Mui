import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  AvatarGroup,
  Button,
  Stack,
} from '@mui/material';

const Calender = () => {
  return (
    <Box sx={{display: 'inline-block'}}>
      <Card
        sx={{
          borderRadius: '2rem',
        }}
      >
        <CardContent >
         <Typography>Free Slots Available</Typography>
          
        </CardContent>
      </Card>
    </Box>
  );
};

export default Calender;
