
import { createContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Places from './pages/Places';

export const AppContext = createContext() 
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App" onClick={()=> show&& setShow(false)}>
      <AppContext.Provider value={{show, setShow}}>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/place_to_stay' element={ <Places/> }/>
      </Routes>
      <Footer />
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
