import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import Carousel from './Components/Carousel/Carousel';
import { caroimages } from './Components/Carousel/Data';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Carousel images={caroimages}/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/sarees' element={<ShopCategory category="sarees"/>}/>
          <Route path='/lehangas' element={<ShopCategory category="lehangas"/>}/>
          <Route path='/suits' element={<ShopCategory category="suits"/>}/>
          <Route path='/partywear' element={<ShopCategory category="partwear"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productid' element={<Product/>}/>
          </Route>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
