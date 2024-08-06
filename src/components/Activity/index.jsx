import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Tooltip,
  IconButton,
  useTheme,
  Divider,
} from '@mui/material';
import {  BarChart as BarChartIcon } from '@mui/icons-material';
import {tokens} from "../../theme"

const ActivityChart = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  const data = [
    { x: 5, y: 3 },
    { x: 6, y: 12 },
    { x: 7, y: 5 },
    { x: 8, y: 6 },
    { x: 9, y: 5 },
    { x: 10, y: 7 },
    { x: 11, y: 7 },
    { x: 12, y: 7 },
    { x: 13, y: 7 },
    { x: 14, y: 3 },
    { x: 15, y: 1 },
    { x: 16, y: 8 },
    { x: 17, y: 8 },
    { x: 18, y: 8 },
    { x: 19, y: 11 },
    { x: 20, y: 10 },
    { x: 21, y: 14 },
    { x: 22, y: 12 },
    { x: 23, y: 9 },
    { x: 24, y: 6 },
    { x: 25, y: 12 },
    { x: 26, y: 10 },
    { x: 27, y: 8 },
  ];
  return (
    <Box sx={{ p: 2, backgroundColor: `${colors.primary[500]} !important` , height:'300px', borderRadius:'5px'}}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Typography variant="h6" sx={{ color: 'white' }}>
          Activity
        </Typography>
        <Tooltip title="Weekly" placement="bottom">
          <IconButton sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', color: 'white' }}>
            <BarChartIcon />
          </IconButton>
        </Tooltip>
      </Grid>
        <Box sx={{ p: 2, height:"230px", position:"relative"}}>
          <Box sx={{bottom:63,left:60, position: 'absolute'}}>
        <Grid container spacing={1} sx={{ mt:7, transform: 'rotate(180deg)'}}>
          {data.map((item) => (
            <Grid item key={item.x}>
              <Box
                sx={{
                  width: 10,
                  height: item.y * 5,
                  bgcolor: '#6384ff',
                  borderRadius: '4px',
                  
                }}
              />
            </Grid>
          ))}
        </Grid>
        </Box>
        <Box sx={{top:90,left:50, position: 'absolute'}}>
          <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' ,mt:8 }}>
            {data.map((item) => (
              <Grid item key={item.x}>
                <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 10 }}>
                  {item.x}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ position: 'absolute', left:30,top:35 , width:'600px'}}>
        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {['15k', '10k', '5k', '0'].map((label, index) => (
              <Grid item key={index} sx={{ width: '100%' }}>
                <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.6)' }} />
                <Typography variant="caption" sx={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: 10 }}>
                  {label}
                </Typography>
              </Grid>
              ))}
            </Grid>
            </Box>
        </Box>
    </Box>
  );
};

export default ActivityChart;


