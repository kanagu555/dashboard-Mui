import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Switch,
  AvatarGroup,
  Button,
  Stack,
} from '@mui/material';

const switchButton = {
  color: '#3827B3',
  alignSelf: 'center',
  height: '0.rem',
};

const dateStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  // justifyContent: 'center',
  // alignItems: 'center'
};

const dateStyleItem = {
  // backgroundColor: '#e25668',
  backgroundColor: 'white',
  boxShadow: '0 0 3px 1px #D2D6E1',
  borderRadius: '1rem',
  color: 'black',
  m: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  p: '20px',
};

const dateInnerStyle = {
  fontWeight: 'bold',
  fontSize: '20px'
};

const monthStyle = {
  fontSize: '10px',
};

const dateStyleItems = {
  border: '2',
  borderRadius: '3rem',
  borderColor: '#D2D6E1',
  px: '15px',
  height: '4rem',
  width: '2rem',
};

const Calender = () => {
  return (
    <Box sx={{ display: 'inline-block', p: '20px', }}>
      <Card
        sx={{
          borderRadius: '2rem',
        }}
      >
        <CardContent sx={{ display: 'flex', mx: '20px' }}>
          <Typography sx={{ fontWeight: 'bold' }} variant="h5">
            Free Slots Available
          </Typography>
          <Switch defaultChecked sx={{ ...switchButton }}></Switch>
        </CardContent>
        <CardContent sx={{ ...dateStyle }}>
          <Box sx={{ ...dateStyleItem, backgroundColor: '#e25668', color: 'white' }}>
            <Typography>
              <Box sx={{ ...dateInnerStyle }}>12</Box>
            </Typography>
            <Typography>
              <Box sx={{ ...monthStyle }}>June</Box>
            </Typography>
          </Box>
          <Box sx={{ ...dateStyleItem }}>
            <Typography>
              <Box sx={{ ...dateInnerStyle }}>18</Box>
            </Typography>
            <Typography>
              <Box sx={{ ...monthStyle }}>June</Box>
            </Typography>
          </Box>
          <Box sx={{ ...dateStyleItem }}>
            <Typography>
              <Box sx={{ ...dateInnerStyle }}>20</Box>
            </Typography>
            <Typography>
              <Box sx={{ ...monthStyle }}>June</Box>
            </Typography>
          </Box>
          <Box sx={{ ...dateStyleItem }}>
            <Typography>
              <Box sx={{ ...dateInnerStyle }}>02</Box>
            </Typography>
            <Typography>
              <Box sx={{ ...monthStyle }}>July</Box>
            </Typography>
          </Box>
          <Box sx={{ ...dateStyleItem }}>
            <Typography>
              <Box sx={{ ...dateInnerStyle }}>10</Box>
            </Typography>
            <Typography>
              <Box sx={{ ...monthStyle }}>July</Box>
            </Typography>
          </Box>
          <Box sx={{ ...dateStyleItem }}>
            <Typography>
              <Box sx={{ ...dateInnerStyle }}>15</Box>
            </Typography>
            <Typography>
              <Box sx={{ ...monthStyle }}>July</Box>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Calender;
