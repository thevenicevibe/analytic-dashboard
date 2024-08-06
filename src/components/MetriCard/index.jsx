import React from 'react';
import { Box, Card,CardContent, Typography, Stack, useTheme } from '@mui/material';
import {tokens} from "../../theme"

const MetricCard = ({ icon, title, value, percentage, color }) => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Card sx={{  backgroundColor: `${colors.primary[500]} !important`}} >
      <CardContent>
        <Stack direction="column" alignItems="left" spacing={2}>
          {icon}
          <Typography variant="body2" gutterBottom>
          {title}
        </Typography>


        
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              bgcolor: `${color}.200`,
              borderRadius: '4px',
              padding: '5px 10px',
            }}
          >
             <Typography variant="h6">{value}</Typography>
            <Typography variant="body2" color={color}>
              {percentage}%
            </Typography>
          </Box> 
        </Stack>
       
      </CardContent>
    </Card>
  )
}

export default MetricCard