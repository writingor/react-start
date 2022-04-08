import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import MainNavbar from './components/UI/navbar/MainNavbar';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>

      <MainNavbar />
      <AppRouter />
      
    </BrowserRouter>
  );
};

export default App;
