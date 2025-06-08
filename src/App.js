import Header from "./components/header/page";
import Home from "./components/home/page";
import Box from '@mui/material/Box';


function App() {
  return (
    <Box sx={{overflowX: 'hidden'}}>
      <Header/>
      <Home/>
    </Box>
  );
}

export default App;
