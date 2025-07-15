import "./App.scss";
import Banner from "./Components/Banner";
import Cardeasy from "./Components/Cardeasy";
import Product from "./Components/Product";
import Cardsize from "./Components/Cardsize";
import Instagram from "./Components/Instagram";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CartPage from "./Components/CartPage";
import ItemCategory from "./Components/ItemCategory";
import ItemPageSe from "./Components/ItemPageSe";
import ItemPageMs from "./Components/ItemPageMs";
import ItemsinfoJung from "./Components/ItemsinfoJung";
import ItemPageEj from "./Components/ItemPageEj";
import Gnb from "./Components/Gnb";
import ItemCategory from "./Components/ItemCategory";
import ItemPage from "./Components/ItemPage";

import sizeData from './assets/Size.json';
import instaData from './assets/insta.json';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const testProduct = {
  category: "소파",
  name: "모던 소파",
  image: "/images/sofa.jpg",
  rating: 4.5,
  reviews: 87,
  original_price: 99000,
  price: 79000,
  colors: ["베이지", "차콜", "라이트그레이"]
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

import Gnb from "./Components/Gnb";
import { BrowserRouter, HashRouter, Route, Routes, useLocation } from "react-router-dom";



const AppContent = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.product_id === item.product_id);
    
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.product_id === item.product_id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, count: 1 }]);
    }
  };

  const handleDelete = (itemId) => {
    setCart(cart.filter(item => item.product_id !== itemId));
  };

  const handleUpdateCount = (itemId, newCount) => {
    if (newCount <= 0) {
      handleDelete(itemId);
      return;
    }
    setCart(cart.map(item => 
      item.product_id === itemId 
        ? { ...item, count: newCount }
        : item
    ));
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={
          <>
            <Gnb isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            <Banner />
            <ItemCategory />
            <Cardsize products={sizeData.products} />
            <Product />
            <Cardeasy products={easyData.products} />
            <Instagram products={instaData.products} />
            <Footer />
          </>
        } />
        {/* 상세 페이지 */}
        <Route path="/item" element={<ItemPage product={testProduct} />} />
        {/* <Route path="/cart" element={<CartPage />} /> */}
      </Routes>
    </BrowserRouter>
    <div>
      {location.pathname !== '/cart' && (
        <>
          <Gnb isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
          <Header isOpen={isMenuOpen} setIsOpen={setIsMenuOpen}/>
        </>
      )}
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Banner />
              <ItemCategory/>
              <Cardsize products={sizeData.products} onAddToCart={handleAddToCart} />
              <Product/>
              <Cardeasy onAddToCart={handleAddToCart} />
              <Instagram products={instaData.products} />
            </>
          } 
        />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cart={cart} 
              onDelete={handleDelete} 
              onUpdateCount={handleUpdateCount} 
            />
          } 
        />
        <Route
          path="/itempageSe"
          element={<ItemPageSe/>}/>
        <Route
      path="/itempageMs"
      element={<ItemPageMs/>}/>
        <Route
      path="/itemsinfoJung"
      element={<ItemsinfoJung/>}/>
        <Route
      path="/itemsPageEj"
      element={<ItemPageEj/>}/>
      </Routes>
                    <Footer/>
    </div>
    
  );
};

const App = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
