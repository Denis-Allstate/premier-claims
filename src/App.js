import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Archive from './Components/Menu/Archive';
import Footer from './Components/Menu/Footer';
import Menu from './Components/Menu/Menu';
import NewClaim from './Components/Menu/NewClaim';
import Open from './Components/Menu/Open';
import SearchClaim from './Components/Menu/SearchClaim';
import FindTransactionsPage from './Components/Transactions/FindTransactionsPage';

function App() {
  const [searchTerm, setSearchTerm] =useState("");

  return <BrowserRouter>
      <Menu />
      <Routes>
      <Route path="/add" element={<NewClaim />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/open" element={<Open />} />
      <Route path="/find" element = {
        <FindTransactionsPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      />
      <Route path="/find/:claim_id" element = {
        <FindTransactionsPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
    />
      <Route path="/" element = {<h1>Welome to the payments page</h1>}/>
      <Route path="*" element = {<h1>Sorry - this page doesn't exist</h1>}/>

    </Routes>
      <Footer />

    </BrowserRouter>
}

export default App;
