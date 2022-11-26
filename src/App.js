import './App.css';
import Footer from './Components/Menu/Footer';
import Menu from './Components/Menu/Menu';
import NewClaim from './Components/Menu/NewClaim';
import SearchClaim from './Components/Menu/SearchClaim';

function Divider(){
  return <h1>____________________________________________________________</h1>
}

function App() {
  return <div>
      <Menu />
      <NewClaim />
      <Footer />
      <Divider />
      <Menu />
      <SearchClaim />
      <Footer />

    </div>
}

export default App;
