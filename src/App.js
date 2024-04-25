import './App.css';
import React from 'react'
import Header from './components/Layout/Header';
import SubHeader from './components/Layout/SubHeader';
import ListItem from './components/Product/ListItem';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Men from './components/Category/Men'
import Women from './components/Category/Women'
import Kids from './components/Category/Kids'
import Kitchen from './components/Category/Kitchen'
import Sports from './components/Category/Sports';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <SubHeader />
        <Routes>
          <Route path="/" element={<ListItem />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/sports" element={<Sports />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
