import { useState } from "react";
import product from "../assets/product.json";
import { GoDownload } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

// ------------------------------------------------------------------------
// -----------------{{ ****** 읽어주세요 ******* }} ------------------------
//
// 컨트롤+f를 눌러 ☆★ 검색하여 개인별 상세 페이지에 맞는 정보를 입력해주세요.
// 수정은 7~8항목 입니다.
// 수정하시면 이 메시지는 지워주세요.
//
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------


const Itemsinfo = () => {
  // const [quantity, setQuantity] = useState(1);
  // const [color, setColor] = useState('');
  // const [selectedOptions, setSelectedOptions] = useState([]);

  // 색상 선택 시 옵션 추가
  // const handleColorChange = (e) => {
  //   const selectedColor = e.target.value;
  //   setColor(selectedColor);

  //   if (!selectedColor) return;

  //   setSelectedOptions((prev) => {
  //     const found = prev.find((opt) => opt.color === selectedColor);
  //     if (found) {
  //       return prev.map((opt) =>
  //         opt.color === selectedColor
  //           ? { ...opt, quantity: opt.quantity + quantity }
  //           : opt
  //       );
  //     } else {
  //       return [...prev, { color: selectedColor, quantity, price: productOptions.price }];
  //       // return [...prev, { color: selectedColor, quantity, price: product.price }];
  //     }
  //   });

  //   setQuantity(1); // 색상 선택 후 수량 초기화
  // };

  // 옵션별 수량 변경
  // const handleOptionQuantity = (color, change) => {
  //   setSelectedOptions((prev) =>
  //     prev
  //       .map((opt) =>
  //         opt.color === color
  //           ? { ...opt, quantity: Math.max(1, opt.quantity + change) }
  //           : opt
  //       )
  //       .filter((opt) => opt.quantity > 0)
  //   );
  // };

  // 옵션 삭제
  // const handleRemoveOption = (color) => {
  //   setSelectedOptions((prev) => prev.filter((opt) => opt.color !== color));
  // };

  // 총 합계
  // const totalPrice = selectedOptions
  //   .reduce((sum, opt) => sum + opt.price * opt.quantity, 0)
  //   .toLocaleString();

  return (
    <div className="page-container">
      {/* ☆★☆★☆★ 경로 입력 ☆★☆★☆★ */}
      <p className="path">가구 〉 소파 〉 코지 소파</p>
      <div className="itempage-container">
        {/* 좌측: 이미지 */}
        <div className="image-container">
          <div className="itempage-image">
            {/* ☆★☆★☆★ 메인 이미지 경로 입력 ☆★☆★☆★ */}
            <img
              src={`${process.env.PUBLIC_URL}/images/product/SOPA.png`}
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
                {/* ☆★☆★☆★ 작은 이미지 경로 입력 ☆★☆★☆★ */}
                <img
                  src={`${process.env.PUBLIC_URL}/images/product/SOPA.png`}
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
          {/* ☆★☆★☆★ 제품 이름 입력 ☆★☆★☆★ */}
          <div className="pro-name">
            <h2>제품 이름 이름</h2>
            <p><FaHeart /></p>
          </div>
          {/* ☆★☆★☆★ 평점 및 리뷰수 입력 ☆★☆★☆★ */}
          <div className="rating">
            <p><FaStar /> 4.5</p>
            <span style={{textDecoration: 'underline'}}>00개 리뷰</span>
          </div>
          {/* ☆★☆★☆★ 할인 퍼센티지 및 가격 입력 ☆★☆★☆★ */}
          <p className="price-original">00% <span style={{textDecoration: 'line-through'}}>00,000원</span></p>
          {/* ☆★☆★☆★ 가격 입력 ☆★☆★☆★ */}
          <div className="price-cou">
            <p>00,000원</p>
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