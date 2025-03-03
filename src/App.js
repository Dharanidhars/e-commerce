import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={ <Shop /> } /> 
          <Route path='/mens' element={ <ShopCategory category='men' banner={men_banner} /> } /> 
          <Route path='/womens' element={ <ShopCategory category='women' banner={women_banner} /> } /> 
          <Route path='/kids' element={ <ShopCategory category='kid' banner={kid_banner} /> } /> 
          <Route path='/product' element={ <Product /> }  >
              <Route path=':productId' element={ <Product /> } />
          </Route>
          <Route path='/cart' element={ <Cart /> } />
          <Route path='/login' element={ <LoginSignup /> } />
          <Route path='*' element={ <Shop /> } />
        </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
