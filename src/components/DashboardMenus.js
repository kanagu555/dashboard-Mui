import React from 'react';
import {
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from '@mui/material';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';

const iconStyle = {
  bgcolor: 'black',
  border: 4,
  borderRadius: '5px',
  width: '1.5rem',
  height: '1.5rem',
};

const DashboardMenus = () => {
  return (
    <Box sx={{ display: 'block' }}>
      <Card
        sx={{
          display: 'flex',
          borderRadius: '2rem',
        }}
      >
        <CardContent>
          <List>
            <ListItem>
              <ListItemIcon>
                <Box sx={{...iconStyle}}>
                  <FolderOpenOutlinedIcon sx={{color: 'white'}}/>
                </Box>
              </ListItemIcon>
              <ListItemText><Link onClick={() => {alert('welcome')}} color="inherit" sx={{cursor:"pointer", textDecoration: 'none'}}>Dashboard</Link></ListItemText>
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
