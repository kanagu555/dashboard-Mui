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

const buttonStyle = {
  borderRadius: '2rem', 
  borderColor: '#D2D6E1', 
  textTransform:'none', 
  margineLeft: '7px', 
  width: 0,
  ml: 1
}


const TravelCard = () => {
  return (
    <Box sx={{display: 'inline-block'}}>
      <Card
        sx={{
          borderRadius: '2rem',
        }}
      >
        <CardContent>
          <Typography  sx={{fontWeight: 'bold'}} variant="h5" gutterBottom>Travel</Typography>
          <Typography color="text.secondary" gutterBottom>Mobile Application</Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Seen by
          </Typography>
          <AvatarGroup sx={{ justifyContent: 'flex-end'  }} spacing='22'>
            <Avatar
              src="https://randomuser.me/api/portraits/men/45.jpg"
              alt="ava1"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/women/75.jpg"
              alt="ava1"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/men/7.jpg"
              alt="ava1"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="ava1"
            />
            <Avatar
              src="https://randomuser.me/api/portraits/men/5.jpg"
              alt="ava1"
            />
          </AvatarGroup >
          <Stack p={1} spacing={2} direction="row">
            <Button
              variant="contained"
              size="small"
              sx={{ bgcolor: '#3827B3', borderRadius: '2rem' }}
            >
              <Typography sx={{fontSize: 12, textTransform:'none'}}  variant="body">Tour</Typography>
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{ ...buttonStyle }}
            >
              <Typography sx={{fontSize: 12}} variant="body">Trip</Typography>
            </Button>
          </Stack>
          <Stack>
            <Button
              variant="outlined"
              size="small"
              sx={{ ...buttonStyle }}
            >
              <Typography sx={{fontSize: 12}}variant="body">Transport</Typography>
              
            </Button>
            
          </Stack>
          
        </CardContent>
      </Card>
    </Box>
  );
};

export default TravelCard;
