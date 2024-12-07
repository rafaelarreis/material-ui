import React, { useState } from 'react';
import { Grid, FormControl, Input, FormHelperText, Box, Button } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const LoginWithMenu = () => {
  const [login, setLogin] = useState('');
  const [menuState, setMenuState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMenuState(open);
  };

  const handleLoginSubmit = () => {
    if (login.trim()) {
      alert(`Login realizado com sucesso: ${login}`);
    } else {
      alert('Por favor, preencha o campo de login.');
    }
  };

  const menuList = () => (
    <Box
      sx={{
        width: 250,
        bgcolor: '#f5f5f5',
        height: '100%',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: '#e3f2fd',
      }}
    >
      {/* Botão para abrir o menu */}
      <Button
        variant="contained"
        color="primary"
        onClick={toggleDrawer(true)}
        sx={{ marginBottom: 3 }}
      >
        Abrir Menu
      </Button>
      <Drawer anchor="left" open={menuState} onClose={toggleDrawer(false)}>
        {menuList()}
      </Drawer>

      {/* Formulário de Login */}
      <Box
        sx={{
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: '#fff',
          width: 300,
          textAlign: 'center',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <Input
                id="login_nome"
                aria-describedby="login_nome_helper_text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                sx={{ marginBottom: 2 }}
              />
              <FormHelperText id="login_nome_helper_text">
                Digite seu Login.
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="success" fullWidth onClick={handleLoginSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LoginWithMenu;
