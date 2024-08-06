import React from 'react'
import {Box,Grid, Button, IconButton,Typography, useTheme} from '@mui/material';
import {tokens} from '../theme';
import Header from '../components/Header';
import MetricCard from '../components/MetriCard';
import RecentOrders from '../components/RecentOrders';
import Feedback from '../components/Feedback';
import NetProfitComponent from '../components/StatBox/NetProfitComponent';
import {
  Add,
  ShoppingCart,
  DeliveryDining,
  Cancel,
  Money,

} from '@mui/icons-material';
import NavPanel from '../components/NavPanel';
import ActivityChart from '../components/Activity';


const Dashboard = () => {
  const theme = useTheme();
  const colors= tokens(theme.palette.mode)
  return (
    <Box sx={{ backgroundColor: `${colors.primary[700]} !important`}} >
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" paddingTop="5px" paddingLeft="45px">
        <Header title="Dashboard"/>
      </Box>


      {/*GRID & CHARTS*/}
      {/* <Box display="grid"
      gridAutoColumns="repeat(12, 1fr)"
      gridAutoRows="140px"
      gap="20px"
      > </Box> */}
      <Box sx={{ p: 2 }} >
      <Grid container spacing={2} gap="7px" paddingLeft="35px">
        <Grid item xs={12} md={2}>
        <MetricCard
            icon={<ShoppingCart sx={{ color: colors.blue[600], fontSize: "30px", background: colors.blue[200], borderRadius:2 }} />}
            title="Total Orders"
            value="75"
            percentage="3"
            color="success"
          />
        </Grid>
        <Grid item xs={12} md={2}>
        <MetricCard
            icon={<DeliveryDining  sx={{ color: colors.greenAccent[600], fontSize: "30px", background: colors.greenAccent[200], borderRadius:2 }} />}
            title="Total Delivered"
            value="70"
            percentage="-3"
            color=""
          />
        </Grid>
        <Grid item xs={12} md={2} >
        <MetricCard
            icon={<Cancel sx={{ color: colors.redAccent[600], fontSize: "30px", background: colors.redAccent[200], borderRadius:2 }}  />}
            title="Total Cancelled"
            value="05"
            percentage="3"
            color="error"
          />

        </Grid>
        <Grid item xs={12} md={2} >
        <MetricCard
            icon={<Money sx={{ color: colors.greenAccent[600], fontSize: "30px", background: colors.greenAccent[200], borderRadius:2 }}  />}
            title="Total Revenue"
            value="$12k"
            percentage="-3"
            color="warning"
            />
        </Grid>
        <Grid item xs={12} md={3.2}>
        <NetProfitComponent amount="6759.25" progress={70} />
        </Grid>
        <Grid item xs={12} md={7.5}>
          <ActivityChart/>
        </Grid>
        <Grid item xs={12} md={4}>
          <NavPanel/>
        </Grid>
       
        <Grid item xs={12} md={7.5}>
          <RecentOrders />
        </Grid>
        <Grid item xs={12} md={4}>
          <Feedback />
        </Grid>
      </Grid>
        </Box>

    </Box>

  )
}

export default Dashboard