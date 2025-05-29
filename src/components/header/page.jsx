import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
    return (
        <Box 
            component="section" 
            sx={{ 
                backgroundImage: 'url("/images/header2.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                width: '100%',
                height: '33vh' 
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                paddingY: '20px'
            }}>
                <Stack direction="row" spacing={12}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px'
                    }}>
                        <Box>
                            <img src='/images/ministerio_cultura_petrobras.png' sx={{width: '15rem'}} />
                        </Box>
                        <Box>
                            <img src='/images/logo_menu.png' sx={{width: '15rem'}} />
                        </Box>
                    </Box>
                    <Box>
                        <Button
                            id="basic-button"
                            aria-haspopup="true"
                            sx={{color:'#FFF4E5' }}
                        >
                            O PROJETO
                        </Button>
                        <Button
                            id="basic-button"
                            aria-haspopup="true"
                            sx={{color:'#FFF4E5' }}
                        >
                            CIDADES
                        </Button>
                        <Button
                            id="basic-button"
                            aria-haspopup="true"
                            sx={{color:'#FFF4E5' }}
                        >
                            REDES SOCIAIS
                        </Button>
                        <Button
                            id="basic-button"
                            aria-haspopup="true"
                            sx={{color:'#FFF4E5', fontFamily: 'widescreen' }}
                        >
                            A PIRA
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Box>
    )
}

export default Header