import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Archive from './Components/Menu/Archive';
import Footer from './Components/Menu/Footer';
import Menu from './Components/Menu/Menu';
import NewClaim from './Components/Menu/NewClaim';
import Tasks from './Components/Menu/Tasks';
import Open from './Components/Menu/Open';
import View from './Components/Menu/View';
import FindTransactionsPage from './Components/Transactions/FindTransactionsPage';
import Notes from './Components/Menu/Notes';

function App() {
  const [searchTerm, setSearchTerm] =useState("");

  return <BrowserRouter>
      <Menu />
      <Routes>
      <Route path="/add" element={<NewClaim />} />
      <Route path="/add/:claim_id" element={<NewClaim />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/open" element={<Open />} />
      <Route path="/Tasks" element={<Tasks />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/find" element = {
        <FindTransactionsPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      />
      <Route path="/find/:claim_id" element = {
        <FindTransactionsPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
    />
     <Route path="/view" element = {<View />}
    />
      <Route path="/" element = {<h1>Welome to the Premier Claims</h1>}/>
      
      <Route path="*" element = {<h1>Resource not found!</h1>}/>

    </Routes>
      <Footer />

    </BrowserRouter>
}

export default App;
