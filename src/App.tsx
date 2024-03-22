import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Destination from './Pages/Destination/Destination';
import { ContextProvider } from './GlobalContext';

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
