import React from 'react';
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
   
} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const TotalRevenue = () => {
  return (
    <Box sx={{display: 'inline-block'}}>
      <Card sx={{ borderRadius: '2rem' }}>
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <Avatar sx={{ bgcolor: 'black' }}>
                  <MonetizationOnIcon />
                </Avatar>
              </ListItemIcon>
              <ListItemText>Total Revenue $92,983</ListItemText>

            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TotalRevenue;
