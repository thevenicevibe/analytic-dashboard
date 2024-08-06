import { useState } from 'react'
import {ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './Topbar';
import Dashboard from './dashboard'
import CustomSidebar from './Sidebar';
import "./index.css"
import { Routes, Route } from 'react-router-dom';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="container">
          <CustomSidebar isSidebar={isSidebar}/>
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar}/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
        </ThemeProvider>    
      </ColorModeContext.Provider>
     
   
  )
}

export default App
