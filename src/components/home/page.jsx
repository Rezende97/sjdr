import * as React from 'react';
import Box from '@mui/material/Box';

const Home = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
        }}>
            <Box>
                <img src='/images/Nuvem.png' width={250} />
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '18px'
            }}>
                <img src='/images/Apresenta.png' width={170} />
                <img src='/images/logo_home.png' width={300} />
            </Box>
            <Box>
                <img src='/images/passarinho.png' width={80} />
            </Box>
            <Box sx={{
                backgroundImage: 'url("/imagem/border_redes_sociais_home.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                border: '2px dashed rgba(201, 162, 62, 0.68)',
                borderRadius: '20px',
                padding: '27px 25px'
            }}>
                <img src='/images/facebook.png' width={40} />
                <img src='/images/instagram.png' width={40} />
                <img src='/images/TikTok.png' width={40} />
                <img src='/images/spotify.png' width={40} />
            </Box>
        </Box>
    )
}

export default Home