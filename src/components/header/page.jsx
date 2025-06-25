import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:1150px)');

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToProjeto = () => {
    const cidadesSection = document.getElementById('projeto-section');
    if (cidadesSection) {
      cidadesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false); 
  };

  const scrollToCidades = () => {
    const cidadesSection = document.getElementById('cidades-section');
    if (cidadesSection) {
      cidadesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false); 
  };

  const scrollToRedeSociais = () => {
    const cidadesSection = document.getElementById('rede-sociais-section');
    if (cidadesSection) {
      cidadesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false); 
  };

  const scrollToPira = () => {
    const cidadesSection = document.getElementById('pira-section');
    if (cidadesSection) {
      cidadesSection.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false); 
  };

  return (
    <>
      <Box
        component="header"
        sx={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/header-fundo.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          height: { xs: '200px', md: '250px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          px: { xs: 2, md: 16 },
          position: 'relative',
          '@media (max-width:1150px)': {
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/header_fundo_s.png)`,
            zIndex: 1,
            bottom: '50px'
          }
        }}

        // 
      >
        {/* Logotipos */}
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          height="100%"
          sx={{ mt: '-70px', "@media (max-width:1150px)": {
            display: 'none'
          } }}
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
              src={process.env.PUBLIC_URL + '/images/ministerio_cultura_petrobras.png'}
              alt="Ministério da Cultura"
              style={{ width: '100%', height: 'auto' }}
            />
          </Box>
          <Box sx={{ maxWidth: '150px' }}>
            <img
              src={process.env.PUBLIC_URL + '/images/logo_menu.png'}
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
            <Button sx={{ fontFamily: "Montserrat, sans-serif", color: '#FEF5E6', fontWeight: 'bold' }} onClick={scrollToProjeto}>O PROJETO</Button>
            <Button sx={{ fontFamily: "Montserrat, sans-serif", color: '#FEF5E6', fontWeight: 'bold' }} onClick={scrollToCidades}>CIDADES</Button>
            <Button sx={{ fontFamily: "Montserrat, sans-serif", color: '#FEF5E6', fontWeight: 'bold' }} onClick={scrollToRedeSociais}>REDES SOCIAIS</Button>
            <Button sx={{ fontFamily: "Montserrat, sans-serif", color: '#FEF5E6', fontWeight: 'bold' }} onClick={scrollToPira}>A PIRA</Button>
          </Stack>
        )}

        {isMobile && (
            <IconButton
                onClick={toggleDrawer}
                sx={{
                color: '#FEF5E6',
                position: 'absolute',
                top: '33%',
                right: 32,
                transform: 'translateY(-50%)',
                fontSize: '2rem',
                '@media (max-width:1150px)': {
                  top: '48%',
                }
              }}
            >
                <MenuIcon sx={{ fontSize: 40 }} />
            </IconButton>
            )}
      </Box>

      <Box sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-around',
        background: '#FEF5E6',
        height: '25px'
      }}>

        <Box
          sx={{
            position: 'relative',
            bottom: '45px',
            "@media (max-width:1150px)": {
              rotate: '-10deg',
              right: '25px',
              bottom: '95px'
            },
            "@media (max-width:900px)": {
              rotate: '-10deg',
              right: '25px',
              bottom: '100px'
            },
            "@media (max-width:375px)": {
              rotate: '-15deg',
              right: '25px',
              bottom: '100px'
            }
          }}
        >
          <img src={process.env.PUBLIC_URL + '/images/bandeirolas-esquerdo.png'} alt='Bandeirinha' width={200} />
        </Box>

        <Box
          sx={{
            position: 'relative',
            bottom: '87px',
            '@media (max-width:1150px)': { 
              bottom: '118px',
            }
          }}
        >
          <img src={process.env.PUBLIC_URL + '/images/bandeirolas-direito.png'} alt='Bandeirinha' width={200}/>
        </Box>
      </Box>

      {/* Drawer para menu mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: '#1e4d38',
            color: '#FEF5E6',
            width: 240,
            padding: 2,
          },
        }}
      >
        <IconButton onClick={toggleDrawer} sx={{ color: '#FEF5E6', alignSelf: 'flex-end' }}>
          <CloseIcon />
        </IconButton>
        <Stack spacing={2} mt={4}>
          <Button sx={{ fontFamily: "Montserrat, sans-serif", color: '#FEF5E6', fontWeight: 'bold' }} onClick={scrollToProjeto}>O PROJETO</Button>
          <Button sx={{ fontFamily: "Montserrat, sans-serif", color: '#FEF5E6', fontWeight: 'bold' }} onClick={scrollToCidades}>CIDADES</Button>
          <Button sx={{ fontFamily: "Montserrat, sans-serif", color: '#FEF5E6', fontWeight: 'bold' }} onClick={scrollToRedeSociais}>REDES SOCIAIS</Button>
          <Button sx={{ fontFamily: "Montserrat, sans-serif", color: '#FEF5E6', fontWeight: 'bold' }} onClick={scrollToPira}>A PIRA</Button>
        </Stack>
      </Drawer>
    </>
  );
};

export default Header;
