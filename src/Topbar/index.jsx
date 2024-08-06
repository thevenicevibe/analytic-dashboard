import { useContext } from 'react';
import { Box, IconButton,Avatar, useTheme } from '@mui/material';
import { ColorModeContext, tokens } from '../theme';
import InputBase from '@mui/material/InputBase';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import MarkChatUnreadOutlinedIcon from '@mui/icons-material/MarkChatUnreadOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import imageAvatar from "../assets/Image/avatar.jpg"

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/*Search Bar*/}
      <Box
       display="flex"
       sx={{ backgroundColor: `#434957 !important`, border: `1px solid white`}}
       borderRadius="3px">
        <IconButton type="button" sx={{pl:1}}>
          <SearchOutlinedIcon/>
        </IconButton>
        <InputBase sx={{flex:1}} placeholder='Search'/> 
      </Box>

        {/* ICONS */}
        <Box display="flex">
        {/* <IconButton  sx={{ backgroundColor: `${colors.primary[400]} !important`, borderRadius: `50%`, marginRight:`5px` }} onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
           <DarkModeOutlinedIcon />
          ) : (
           <LightModeOutlinedIcon/>
          )}
          
        </IconButton> */}
        <IconButton sx={{ backgroundColor: `#525252 !important ` , borderRadius: `50%`, marginRight:`5px`}}>
          <MailOutlineIcon />
        </IconButton>
        <IconButton sx={{ backgroundColor: `#525252 !important `, borderRadius: `50%`,marginRight:`5px` }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton  sx={{ backgroundColor: `#525252 !important `, borderRadius: `50%`,marginRight:`5px` }}>
          <MarkChatUnreadOutlinedIcon/>
        </IconButton> 
        <Avatar src={imageAvatar} />
  
        </Box>

        
    </Box>
  )
}

export default Topbar