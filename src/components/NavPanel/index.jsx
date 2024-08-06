import React from 'react'
import { Card, CardContent, Typography, Stack ,IconButton,Divider, useTheme} from '@mui/material';
import {
   Settings,
    LocalDining,
    CloudDownload,
    ArrowForward,
  } from '@mui/icons-material';
  import {tokens} from "../../theme"

const NavButton = ({ icon, label }) => {
    return (
      <IconButton sx={{ bgcolor: 'primary.100', borderRadius: '50%' }}>
        {icon}
        <Typography variant="body2" sx={{ ml: 1 }}>
          {label}
        </Typography>
      </IconButton>
    );
  };

const NavPanel = () => {
  const theme = useTheme();
    const colors = tokens(theme.palette.mode);
  return (
    <Card sx={{ mb: 2 ,height:"300px", backgroundColor: `${colors.primary[500]} !important`}}>
      <CardContent sx={{p:5}}>
        
        {/* <Divider /> */}
        <Stack direction="column" spacing={2} sx={{ mt: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
        <NavButton icon={<Settings  sx={{ color: colors.redAccent[600], fontSize: "30px", background: colors.redAccent[200], borderRadius:"50%" }} />} label="Goals" />
          <IconButton>
            <ArrowForward />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
        <NavButton icon={<LocalDining sx={{ color: colors.blue[800], fontSize: "30px", background: colors.greenAccent[300], borderRadius:"50%" }}  />} label="Popular Dishes" />
          <IconButton>
            <ArrowForward />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="space-between">
        <NavButton icon={<CloudDownload sx={{ color: colors.greenAccent[600], fontSize: "30px", background: colors.greenAccent[200], borderRadius:"50%"}}  />} label="Menus" />
          <IconButton>
            <ArrowForward />
          </IconButton>
        </Stack>
          
          
        </Stack>
      </CardContent>
    </Card>
  )
}

export default NavPanel