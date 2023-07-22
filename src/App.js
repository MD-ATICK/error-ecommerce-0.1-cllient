import './App.css';
import Navbar from './components/header/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarNew from './components/NewNavbar.js/NavbarNew';
import Home from './pages/Home';
import FzeroF from './pages/FzeroF';
import SignUp from './components/SignUpOrSignOut/SignUp';
import SignOut from './components/SignUpOrSignOut/SignOut';
import Carts from './components/cart/Carts';
import SingleProduct from './components/cart/SingleProduct';

function App() {

  const token = localStorage.getItem('token')

  return (
    <BrowserRouter>
      <Navbar />
      <NavbarNew />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<SingleProduct />} />
        <Route path='/login' element={<SignUp />} />
        <Route path='/sign-up' element={<SignOut />} />
        <Route path='/carts' element={<Carts />} />
        {/* <Route path='/product-info/:id' element={<SingleProduct/>}/> */}
        <Route path='*' element={<FzeroF />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
