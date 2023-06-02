import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Button, Select, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { GameListState } from '../GameContext';
import { signOut } from 'firebase/auth';
import { auth} from '../firebase'


const darkTheme=createTheme({
    palette: {
        // primary:{
        //     main:"#fff",
        // },
        type:"dark",
    },
});

export default function MenuAppBar() {
  const {user,setAlert } = GameListState()
  const logOut = () => {
    signOut(auth);
    setAlert({
      open: true,
      type: "success",
      message: "Logout Successfull !",
    });

    
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ flexGrow: 1 }}>
       
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="span">
              Pro Games
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
           
            {user && <Button variant="contained"
            onClick = {logOut}
            >
            <Typography variant="h6" component="span">
              LogOut
            </Typography>
            </Button>}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}