import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Homes from './Homes.jsx';
import GridExample from './GridExample.jsx';

function App() {
  return (
    <div className="App">

    <Header />
    <Routes>
   <Route path='/' element={<Home />}/>
   <Route path='/About' element={<About />}/>
   <Route path='/Homes' element={<Homes />}/>
   <Route path='/services' element={<GridExample />}/>
</Routes>
    <Footer />
    </div>
  );
}

export default App;
