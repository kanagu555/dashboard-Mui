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

const TravelCard = () => {
  return (
    <Box width="18rem">
      <Card
        sx={{
          borderRadius: '2rem',
        }}
      >
        <CardContent>
          <Typography variant="h5">Travel</Typography>
          <Typography color="text.secondary">Mobile Application</Typography>
          <Typography variant="body2" color="text.secondary">
            Seen by
          </Typography>
          <AvatarGroup>
            <Avatar
              src="https://randomuser.me/api/portraits/men/75.jpg"
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
          </AvatarGroup>
          <Stack p={1} spacing={2} direction="row">
            <Button
              variant="contained"
              size="small"
              sx={{ bgcolor: '#3827B3', borderRadius: '2rem' }}
            >
              <Typography variant="body">Tour</Typography>
            </Button>
            <Button
              variant="outlined"
              size="small"
              sx={{ borderRadius: '2rem' }}
            >
              <Typography variant="body">Trip</Typography>
            </Button>
          </Stack>
          <Stack>
            <Button
              variant="outlined"
              size="small"
              sx={{ borderRadius: '2rem' }}
            >
              <Typography variant="body">Transport</Typography>
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TravelCard;
