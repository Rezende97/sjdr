import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Header = () => {
    return (
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
                px: { xs: 2, md: 30 }
            }}
        >
            {/* Logotipos */}
            <Stack direction="row"
  spacing={3}
  alignItems="center"
  height="100%"
  sx={{ mt: '-70px' }}>
                <Box sx={{ maxWidth: '150px' }}>
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

            {/* Menu */}
            <Stack direction="row"
  spacing={3}
  alignItems="center"
  height="100%"
  sx={{ mt: '-70px' }}>
                <Button sx={{ color: '#FFF4E5' }}>O PROJETO</Button>
                <Button sx={{ color: '#FFF4E5' }}>CIDADES</Button>
                <Button sx={{ color: '#FFF4E5' }}>REDES SOCIAIS</Button>
                <Button sx={{ color: '#FFF4E5', fontFamily: 'widescreen' }}>A PIRA</Button>
            </Stack>

        </Box>
    );
};

export default Header;
