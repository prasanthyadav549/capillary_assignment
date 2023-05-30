import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button, Select, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';


const darkTheme=createTheme({
    palette: {
        // primary:{
        //     main:"#fff",
        // },
        type:"dark",
    },
});

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        {/* <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        /> */}
      </FormGroup>
      <AppBar position="static">
      <Toolbar>
  <Typography variant="h6" component="span">
    from:
  </Typography>
  <input type="datetime-local" />
  <Typography variant="h6" component="span" sx={{ marginLeft: '20px', marginRight: '10px' }}>
    to:
  </Typography>
  <input type="datetime-local" />
  <Box sx={{ flexGrow: 1 }} />
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    variant="outlined"
    //value={selectedValue}
    //onChange={handleSelectChange}
    sx={{ marginLeft: '10px', marginRight: '10px' }}
  >
    <MenuItem value="option1">Option 1</MenuItem>
    <MenuItem value="option2">Option 2</MenuItem>
    <MenuItem value="option3">Option 3</MenuItem>
  </Select>

  <Button variant="contained">Contained</Button>
  {auth && (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        sx={{ marginLeft: '10px' }}
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu>
    </div>
  )}
</Toolbar>

      </AppBar>
    </Box>
    </ThemeProvider>
  );
}