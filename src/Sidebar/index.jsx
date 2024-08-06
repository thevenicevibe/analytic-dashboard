import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  useTheme,
} from '@mui/material';
import { Sidebar as ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import {
  GridViewOutlined as GridViewOutlinedIcon,
  HomeOutlined as HomeOutlinedIcon,
  AssessmentOutlined as AssessmentOutlinedIcon,
  AccountBalanceWalletOutlined as AccountBalanceWalletOutlinedIcon,
  AssignmentTurnedInOutlined as AssignmentTurnedInOutlinedIcon,
  ExitToApp as ExitToAppIcon,
} from '@mui/icons-material';
import { tokens } from '../theme';

const Item = ({ title, to, icon, selected, setSelected }) => (
  <MenuItem
    icon={icon}
    active={selected === to}
    onClick={() => setSelected(to)}
  >
    {title}
  </MenuItem>
);

const CustomSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selected, setSelected] = useState('/');

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          backgroundColor: `${colors.primary[500]} !important`,
          borderRight: 'none !important' 
        },
        "& .pro-icon-wrapper": {
          backgroundColor: `transparent !important`
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important"
        },
        "& .pro-menu-item.active": {
          color: `${colors.primary[500]} !important`,
          backgroundColor: `${colors.blue[500]} !important`
        }
      }}
      height="100%"    >
      <ProSidebar collapsed={isCollapsed} backgroundColor={colors.primary[500]} height="100%" >
        <Menu iconShape="square" height="100%">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <GridViewOutlinedIcon /> : undefined}
            sx={{ margin: "10px 0 20px 0" }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
                <Typography variant="h6" color={colors.grey[100]}>
                  USER
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <GridViewOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          <Box paddingLeft={isCollapsed ? undefined : "10%"} display="flex" flexDirection="column" justifyContent="space-between" height="226vh">
            <Box>
              <Item title="Home" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Analytics" to="/analytics" icon={<AssessmentOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Activity" to="/activity" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Account" to="/account" icon={<AccountBalanceWalletOutlinedIcon />} selected={selected} setSelected={setSelected} />
              <Item title="Feedback" to="/feedback" icon={<AssignmentTurnedInOutlinedIcon />} selected={selected} setSelected={setSelected} />
            </Box>
            <Box>
              <Item title="Log Out" to="/logout" icon={<ExitToAppIcon />} selected={selected} setSelected={setSelected} />
            </Box>
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default CustomSidebar;
