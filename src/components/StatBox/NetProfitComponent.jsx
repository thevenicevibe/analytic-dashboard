import React from 'react';
import { tokens } from "../../theme";
import { Box, Typography, CircularProgress, Stack , useTheme} from '@mui/material';

const NetProfitComponent = ({ amount, progress }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',  backgroundColor: `${colors.primary[500]} !important` }} height="159px" padding="15px" borderRadius="5px">
      <Stack spacing={0.5}>
        <Typography variant="body2" color="text.secondary">
          Net Profit
        </Typography>
        <Typography variant="h5" color="text.primary" fontWeight="bold">
          ${amount}
        </Typography>
        <Typography variant="caption" color="success.main">
          ▲ 3%
        </Typography>
      </Stack>
      <Box sx={{ position: 'relative', display: 'inline-flex', width: 100 }}>
        <CircularProgress
          variant="determinate"
          value={progress}
          size={150}
         thickness={4}
          sx={{
            color: '#4CAF50',
            '& .MuiCircularProgress-circle': {
              stroke: ` ${colors.blue[500]}`,
              strokeLinecap: 'round',
              strokeDasharray: '100 100',
              strokeDashoffset: `${(100 - progress) * 1.5}px`,
              transition: 'stroke-dashoffset 1s',
            },
            '& .MuiCircularProgress-circle.MuiCircularProgress-colorPrimary': {
              stroke: '#4CAF50',
              strokeWidth: 8,
            },
            '& .MuiCircularProgress-circle.MuiCircularProgress-colorSecondary': {
              stroke: 'rgba(0, 0, 0, 0.2)',
              strokeWidth: 8,
            },
          }}
        />
          <Box
        sx={{
        bottom:50,
         position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" color="text.secondary" align="center">
          {progress}%
          <br />
          Completed
        </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NetProfitComponent;
