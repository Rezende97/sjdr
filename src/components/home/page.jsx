import * as React from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../../styles/main.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    bgcolor: '#8E3C04',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const Home = () => {

    const playlistIds = [
        "1m12R22yiuQirwlBL6xvnI", // primeira
        "3DaZ3yIz2KG0PiVPkVW7a9", // segunda
        "0qxSdsJhL5M0pcvfbzMyiS", // terceira
    ];

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [playlistIndex, setPlaylistIndex] = React.useState(0);
    const [socialMedia, setSocialMedia] = React.useState({ tiktok: { videoId: "" }, instagram: { postId: "" } });
    const [loading, setLoading] = React.useState(true);

    // Carregar JSON
    React.useEffect(() => {
        fetch('/socialMedia.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Falha ao carregar socialMedia.json');
                }
                return response.json();
            })
            .then((data) => {
                setSocialMedia(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Erro ao carregar JSON:', err);
                setSocialMedia({
                    tiktok: { videoId: "7515183052344003870" },
                    instagram: { postId: "DK0KH6zy6GX" }
                });
                setLoading(false);
            });
    }, []);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setPlaylistIndex((prevIndex) => (prevIndex + 1) % playlistIds.length);
        }, 3600000); // 1 hora = 3.600.000ms

        return () => clearInterval(interval); // limpeza ao desmontar
    }, []);

    const currentPlaylistId = playlistIds[playlistIndex];
    const spotifyEmbedUrl = `https://open.spotify.com/embed/playlist/${currentPlaylistId}?utm_source=generator&theme=0`;

    if (loading) {
        return <Box sx={{ p: 4 }}>Carregando postagens...</Box>;
    }

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    background: "#FEF5E6",
                    "@media (max-width:746px)": {
                        display: "flex",
                        flexDirection: "column",
                    },
                }}
            >
                <Box sx={{ "@media (max-width:746px)": { display: "none" } }}>
                    <img
                        src={process.env.PUBLIC_URL + "/images/Nuvem.png"}
                        width={250}
                        alt="Imagem"
                    />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "18px",
                        "@media (max-width:746px)": {
                            marginTop: "20px",
                        },
                    }}
                >

                    <img
                        src={process.env.PUBLIC_URL + "/images/Apresenta.png"}
                        width={200}
                        alt="Imagem"
                    />
                    <img
                        src={process.env.PUBLIC_URL + "/images/logo_home.png"}
                        width={330}
                        alt="Imagem"
                    />
                </Box>

                <Box sx={{ "@media (max-width:746px)": { display: "none" } }}>
                    <img
                        src={process.env.PUBLIC_URL + "/images/passarinho.png"}
                        width={80}
                        alt="Imagem"
                    />
                </Box>

                {/* icones redes sociais */}
                <Box
                    sx={{
                        border: '2px dashed #C9A13E',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "18px",
                        borderRadius: "20px",
                        padding: "50px 30px 50px 30px",
                        "@media (max-width:746px)": {
                            flexDirection: "row",
                            marginTop: "25px",
                            padding: "15px 30px 15px 30px",
                        },
                    }}
                >
                    <a
                        href="https://www.facebook.com/people/S%C3%A3o-Jo%C3%A3o-do-Reencontro/61577035512763/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={process.env.PUBLIC_URL + "/images/facebook.png"}
                            width={25}
                            alt="Facebook"
                        />
                    </a>
                    <a
                        href="https://www.instagram.com/saojoaodoreencontro/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        <img
                            src={process.env.PUBLIC_URL + "/images/Instagram1.png"}
                            width={25}
                            alt="Instagram"
                        />{" "}
                    </a>
                    <a
                        href="https://www.tiktok.com/@saojoaodoreencontro"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={process.env.PUBLIC_URL + "/images/Icon TikTok.png"}
                            width={25}
                            alt="TikTok"
                        />
                    </a>
                    <a
                        href="https://open.spotify.com/user/314az2mxlsdg52eeecvt73sxupcu?si=14a75400a771492c&nd=1&dlsi=0a80dc4fc89b4ae4"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={process.env.PUBLIC_URL + "/images/spotify.png"}
                            width={25}
                            alt="spotify"
                        />
                    </a>
                </Box>
            </Box>
            <br />

            {/* inicio container main */}
            <Box
                component="section"
                sx={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/inicio-main.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    px: { xs: 2, md: 18 },
                    position: "relative",
                    flexDirection: "column",
                    height: "140vh",
                    padding: "280px 0 0 0",
                    "@media (max-width:746px)": {
                        padding: "0 0 0 0",
                        height: "0",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        position: "relative",
                        bottom: "100px",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            bottom: "48px",
                            "@media (max-width:746px)": {
                                top: "75px",
                                right: '60px',
                                rotate: '-5deg'
                            }
                        }}
                    >
                        <img
                            src={process.env.PUBLIC_URL + "/images/Cacto.png"}
                            alt="cacto"
                            width={75}
                        />
                    </Box>
                    <Box
                        sx={{
                            position: "relative",
                            bottom: "-15px",
                            "@media (max-width:746px)": {
                                left: "440px",
                                rotate: '-5deg'
                            }
                        }}
                    >
                        <img
                            src={process.env.PUBLIC_URL + "/images/flor-main.png"}
                            alt="cacto"
                            width={85}
                        />
                    </Box>
                    <Box
                        sx={{
                            position: "relative",
                            bottom: "30px",
                            "@media (max-width:746px)": {
                                top: "160px",
                                right: '100px',
                                rotate: '-5deg'
                            }
                        }}
                    >
                        <img
                            src={process.env.PUBLIC_URL + "/images/cobra.png"}
                            alt="cacto"
                            width={149}
                        />
                    </Box>
                    <Box
                        sx={{
                            position: "relative",
                            bottom: "55px",
                            "@media (max-width:746px)": {
                                top: "195px",
                                rotate: '-5deg'
                            }
                        }}
                    >
                        <img
                            src={process.env.PUBLIC_URL + "/images/Faica.png"}
                            alt="faica"
                            width={85}
                        />
                    </Box>
                </Box>

                {/* inicio container spotify musica */}
                <Box
                    sx={{
                        background: "#231F20",
                        padding: '15px',
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: '15px',
                        "@media (max-width:602px)": {
                            zIndex: 1
                        }
                    }}
                >
                    {/* container central */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "60px",
                            padding: "30px",
                            border: '2px dashed #63533B',
                            borderRadius: "20px"
                        }}
                    >
                        {/* cto spotify */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "left",
                                flexDirection: "column",
                                gap: "10px",
                                "@media (max-width:746px)": {
                                    display: "none",
                                }
                            }}
                        >

                            <img
                                src={process.env.PUBLIC_URL + "/images/confira_playlist.png"}
                                alt="Confira Playlist"
                            />

                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/images/Spotify_logo_with_text.svg.png"
                                }
                                alt="Confira Playlist"
                                width={105}
                            />
                        </Box>

                        {/* play na musica */}
                        <Box>
                            <iframe
                                style={{ borderRadius: "12px" }}
                                src={spotifyEmbedUrl}
                                width="100%"
                                height="100"
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
                    component="section"
                    id="projeto-section"
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        padding: "5rem",
                        gap: "15px",
                    }}
                >

                    {/* sanfona e triângulo */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            position: 'relative',
                            bottom: '15px',
                            gap: "20px",
                            "@media (max-width:746px)": {
                                display: "none",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                bottom: '-3px'
                            }}
                        >
                            <img
                                src={process.env.PUBLIC_URL + "/images/Sanfona.png"}
                                alt="Sanfona"
                                width="170px"
                            // height="80px"
                            />
                        </Box>

                        <Box
                            sx={{
                                position: 'relative',
                                bottom: '15px'
                            }}
                        >
                            <img
                                src={process.env.PUBLIC_URL + "/images/triangulo.png"}
                                alt="Lua e Estrela"
                                width="110px"
                                height="110px"
                            />
                        </Box>
                    </Box>

                    {/* lua e estrela */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            "@media (max-width:746px)": {
                                display: "none",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                right: '18px'
                            }}
                        >
                            <img
                                src={process.env.PUBLIC_URL + "/images/lua_estrela.png"}
                                alt="Triângulo"
                                width="70px"
                                height="70px"
                            />
                        </Box>
                    </Box>

                    {/* tradição e texto sobre sao joao */}
                    <Box
                        className="container-tradicao-texto"
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            gap: "20px"
                        }}
                    >

                        <img
                            src={process.env.PUBLIC_URL + "/images/tradicao_boa_viver.png"}
                            className="imagem-tradicao"
                            alt="Tradição"
                            width="250px"
                            height="80px"
                        />

                        <img
                            className="imagem-texto"
                            src={process.env.PUBLIC_URL + "/images/o_sao_Joao.png"}
                            alt="O São Joâo"
                            width="350px"
                            height="200px"
                        />
                    </Box>

                </Box>
                {/* fim container tradição boa de viver */}
            </Box>
            {/* fim container main */}

            {/* inicio container redes sociais */}
            <Box
                component="section"
                id="rede-sociais-section"
                sx={{
                    // backgroundImage: 'url("/images/fundo-rede-social.jpg")',
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/fundo-rede-social.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    px: { xs: 2, md: 18 },
                    position: "relative",
                    flexDirection: "column",
                }}
            >
                {/* redes sociais */}
                <Box>
                    {/* instagram e tiktok */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            "@media (max-width:746px)": {
                                display: "flex",
                                flexDirection: "column",
                            },
                        }}
                    >

                        {/* Instagram Embed */}
                        <div
                            className="instagram-embed"
                            style={{
                                background: "#000000",
                                padding: "15px",
                                borderRadius: "15px",
                            }}
                        >
                            <div style={{
                                maxWidth: "100%",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden"
                            }}>

                                <blockquote
                                    className="instagram-media"
                                    data-instgrm-permalink={`https://www.instagram.com/p/${socialMedia.instagram.postId}/?utm_source=ig_embed&amp;utm_campaign=loading`}
                                    data-instgrm-version="14"
                                    style={{
                                        background: '#FFF',
                                        border: 0,
                                        borderRadius: '3px',
                                        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                                        margin: '1px',
                                        maxWidth: '540px',
                                        minWidth: '326px',
                                        padding: 0,
                                        width: 'calc(100% - 2px)',
                                    }}
                                >
                                    <div style={{ padding: '16px' }}>
                                        <a
                                            href={`https://www.instagram.com/p/${socialMedia.instagram.postId}/?utm_source=ig_embed&amp;utm_campaign=loading`}
                                            style={{
                                                background: '#FFFFFF',
                                                lineHeight: 0,
                                                padding: 0,
                                                textAlign: 'center',
                                                textDecoration: 'none',
                                                width: '100%',
                                            }}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                        </a>
                                    </div>
                                </blockquote>

                            </div>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                            >
                                <Box>
                                    <img
                                        src={process.env.PUBLIC_URL + "/images/INSTAGRAM.png"}
                                        width={100}
                                        alt="INSTAGRAM"
                                    />{" "}
                                </Box>
                                <Box>
                                    <img
                                        src={process.env.PUBLIC_URL + "/images/Instagram1.png"}
                                        width={25}
                                        alt="Icone instagram"
                                    />{" "}
                                </Box>

                            </Box>
                        </div>

                        {/* Load instagram script */}
                        {typeof window !== "undefined" && (
                            <script async src="//www.instagram.com/embed.js" />
                        )}

                        {/* tiktok Embed */}
                        <div
                            className="instagram-embed"
                            style={{
                                background: "#000000",
                                padding: "15px",
                                borderRadius: "15px",
                                height: '657px',
                                overflow: "hidden"
                            }}
                        >
                            <div style={{
                                maxWidth: "100%",
                                width: "100%",
                                height: "96%",
                                overflow: "hidden"
                            }}>
                                <blockquote
                                    className="tiktok-embed"
                                    cite={`https://www.tiktok.com/@saojoaodoreencontro/video/${socialMedia.tiktok.videoId}`}
                                    data-video-id={socialMedia.tiktok.videoId}
                                    style={{
                                        margin: "1px",
                                        background: "#000000"
                                    }}
                                >
                                    {" "}
                                    <section>
                                        {" "}
                                        <a
                                            target="_blank"
                                            title="@saojoaodoreencontro"
                                            rel="noreferrer"
                                            href="https://www.tiktok.com/@saojoaodoreencontro?refer=embed"
                                        >
                                            @saojoaodoreencontro
                                        </a>{" "}
                                        O São Pedro de Medeiros Neto é uma realização do Ministério da
                                        Cultura, Somos Pira e São João Do Reencontro Patrocínio de
                                        Petrobras.{" "}
                                        <a
                                            title="petrobrascultural"
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://www.tiktok.com/tag/petrobrascultural?refer=embed"
                                        >
                                            #PetrobrasCultural
                                        </a>{" "}
                                        <a
                                            title="culturagovbr"
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://www.tiktok.com/tag/culturagovbr?refer=embed"
                                        >
                                            #CulturaGovBr
                                        </a>{" "}
                                        <a
                                            title="sãojoãodoreencontro"
                                            target="_blank"
                                            rel="noreferrer"
                                            href="https://www.tiktok.com/tag/s%C3%A3ojo%C3%A3odoreencontro?refer=embed"
                                        >
                                            #SãoJoãoDoReencontro
                                        </a>{" "}
                                        @Ministério da Cultura @Petrobras{" "}
                                        <a
                                            target="_blank"
                                            rel="noreferrer"
                                            title="♬ som original - SaoJoaoDoReencontro"
                                            href="https://www.tiktok.com/music/som-original-7389700255329159982?refer=embed"
                                        >
                                            ♬ som original - SaoJoaoDoReencontro
                                        </a>{" "}
                                    </section>{" "}
                                </blockquote>{" "}

                            </div>

                            <Box >
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    margin: '11px',
                                    gap: '7px'
                                }}>
                                    <img
                                        src={process.env.PUBLIC_URL + "/images/TIKTOK.png"}
                                        width={100}
                                        alt="tiktok"
                                    />{" "}
                                    <img
                                        src={process.env.PUBLIC_URL + "/images/Icon TikTok.png"}
                                        width={17}
                                        alt="Icone tiktok"
                                    />{" "}
                                </Box>
                            </Box>

                        </div>

                        {/* Load tiktok script */}
                        {typeof window !== "undefined" && (
                            <script async src="https://www.tiktok.com/embed.js"></script>
                        )}

                    </Box>

                    {/* youtube */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            paddingY: "40px",
                        }}
                    >

                        <img
                            src={
                                process.env.PUBLIC_URL +
                                "/images/retangulo_horizontal_rede_social.png"
                            }
                            alt="Youtube"
                            width="100%"
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
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/laranja-cidade.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    px: { xs: 2, md: 18 },
                    position: "relative",
                    flexDirection: "column",
                }}
            >
                {/* cidades */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "50px",
                    }}
                >
                    {/* cidade e passarinho */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "150px 0 0 100px",
                            gap: "40px",
                            "@media (max-width:435px)": {
                                gap: "20px",
                                padding: "90px 0 0 40px",
                            },
                        }}
                    >
                        <Box>
                            <img
                                src={process.env.PUBLIC_URL + "/images/CIDADES.png"}
                                alt="cidades"
                                width={220}
                            />
                        </Box>
                        <Box>
                            <img
                                src={process.env.PUBLIC_URL + "/images/passarinho_cidade.png"}
                                alt="passarinho"
                                width={80}
                            />
                        </Box>
                    </Box>

                    {/* nome das cidades */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: "35px"
                        }}
                    >
                        <Box
                            sx={{
                                "@media (max-width:600px)": {
                                    display: "flex",
                                    justifyContent: "left"
                                },
                            }}
                        >
                            <img
                                src={
                                    process.env.PUBLIC_URL + "/images/cidade-lado-esquerdo.png"
                                }
                                alt="cidades"
                                width={290}
                            />
                        </Box>

                        <Box
                            sx={{
                                position: 'relative',
                                top: '3px',
                                "@media (max-width:600px)": {
                                    padding: "5px",
                                    display: 'none'
                                },
                            }}
                        >
                            <img
                                src={process.env.PUBLIC_URL + "/images/cidade-lado-direito.png"}
                                alt="passarinho"
                                width={265}
                            />
                        </Box>

                    </Box>

                    {/* botao */}
                    <Box
                        sx={{
                            display: 'none',
                            "@media (max-width:600px)": {
                                display: "flex",
                            },
                        }}
                    >
                        <Button variant="contained" sx={{ background: '#255639', color: '#FEF5E6', fontWeight: 'bold' }} onClick={handleOpen}>Ver mais cidades</Button>
                    </Box>

                    {/* mobile */}
                    {/* <Box
            sx={{
              display: "none",
              justifyContent: "center",
              alignItems: "center",
              gap: "9px",
              "@media (max-width:600px)": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              },
            }}
          >
            <Box>
              <img
                src={process.env.PUBLIC_URL + "/images/cidades01.png"}
                alt="cidades"
                width={290}
              />
            </Box>
            <Box
              sx={{
                "@media (max-width:600px)": {
                  padding: "5px",
                },
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/cidade02.png"}
                alt="passarinho"
                width={290}
              />
            </Box>
          </Box> */}
                </Box>
            </Box>
            {/* fim container cidade */}

            {/* inicio container pira */}
            <Box
                component="section"
                id="pira-section"
                sx={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/sobrepirafundo.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    px: { xs: 2, md: 18 },
                    position: "relative",
                    flexDirection: "column",
                }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'right',
                    position: 'relative',
                    top: '200px',
                    right: '170px',
                    width: '100%',
                    "@media (max-width:593px)": {
                        right: '5px',
                    }
                }}>
                    <img src={process.env.PUBLIC_URL + "/images/estrela-main.png"} alt="estrela" width={80} />
                </Box>
                {/* sobre a pira */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "45px",
                    }}
                >
                    {/* sobre a pira */}
                    <Box
                        className="container-pira"
                        sx={{
                            display: "flex",
                            alignItems: "end",
                            padding: "200px 0 0 0",
                            gap: "30px",
                        }}
                    >

                        <img
                            src={process.env.PUBLIC_URL + "/images/SOBREAPIRA.png"}
                            alt="Sobre a Pira"
                            className="logo-image"
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/images/Iconpira.png"}
                            alt="Sobre a Pira"
                            width={50}
                            height={50}
                        />
                    </Box>

                    {/* texto sobre pira */}
                    <Box>
                        {/* <img src="/images/texto_pira.png" alt="Sobre a Pira" className='logo-texto-pira' /> */}
                        <img
                            src={process.env.PUBLIC_URL + "/images/texto_pira.png"}
                            alt="Sobre a Pira"
                            className="logo-texto-pira"
                        />
                    </Box>
                </Box>
            </Box>
            {/* fim container pira */}

            {/* inicio container rodape */}
            <Box
                component="section"
                sx={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/rodapet.jpg)`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    height: "100vh",
                }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'right',
                    position: 'relative',
                    right: '250px',
                    top: '70px',
                    "@media (max-width:1202px)": {
                        display: 'none'
                    },
                    "@media (max-width:2150px)": {
                        top: '240px',
                    },
                    "@media (max-width:1920px)": {
                        top: '280px',
                    },
                    "@media (max-width:1718px)": {
                        top: '260px',
                    },
                    "@media (min-width:1722px)": {
                        top: '220px',
                    }
                }}>
                    <img src={process.env.PUBLIC_URL + "/images/Cacto.png"} alt="cacto" width={80} />
                </Box>

                <Box
                    sx={{
                        position: "absolute",
                        bottom: "12%",
                        left: 0,
                        right: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        textAlign: "center"
                    }}
                >
                    {/* patrocinadores */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "5px",
                            "@media (max-width:877px)": {
                                display: 'none'
                            }
                        }}
                    >

                        <img
                            src={process.env.PUBLIC_URL + "/images/lei.png"}
                            alt="Lei"
                            width={170}
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/images/petrobras.png"}
                            alt="Petrobras"
                            width={170}
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/images/pira-realizacao.png"}
                            alt="Realização"
                            width={170}
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/images/ministerio_da_cultura.png"}
                            alt="Ministério"
                            width={170}
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/images/governo.png"}
                            alt="Governo"
                            width={170}
                        />
                    </Box>

                    {/* textos abaixo */}
                    <Box
                        sx={{
                            mt: 2,
                            display: "flex",
                            gap: "20px",
                            flexWrap: "wrap",
                            justifyContent: 'center', "@media (max-width:877px)": {
                                display: 'none'
                            }
                        }}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/diga_nao_ao_racismo.png"}
                            alt="Diga não ao Racismo"
                            width={320}
                        />
                        <img
                            src={process.env.PUBLIC_URL + "/images/recicle_sempre.png"}
                            alt="Recicle Sempre"
                            width={320}
                        />
                    </Box>

                    <Box sx={{
                        display: 'none',
                        "@media (max-width:877px)": {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'end',
                            width: '100%',
                            height: '90vh',
                            position: 'relative',
                            top: '90px',
                        }
                    }}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/rodape.svg"}
                            alt="Diga não ao Racismo"
                            style={{
                                width: '1000px',
                                height: '400px'
                            }}
                        />
                    </Box>

                </Box>


            </Box>

            <Box
                sx={{
                    maxWidth: '10px'
                }}
            >

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', color: '#F7EDDB', fontWeight: 'bold' }}>
                                CIDADES
                            </Typography>
                            <Typography onClick={handleClose} id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', color: '#F7EDDB', fontWeight: 'bold', cursor: 'pointer' }}>
                                X
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'right',
                                marginTop: '20px',
                                "@media (max-width:600px)": {
                                    padding: "5px"

                                },
                            }}
                        >
                            <img
                                src={process.env.PUBLIC_URL + "/images/cidade-lado-direito.png"}
                                alt="passarinho"
                                width={265}
                            />
                        </Box>
                    </Box>
                </Modal>
            </Box>
            {/* fim container rodape */}
        </>
    );
};

export default Home;
