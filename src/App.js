import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Menu/Footer';
import Menu from './Components/Menu/Menu';
import NewClaim from './Components/Menu/NewClaim';
import SearchClaim from './Components/Menu/SearchClaim';

function App() {
  const [searchTerm, setSearchTerm] =useState("");

  return <BrowserRouter>
      <Menu />
      <Routes>
      <Route path="/add" element={<NewClaim />} />
      <Route path="/find" element = {
        <SearchClaim searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      />
      <Route path="/find/:orderId" element = {
        <SearchClaim searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
    />
      <Route path="/" element = {<h1>Welome to the payments page</h1>}/>
      <Route path="*" element = {<h1>Sorry - this page doesn't exist</h1>}/>

    </Routes>
      <Footer />

    </BrowserRouter>
}

export default App;
