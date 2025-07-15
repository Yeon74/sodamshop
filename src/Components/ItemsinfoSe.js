import { useState } from "react";
import product from "../assets/product.json";
import { GoDownload } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Itemsinfo = () => {
  return (
    <div className="page-container">
      <p className="path">Living  〉 Curtain  〉 Beige Linen Curtain </p>
      <div className="itempage-container">
        {/* 좌측: 이미지 */}
        <div className="image-container">
          <div className="itempage-image">
            <img
              src={`${process.env.PUBLIC_URL}/images/item-SE/img-01.png`}
              alt="main image"
              className="main-image"
            />
          </div>
          {/* 작은 이미지들 */}
          <div className="color-images">
                <img
                  src={`${process.env.PUBLIC_URL}/images/item-SE/img-03.webp`}
                  alt="small images"
                  className="color-image"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/item-SE/img-11.webp`}
                  alt="small images"
                  className="color-image"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/item-SE/img-02.webp`}
                  alt="small images"
                  className="color-image"
                />
                <img
                  src={`${process.env.PUBLIC_URL}/images/item-SE/img-12.webp`}
                  alt="small images"
                  className="color-image"
                />
              {/* </div>
            ))} */}
          </div>
        </div>

        {/* 우측: 상세 정보 */}
        <div className="itempage-info">
          <p className="brand">Sodam</p>
          <div className="pro-name">
            <h2>Beige Linen Curtain</h2>
            <p className="heart-icon"><FaHeart /></p>
          </div>
          <p className="descriptionSe">린넨시리즈 중 가장 고급스러운 텍스처의 <br/>프리미엄 린넨100% 커튼 입니다.</p>
          <div className="rating">
            <p><FaStar /> 4.9</p>
            <span style={{textDecoration: 'underline'}}>9개 리뷰</span>
          </div>
          <p className="price-original">15% <span style={{textDecoration: 'line-through'}}>80,000원</span></p>
          <div className="price-cou">
            <p>68,000원</p>
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
    </div>
  );
};


export default Itemsinfo;