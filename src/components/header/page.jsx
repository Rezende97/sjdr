import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery('(max-width:1150px)');

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          backgroundImage: 'url("/images/headernovo.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          height: { xs: '200px', md: '250px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          px: { xs: 2, md: 18 },
          position: 'relative'
        }}
      >
        {/* Logotipos */}
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          height="100%"
          sx={{ mt: '-70px' }}
        >
          <Box 
            sx={{ 
              maxWidth: '150px',
              display: {
                xs: 'none',         
                sm: 'block',
              },
              '@media (max-width:526px)': {
                display: 'none',
              } 
            }}
          >
            <img
              src="/images/ministerio_cultura_petrobras.png"
              alt="Ministério da Cultura"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box sx={{ maxWidth: '150px' }}>
            <img
              src="/images/logo_menu.png"
              alt="Logo"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
        </Stack>

        {!isMobile && (
          <Stack
            direction="row"
            spacing={3}
            alignItems="center"
            height="100%"
            sx={{ mt: '-70px' }}
          >
            <Button sx={{ color: '#FFF4E5' }}>O PROJETO</Button>
            <Button sx={{ color: '#FFF4E5' }}>CIDADES</Button>
            <Button sx={{ color: '#FFF4E5' }}>REDES SOCIAIS</Button>
            <Button sx={{ color: '#FFF4E5', fontFamily: 'widescreen' }}>A PIRA</Button>
          </Stack>
        )}

        {isMobile && (
            <IconButton
                onClick={toggleDrawer}
                sx={{
                color: '#FFF4E5',
                position: 'absolute',
                top: '33%',
                right: 32,
                transform: 'translateY(-50%)',
                fontSize: '2rem',
                }}
            >
                <MenuIcon sx={{ fontSize: 40 }} />
            </IconButton>
            )}
      </Box>

      {/* Drawer para menu mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#1e4d38',
            color: '#FFF4E5',
            width: 240,
            padding: 2,
          },
        }}
      >
        <IconButton onClick={toggleDrawer} sx={{ color: '#FFF4E5', alignSelf: 'flex-end' }}>
          <CloseIcon />
        </IconButton>
        <Stack spacing={2} mt={4}>
          <Button sx={{ color: '#FFF4E5' }} onClick={toggleDrawer}>O PROJETO</Button>
          <Button sx={{ color: '#FFF4E5' }} onClick={toggleDrawer}>CIDADES</Button>
          <Button sx={{ color: '#FFF4E5' }} onClick={toggleDrawer}>REDES SOCIAIS</Button>
          <Button sx={{ color: '#FFF4E5', fontFamily: 'widescreen' }} onClick={toggleDrawer}>A PIRA</Button>
        </Stack>
      </Drawer>
    </>
  );
};

export default Header;
