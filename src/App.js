
import { createContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Places from './pages/Places';

export const AppContext = createContext() 
export const DropdownContext = createContext()
function App() {
  const [show, setShow] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <div className="App" onClick={()=> {show&& setShow(false)
    showDropdown&& setShowDropdown(false)}}>
      <AppContext.Provider value={{show, setShow}}>
      <DropdownContext.Provider value={{showDropdown, setShowDropdown}}>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/place_to_stay' element={ <Places/> }/>
      </Routes>
      <Footer />
      </Router>
      </DropdownContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
