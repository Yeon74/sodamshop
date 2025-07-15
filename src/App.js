import "./App.scss";
import Banner from "./Components/Banner";
import Cardeasy from "./Components/Cardeasy";
import Product from "./Components/Product";
import Cardsize from "./Components/Cardsize";
import Instagram from "./Components/Instagram";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CartPage from "./Components/CartPage";
import Gnb from "./Components/Gnb";
import ItemCategory from "./Components/ItemCategory";
import ItemPage from "./Components/ItemPage";

import easyData from './assets/Easy.json';
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
  );
};

export default App;
