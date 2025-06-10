import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../../styles/main.css';

const Home = () => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    '@media (max-width:746px)': {
                        display: 'flex',
                        flexDirection: 'column'
                    }
                }}
            >
                <Box sx={{ '@media (max-width:746px)': { display: 'none' } }}>
                    {/* <img src='/images/Nuvem.png' width={250} alt="Imagem" /> */}
                    <img src={process.env.PUBLIC_URL + '/images/Nuvem.png'} width={250} alt="Imagem" />
                    
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: '18px',
                    '@media (max-width:746px)': {
                        marginTop: '20px'
                    }
                }}>
                    {/* <img src='/images/Apresenta.png' width={170} alt="Imagem" />
                    <img src='/images/logo_home.png' width={300} alt="Imagem"/> */}
                    <img src={process.env.PUBLIC_URL + '/images/Apresenta.png'} width={170} alt="Imagem" />
                    <img src={process.env.PUBLIC_URL + '/images/logo_home.png'} width={300} alt="Imagem"/>
                </Box>

                <Box sx={{ '@media (max-width:746px)': { display: 'none' } }}>
                    {/* <img src='/images/passarinho.png' width={80} alt="Imagem"/> */}
                    <img src={process.env.PUBLIC_URL + '/images/passarinho.png'} width={80} alt="Imagem"/>
                </Box>

                <Box sx={{
                    // backgroundImage: 'url("/imagem/border_redes_sociais_home.png")',
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/border_redes_sociais_home.png)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '18px',
                    border: '2px dashed rgba(201, 162, 62, 0.68)',
                    borderRadius: '20px',
                    padding: '27px 25px',
                    '@media (max-width:746px)': {
                        flexDirection: 'row',
                        marginTop: '25px'
                    }
                }}>
                    {/* <a href="https://www.facebook.com/profile.php?id=61561246527019&mibextid=wwXIfr&mibextid=wwXIfr" target='_blank' rel="noreferrer"><img src='/images/facebook.png' width={40} alt="Facebook" /></a>
                    <a href="https://www.instagram.com/saojoaodoreencontro/" target='_blank' rel="noreferrer"> <img src='/images/Instagram.png' width={40} alt="Instagram"/> </a>
                    <a href="https://www.tiktok.com/@saojoaodoreencontro" target='_blank' rel="noreferrer"><img src='/images/TikTok.png' width={40} alt="TikTok"/></a>
                    <a href="https://open.spotify.com/user/314az2mxlsdg52eeecvt73sxupcu?si=14a75400a771492c&nd=1&dlsi=0a80dc4fc89b4ae4" target='_blank' rel="noreferrer"><img src='/images/spotify.png' width={40} alt="spotify" /></a> */}

                    <a href="https://www.facebook.com/profile.php?id=61561246527019&mibextid=wwXIfr&mibextid=wwXIfr" target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + '/images/facebook.png'} width={40} alt="Facebook" /></a>
                    <a href="https://www.instagram.com/saojoaodoreencontro/" target='_blank' rel="noreferrer"> <img src={process.env.PUBLIC_URL + '/images/Instagram.png'} width={40} alt="Instagram"/> </a>
                    <a href="https://www.tiktok.com/@saojoaodoreencontro" target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + '/images/TikTok.png'} width={40} alt="TikTok"/></a>
                    <a href="https://open.spotify.com/user/314az2mxlsdg52eeecvt73sxupcu?si=14a75400a771492c&nd=1&dlsi=0a80dc4fc89b4ae4" target='_blank' rel="noreferrer"><img src={process.env.PUBLIC_URL + '/images/spotify.png'} width={40} alt="spotify" /></a>

                </Box>
            </Box>
            <br />

            {/* inicio container main */}
            <Box
                component="section"
                sx={{
                    // backgroundImage: 'url("/images/inicio-main.jpg")',
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/inicio-main.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    px: { xs: 2, md: 18 },
                    position: 'relative',
                    flexDirection: 'column',
                    height: '100vh',
                    padding: '280px 0 0 0',
                    '@media (max-width:746px)': { 
                        padding: '0 0 0 0',
                        height: '0'
                    }
                }}
            >

                {/* inicio container spotify musica */}
                <Box
                    sx={{
                        background: '#231F20',
                        padding: '11px',
                        borderRadius: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >

                    {/* container central */}
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
                            {/* <img
                                src="/images/confira_playlist.png"
                                alt="Confira Playlist"
                            />

                            <img
                                src="/images/Spotify_logo_with_text.svg.png"
                                alt="Confira Playlist"
                                width={105}
                            /> */}

                            <img
                                src={process.env.PUBLIC_URL + '/images/confira_playlist.png'}
                                alt="Confira Playlist"
                            />

                            <img
                                src={process.env.PUBLIC_URL + '/images/Spotify_logo_with_text.svg.png'}
                                alt="Confira Playlist"
                                width={105}
                            />

                        </Box>

                        {/* play na musica */}
                        <Box>
                            <iframe
                                style={{ borderRadius: '12px' }}
                                src="https://open.spotify.com/embed/playlist/1m12R22yiuQirwlBL6xvnI?utm_source=generator&theme=0"
                                width="100%"
                                height="90"
                                frameBorder="0"
                                allowFullScreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                title="Player de música do Spotify"
                            />
                        </Box>
                    </Box>
                </Box>
                {/* fim container spotify musica */}

                {/* inicio container tradição boa de viver */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        padding: '5rem',
                        gap: '15px'
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
                        {/* <img
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
                        /> */}

                        <img
                            src={process.env.PUBLIC_URL + '/images/Sanfona.png'}
                            alt="Sanfona"
                            width='170px'
                            height='80px'
                        />

                        <img
                            src={process.env.PUBLIC_URL + '/images/triangulo.png'}
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
                                alignItems: 'center',
                                '@media (max-width:746px)': { 
                                    display: 'none'
                                }
                            }
                        }
                    >
                        {/* <img
                            src="/images/lua_estrela.png"
                            alt="Triângulo"
                            width='70px'
                            height='70px'
                        /> */}
                        
                        <img
                            src={process.env.PUBLIC_URL + '/images/lua_estrela.png'}
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
                            gap: '20px',
                            '@media (max-width:746px)': {
                                display: 'none'
                            }
                        }}
                    >
                        {/* <img
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
                        /> */}

                        <img
                            src={process.env.PUBLIC_URL + '/images/tradicao_boa_viver.png'}
                            alt="Tradição"
                            width='250px'
                            height='80px'
                        />

                        <img
                            src={process.env.PUBLIC_URL + '/images/o_sao_Joao.png'}
                            alt="O São Joâo"
                            width='350px'
                            height='200px'
                        />

                    </Box>

                    <Box
                        sx={{
                            display: 'none',
                            '@media (max-width:746px)': { 
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'right',
                                flexDirection: 'column'
                            }
                        }}
                    >
                        <Typography variant="h4" component="h2" sx={{color: '#FFF4E5'}}>
                            TRADIÇÃO
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{color: '#FFF4E5'}}>
                            BOA DE
                        </Typography>
                        <Typography variant="h4" component="h2" sx={{color: '#FFF4E5'}}>
                            VIVER
                        </Typography>

                        <Typography variant="subtitle1" sx={{color: '#FFF4E5'}}>
                            O São João do Reencontro nasce do desejo
                            de reconectar a Bahia com a força de sua
                            maior tradição popular. Criamos um circuito
                            junino por 27 municípios, valorizando as
                            raízes culturais de cada região e reacendendo
                            o sentimento de pertencimento. Mais que
                            celebrar, o projeto movimenta a economia
                            criativa, fortalece o turismo e promove
                            diversidade.
                            <br/>
                            É tradição boa de viver — de interior a interior, de palco em palco, de abraço em abraço.
                        </Typography>


                    </Box>
                </Box>
                {/* fim container tradição boa de viver */}
            </Box>
            {/* fim container main */}
            
            {/* inicio container redes sociais */}
            <Box
                component="section"
                sx={{
                    // backgroundImage: 'url("/images/fundo-rede-social.jpg")',
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/fundo-rede-social.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    px: { xs: 2, md: 18 },
                    position: 'relative',
                    flexDirection: 'column'
                }}
            >

                {/* redes sociais */}
                <Box >

                    {/* instagram e tiktok */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px',
                            '@media (max-width:746px)': { 
                                display: 'flex',
                                flexDirection: 'column'
                            }
                        }}
                    >
                        {/* Instagram Embed */}
                        <div className="instagram-embed" style={{
                            background: '#000000',
                            padding: '15px',
                            borderRadius: '15px'
                        }}>
                            <blockquote 
                                className="instagram-media"
                                data-instgrm-permalink="https://www.instagram.com/p/C9NiawxJQGy/?utm_source=ig_embed&amp;utm_campaign=loading" 
                                data-instgrm-version="14"
                                style={{ 
                                    background: '#FFF', 
                                    border: '0', 
                                    borderRadius: '23px', 
                                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', 
                                    margin: '1px', 
                                    maxWidth: '540px', 
                                    minWidth: '326px', 
                                    padding: '0', 
                                    // width: '99.375%', 
                                    WebkitCalc: '100% - 2px', 
                                    width: 'calc(90% - 2px)'
                                }}
                            >
                                {/* Rest of the Instagram embed HTML */}
                            </blockquote>
                        </div>

                        {/* Load Instagram script */}
                        {typeof window !== 'undefined' && (
                            <script async src="//www.instagram.com/embed.js" />
                        )}

                        {/* <img
                            src="/images/retangulo_rede_social.png"
                            alt="TikTok"
                            style={{ width: '50%', height: '400px' }}
                        /> */}

                        <img
                            src={process.env.PUBLIC_URL + '/images/retangulo_rede_social.png'}
                            alt="TikTok"
                            style={{ width: '50%', height: '400px' }}
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
                        {/* <img
                            src="/images/retangulo_horizontal_rede_social.png"
                            alt="Youtube"
                            width='100%'
                        /> */}

                         <img
                            src={process.env.PUBLIC_URL + '/images/retangulo_horizontal_rede_social.png'}
                            alt="Youtube"
                            width='100%'
                        />
                    </Box>

                </Box>
            </Box>
            {/* fim container redes sociais */}
            
            {/* inicio container cidade */}
            <Box
                component="section"
                id="cidades-section"
                sx={{
                    // backgroundImage: 'url("/images/laranja-cidade.jpg")',
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/laranja-cidade.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    px: { xs: 2, md: 18 },
                    position: 'relative',
                    flexDirection: 'column'
                }}
            >

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
                        gap: '40px',
                        '@media (max-width:435px)': { 
                            gap: '20px',
                            padding: '90px 0 0 40px'
                        }
                    }}>
                        <Box>
                            {/* <img src="/images/CIDADES.png" alt="cidades" width={220} /> */}
                            <img src={process.env.PUBLIC_URL + '/images/CIDADES.png'} alt="cidades" width={220} />
                        </Box>
                        <Box>
                            {/* <img src="/images/passarinho_cidade.png" alt="passarinho" width={80} /> */}
                            <img src={process.env.PUBLIC_URL + '/images/passarinho_cidade.png'} alt="passarinho" width={80} />
                        </Box>
                    </Box>

                    {/* nome das cidades */}
                    <Box sx={{
                        display: 'flex',
                        gap: '35px',
                        '@media (max-width:600px)': { 
                            display: 'none'
                        }
                    }}>
                        <Box sx={{
                            '@media (max-width:600px)': { 
                                display: 'flex',
                                justifyContent: 'left'
                            }
                        }}>
                            {/* <img src="/images/cidade-lado-esquerdo.png" alt="cidades" width={290} /> */}
                            <img src={process.env.PUBLIC_URL + '/images/cidade-lado-esquerdo.png'} alt="cidades" width={290} />
                            
                        </Box>
                        <Box sx={{
                            '@media (max-width:600px)': { 
                                padding: '5px'
                            }
                        }}>
                            {/* <img src="/images/cidade-lado-direito.png" alt="passarinho" width={270} /> */}
                            <img src={process.env.PUBLIC_URL + '/images/cidade-lado-direito.png'} alt="passarinho" width={270} />
                        </Box>
                    </Box>

                    {/* mobile */}
                    <Box sx={{
                        display: 'none',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '9px',
                        '@media (max-width:600px)': { 
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column'
                        }
                    }}>
                        <Box >
                            {/* <img src="/images/cidades01.png" alt="cidades" width={290} /> */}
                            <img src={process.env.PUBLIC_URL + '/images/cidades01.png'} alt="cidades" width={290} />
                        </Box>
                        <Box sx={{
                            '@media (max-width:600px)': { 
                                padding: '5px'
                            }
                        }}>
                            {/* <img src="/images/cidade02.png" alt="passarinho" width={290} /> */}
                            <img src={process.env.PUBLIC_URL + '/images/cidade02.png'} alt="passarinho" width={290} />
                        </Box>
                    </Box>



                </Box>
            </Box>
            {/* fim container cidade */}

            {/* inicio container pira */}
            <Box
                component="section"
                sx={{
                    // backgroundImage: 'url("/images/fundo-pira.jpg")',
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/fundo-pira.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    px: { xs: 2, md: 18 },
                    position: 'relative',
                    flexDirection: 'column'
                }}
            >

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
                        className='container-pira'
                        sx={{
                            display: 'flex',
                            alignItems: 'end',
                            padding: '200px 0 0 0',
                            gap: '30px'
                        }}
                    >
                        {/* <img src="/images/SOBREAPIRA.png" alt="Sobre a Pira" className='logo-image' />
                        <img src="/images/Iconpira.png" alt="Sobre a Pira" width={50} height={50} /> */}

                        <img src={process.env.PUBLIC_URL + '/images/SOBREAPIRA.png'} alt="Sobre a Pira" className='logo-image' />
                        <img src={process.env.PUBLIC_URL + '/images/Iconpira.png'} alt="Sobre a Pira" width={50} height={50} />
                    </Box>

                    {/* texto sobre pira */}
                    <Box>
                        {/* <img src="/images/texto_pira.png" alt="Sobre a Pira" className='logo-texto-pira' /> */}
                        <img src={process.env.PUBLIC_URL + '/images/texto_pira.png'} alt="Sobre a Pira" className='logo-texto-pira' />
                    </Box>

                </Box>

            </Box>
            {/* fim container pira */}
            
            {/* inicio container rodape */}
            <Box
                component="section"
                sx={{
                    // backgroundImage: 'url("/images/rodape.jpg")',
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/rodape.jpg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    position: 'relative',
                    height: '100vh',
                }}
            >

                <Box
                    sx={{
                    position: 'absolute',
                    bottom: '12%', 
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                }}>
                    {/* patrocinadores */}
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '5px',
                    }}
                    >
                        {/* <img src="/images/lei.png" alt="Lei" width={170} height={120} />
                        <img src="/images/petrobras.png" alt="Petrobras" width={170} height={70} />
                        <img src="/images/pira-realizacao.png" alt="Realização" width={170} height={70} />
                        <img src="/images/ministerio_da_cultura.png" alt="Ministério" width={170} height={70} />
                        <img src="/images/governo.png" alt="Governo" width={170} height={70} /> */}

                        <img src={process.env.PUBLIC_URL + '/images/lei.png'} alt="Lei" width={170} height={120} />
                        <img src={process.env.PUBLIC_URL + '/images/petrobras.png'} alt="Petrobras" width={170} height={70} />
                        <img src={process.env.PUBLIC_URL + '/images/pira-realizacao.png'} alt="Realização" width={170} height={70} />
                        <img src={process.env.PUBLIC_URL + '/images/ministerio_da_cultura.png'} alt="Ministério" width={170} height={70} />
                        <img src={process.env.PUBLIC_URL + '/images/governo.png'} alt="Governo" width={170} height={70} />
                        
                    </Box>

                    {/* textos abaixo */}
                    <Box sx={{ mt: 2, display: 'flex', gap: '10px' }}>
                        {/* <img src="/images/diga_nao_ao_racismo.png" alt="Diga não ao Racismo" width={170} height={40} />
                        <img src="/images/recicle_sempre.png" alt="Recicle Sempre" width={170} height={40} /> */}

                        <img src={process.env.PUBLIC_URL + '/images/diga_nao_ao_racismo.png'} alt="Diga não ao Racismo" width={170} height={40} />
                        <img src={process.env.PUBLIC_URL + '/images/recicle_sempre.png'} alt="Recicle Sempre" width={170} height={40} />

                    </Box>
                </Box>
            </Box>

            {/* fim container rodape */}
        </>
    )
}

export default Home