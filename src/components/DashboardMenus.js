import React from 'react';
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

const DashboardMenus = () => {
  return (
    <Box sx={{display: 'block'}}>
      <Card sx={{
          display: 'flex',
          borderRadius: '2rem',
        }}>
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <FolderOpenOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Dashboard</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MailOutlineIcon />
              </ListItemIcon>
              <ListItemText>Email</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CalendarTodayOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Calender</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <AutoGraphIcon />
              </ListItemIcon>
              <ListItemText>Graph</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <InsertDriveFileOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Forms</ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DashboardMenus;
