import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './pages/Home/Home';

const theme = createTheme({
  palette: {
    primary: { main: '#0FAC81' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
