import Header from "./components/header/page";
import Home from "./components/home/page";
import Box from '@mui/material/Box';
import Main from "./components/main/page";


function App() {
  return (
    <Box sx={{overflowX: 'hidden'}}>
      <Header/>
      <Home/>
      {/* <Main /> */}
    </Box>
  );
}

export default App;
