import React from 'react';
import { Box, Grid } from '@mui/material';
import './style.css';
import ProfileDetail from './components/ProfileDetail';
import DashboardMenus from './components/DashboardMenus';
import PlanUpgrade from './components/PlanUpgrade';
import TotalRevenue from './components/TotalRevenue';
import TravelCard from './components/TravelCard';

export default function App() {
  return (
    <Box className="dashboard-design">
      <Grid container px={4} py={3} columnSpacing={2}>
        <Grid Item xs={3} >
          <Grid
            container
            rowSpacing={2} 
            sx={{ display: 'grid' }}
          >
            <Grid item>
              <ProfileDetail />
            </Grid>
            <Grid item>
              <DashboardMenus />
            </Grid>
            <Grid item>
              <PlanUpgrade />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <TotalRevenue />
      <TravelCard />
    </Box>
  );
}
