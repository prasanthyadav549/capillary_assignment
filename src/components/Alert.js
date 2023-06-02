import React from 'react'
import { GameListState } from '../GameContext';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = () => {
    const {alert,setAlert} = GameListState();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setAlert({open:false});
      };
  return (
    <Snackbar
    open={alert.open}
    autoHideDuration={6000}
    onClose={handleClose}
    >
      <MuiAlert 
      severity={alert.type}
      elevation={10}
        variant="filled"
        onClose={handleClose}
      >{alert.message}</MuiAlert>

    </Snackbar>
  )
}

export default Alert
