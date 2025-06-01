import Box from '@mui/material/Box';

const Main = () => {
    return (
        <Box 
            component="section" 
            sx={{ 
                backgroundImage: 'url("/images/background.png")',
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
            <Box >

                {/* instagram e tiktok */}
                <Box 
                    sx={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px'
                        }
                    }
                >
                    <img
                        src="/images/retangulo_rede_social.png"
                        alt="instagram"
                        width='50%'
                        height='400px'
                    />

                    <img
                        src="/images/retangulo_rede_social.png"
                        alt="TikTok"
                        width='50%'
                        height='400px'
                    />
                </Box>

                {/* youtube */}
                <Box 
                    sx={
                        {
                            display: 'flex',
                            justifyContent: 'center',
                            paddingY: '40px'
                        }
                    }
                >
                    <img
                        src="/images/retangulo_horizontal_rede_social.png"
                        alt="Youtube"
                        width='100%'
                    />
                </Box>

            </Box>        

            {/* cidades */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '50px'
            }}>

                {/* cidade e passarinho */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '150px 0 0 100px',
                    gap: '40px'
                }}>
                    <Box>
                        <img src="/images/CIDADES.png" alt="cidades" width={220} />
                    </Box>
                    <Box>
                        <img src="/images/passarinho_cidade.png" alt="passarinho" width={80}/>
                    </Box>
                </Box>

                {/* nome das cidades */}
                <Box sx={{
                    display: 'flex',
                    gap: '35px'
                }}>
                    <Box>
                        <img src="/images/cidade-lado-esquerdo.png" alt="cidades" width={290} />
                    </Box>
                    <Box>
                        <img src="/images/cidade-lado-direito.png" alt="passarinho" width={290}/>
                    </Box>
                </Box>
            </Box>

            {/* sobre a pira */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '45px'
                }}
            >

                {/* sobre a pira */}
                <Box 
                    sx={{
                        display: 'flex',
                        alignItems: 'end',
                        padding: '460px 0 0 0',
                        gap: '30px'
                    }}
                >
                    <img src="/images/SOBREAPIRA.png" alt="Sobre a Pira" width={170} />
                    <img src="/images/iconpira.png" alt="Sobre a Pira" width={50} height={50} />
                </Box>

                {/* texto sobre pira */}
                <Box>
                    <img src="/images/texto_pira.png" alt="Sobre a Pira" width={440} height={260} />
                </Box>

            </Box>

            {/* rodapé */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    position: 'relative',
                    top: '15rem'
                }}
            >

                {/* patrocinadores */}
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '5px',
                    }}
                >
                    <img src="/images/lei.png" alt="Lei" width={170} height={120} />
                    <img src="/images/petrobras.png" alt="Petrobras" width={170} height={70} />
                    <img src="/images/pira-realizacao.png" alt="Petrobras" width={170} height={70} />
                    <img src="/images/ministerio_da_cultura.png" alt="Petrobras" width={170} height={70} />
                    <img src="/images/governo.png" alt="Petrobras" width={170} height={70} />
                </Box>

                {/* texto sobre pira */}
                <Box>
                    <img src="/images/diga_nao_ao_racismo.png" alt="Diga não ao Racismo" width={170} height={40} />
                    <img src="/images/recicle_sempre.png" alt="Recicle Sempre" width={170} height={40} />
                </Box>

            </Box>


        </Box>
    )
}

export default Main