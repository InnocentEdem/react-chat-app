import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './Pages/MainPage';
import LogUserIntoChat from './Pages/LogUserIntoChat';
import './App.css'

import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LogUserIntoChat />} />
          <Route path="/chat" element={<MainPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
