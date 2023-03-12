import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AllProducts from './Navbar-Module/Components-JS/AllProducts';
import Services from './Navbar-Module/Components-JS/Services';
import SignIn from './Navbar-Module/Components-JS/SignIn';
import SignUp from './Navbar-Module/Components-JS/SignUp';

const App=() =>{


  useEffect(() => {
  console.log("AAA")
  })
  return (
    <div className="App">
      <BrowserRouter className='dom-container'>

        <Header />
        <div className='nav-routes'>
          <Routes>
            <Route path='/login' element={<SignIn />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/services' element={<Services />} />
            <Route path='/allproducts' element={<AllProducts />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
