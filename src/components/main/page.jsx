import Box from '@mui/material/Box';

const Main = () => {
    return (
        <Box 
            component="section" 
            sx={{ 
                backgroundImage: 'url("/images/background-main.png")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: '18rem'
        }}>

            {/* plalist spotify */}
            <Box
                sx={
                    {
                        background: '#231F20',
                        padding: '11px',
                        borderRadius: '20px'
                    }
            }>
                {/* inicio do container */}

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '60px',
                    border: '2px dashed rgba(201, 162, 62, 0.68)',
                    padding: '15px',
                    borderRadius: '20px'
                }}>
                    {/* cto spotify */}
                    <Box sx={
                        {
                            display: 'flex',
                            justifyContent: 'left',
                            flexDirection: 'column',
                            gap: '10px'
                        }
                    }>
                        <img
                            src="/images/confira_playlist.png"
                            alt="Confira Playlist"
                            width='170px'
                            height='45px'
                        />

                        <img
                            src="/images/Spotify_logo_with_text.svg.png"
                            alt="Confira Playlist"
                            width='100px'
                            height='30px'
                        />
                    </Box>

                    {/* nome da música */}
                    <Box sx={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px'
                        }
                    }>
                        <img
                            src="/images/Camada 4.png"
                            alt="Confira Playlist"
                            width='70px'
                            height='70px'
                        />

                        <img
                            src="/images/Arriadin por Tu João Gomes, Mestrinho, Jota.pê.png"
                            alt="Confira Playlist"
                            width='180px'
                            height='50px'
                        />
                    </Box>

                    {/* play na musica */}
                    <Box>
                        <img
                            src="/images/Objeto Inteligente de Vetor 8.png"
                            alt="Confira Playlist"
                            width='160px'
                            height='60px'
                        />
                    </Box>
                </Box>

                {/* fim do container */}
            </Box>

            {/* texto sobre a tradição */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: '5rem',
                }}
            >
                
                {/* sanfona e triângulo */}
                <Box 
                    sx={
                    {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        gap: '20px'
                    }
                    }
                >
                    <img
                        src="/images/Sanfona.png"
                        alt="Sanfona"
                        width='170px'
                        height='80px'
                    />

                    <img
                        src="/images/triangulo.png"
                        alt="Lua e Estrela"
                        width='100px'
                        height='70px'
                    />
                </Box>

                {/* lua e estrela */}
                <Box 
                    sx={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }
                    }
                >
                    <img
                        src="/images/lua_estrela.png"
                        alt="Triângulo"
                        width='70px'
                        height='70px'
                    />
                </Box>

                {/* tradição e texto sobre sao joao */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '20px'

                    }}    
                >
                    <img
                        src="/images/tradicao_boa_viver.png"
                        alt="Tradição"
                        width='250px'
                        height='80px'
                    />

                    <img
                        src="/images/o_sao_Joao.png"
                        alt="O São Joâo"
                        width='350px'
                        height='200px'
                    />
                </Box>
                
            </Box>

            {/* redes sociais */}
                
        </Box>
    )
}

export default Main