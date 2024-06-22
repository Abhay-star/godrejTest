import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import Home from './pages/Home';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Work Sans',
      textTransform: 'none',
    },
  },
});
function App() {


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home></Home>
      </div>
    </ThemeProvider>
  );
}

export default App;
