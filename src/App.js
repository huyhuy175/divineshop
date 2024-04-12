import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Pages/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='' element={<Shop/>}/>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
