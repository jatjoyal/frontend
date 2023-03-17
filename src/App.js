import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="APP">
      
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path={'/login'} element={<Login/>}></Route>
      <Route path={'/signup'} element={<Signup/>}></Route>
      <Route path={'/home'} element={<Home/>}></Route>

      </Routes>
      </BrowserRouter>
      
      
      
      
      
    </div>
  );
}

export default App;
