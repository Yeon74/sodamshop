import { useEffect, useState } from "react";
import product from "../assets/product.json";
import { GoDownload } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Itemsinfo = () => {
  useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
  return (
    <div className="page-container">
      <p className="path"> Living 〉 Shelving / Storage 〉 Shelf</p>
      <div className="itempage-container">
        <div className="image-container">
          <div className="itempage-image">
            <img
              src={`${process.env.PUBLIC_URL}/images/product/SHELF.png`}
              alt="main image"
              className="main-image"
            />
          </div>
          {/* 작은 이미지들 */}
          <div className="color-images">
            {product.map((item) => (
              <div 
                key={item}
                className="color-image-box"
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/product/jung/smallimg.png`}
                  alt="small images"
                  className="color-image"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/product/jung/dfdf.jpg`}
                  alt="small images"
                  className="color-image"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/product/jung/sorntjd.jpg`}
                  alt="small images"
                  className="color-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 우측: 상세 정보 */}
        <div className="itempage-info">
          <p className="brand">Sodam</p>
          <div className="pro-name">
            <h2>심플 우드 5단 수납 선반</h2>
            <p><FaHeart /></p>
          </div>
          <div className="rating">
            <p><FaStar /> 4.8</p>
            <span style={{textDecoration: 'underline'}}>746개 리뷰</span>
          </div>
          <p className="price-original">15% <span style={{textDecoration: 'line-through'}}>22500원</span></p>
          <div className="price-cou">
            <p>144,500원</p>
            <div className="coupon">
              <p>쿠폰받기</p>
              <GoDownload />
            </div>  
          </div>
          <div className="benefits">
            <p>적립: 최대 12개월 무이자 할부</p>
            <p>배송: 혜택 5,000원 (상세보기)</p>
          </div>
          <div className="co-select">
            <button className="select-btn">색상 선택</button>
            <p>▼</p>
          </div>
          <div className="totalPay">
            <button className="cartPay">장바구니 담기</button>
          </div>
        </div>
      </div>
    <hr />
    <div className="detail-wrap">
      <img src={`${process.env.PUBLIC_URL}/images/product/jung/detailjung.jpg`} className="detail-img"/>
    </div>
    </div>
  );
};


export default Itemsinfo;