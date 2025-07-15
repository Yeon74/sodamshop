
import React, { useState } from 'react';
import '../styles/itempage.scss'; // SCSS 파일을 import

const ItemPage = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  // 이미지 경로 설정 (PUBLIC_URL 사용)
  const imageSrc = process.env.PUBLIC_URL + '/images/' + product.image;

  // 디버깅용 로그
  console.log('Product image:', product.image);
  console.log('Full image path:', imageSrc);
  console.log('PUBLIC_URL:', process.env.PUBLIC_URL);

  // 이미지 로드 실패 시 처리
  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    e.target.src = process.env.PUBLIC_URL + '/images/default-product.jpg';
  };

  // 색상 선택 시 옵션 추가
  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);

    if (!selectedColor) return;

    setSelectedOptions((prev) => {
      const found = prev.find((opt) => opt.color === selectedColor);
      if (found) {
        return prev.map((opt) =>
          opt.color === selectedColor
            ? { ...opt, quantity: opt.quantity + quantity }
            : opt
        );
      } else {
        return [...prev, { color: selectedColor, quantity, price: product.price }];
      }
    });

    setQuantity(1); // 색상 선택 후 수량 초기화
  };

  // 옵션별 수량 변경
  const handleOptionQuantity = (color, change) => {
    setSelectedOptions((prev) =>
      prev
        .map((opt) =>
          opt.color === color
            ? { ...opt, quantity: Math.max(1, opt.quantity + change) }
            : opt
        )
        .filter((opt) => opt.quantity > 0)
    );
  };

  // 옵션 삭제
  const handleRemoveOption = (color) => {
    setSelectedOptions((prev) => prev.filter((opt) => opt.color !== color));
  };

  // 총 합계
  const totalPrice = selectedOptions
    .reduce((sum, opt) => sum + opt.price * opt.quantity, 0)
    .toLocaleString();

  return (
    <div className="page-container">
      <p className="path">가구 &gt; {product.category} &gt; {product.name}</p>

      <div className="itempage-container">
        {/* 좌측: 이미지 */}
        <div className="image-container">
          <div className="itempage-image">
            <img
              src={imageSrc}
              alt={product.name}
              onError={handleImageError}
              className="main-image"
            />
          </div>
          {/* 색상별 작은 이미지들 */}
          <div className="color-images">
            {product.colors.map((colorName, index) => (
              <div 
                key={index}
                className="color-image-box"
                onClick={() => setColor(colorName)}
              >
                <img
                  src={process.env.PUBLIC_URL + '/images/' + product.image}
                  alt={`${product.name} ${colorName}`}
                  onError={handleImageError}
                  className="color-image"
                />
                <span className="color-label">{colorName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 우측: 상세 정보 */}
        <div className="itempage-info">
          <p className="brand">가구 제조사</p>
          <h2 className="name">{product.name}</h2>
          <div className="rating">
            ⭐ {product.rating}
            <span className="review">({product.reviews}개 리뷰)</span>
          </div>

          <div className="price">
            <span className="original">
              {product.original_price.toLocaleString()}원
            </span>
            <span className="discount">
              {product.price.toLocaleString()}원
            </span>
          </div>

          <button className="coupon">쿠폰받기</button>

          <div className="benefits">
            <p>적립: 최대 12개월 무이자 할부</p>
            <p>배송: 혜택 5,000원 (상세보기)</p>
          </div>

          <select
            value={color}
            onChange={handleColorChange}
            className="select"
          >
            <option value="">색상 선택</option>
            {product.colors.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>

          {/* 선택된 옵션 목록 */}
          {selectedOptions.length > 0 && (
            <div>
              <h4 className="option-title">선택된 옵션</h4>
              {selectedOptions.map((opt) => (
                <div key={opt.color} className="option-row">
                  <span className="option-color">{opt.color}</span>
                  <button onClick={() => handleOptionQuantity(opt.color, -1)} className="option-qty-btn">-</button>
                  <span className="option-qty">{opt.quantity}</span>
                  <button onClick={() => handleOptionQuantity(opt.color, 1)} className="option-qty-btn">+</button>
                  <span className="option-price">{(opt.price * opt.quantity).toLocaleString()}원</span>
                  <button onClick={() => handleRemoveOption(opt.color)} className="option-remove-btn">×</button>
                </div>
              ))}
            </div>
          )}

          {/* 합계 및 장바구니 버튼 - 옵션 선택 후에만 표시 */}
          {selectedOptions.length > 0 && (
            <>
              <div className="total">
                <strong>합계</strong>
                <span>{totalPrice}원</span>
              </div>

              <button className="cart">장바구니 담기</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// 테스트용 샘플 데이터
const sampleProduct = {
  name: '편안한 소파',
  category: '소파',
  image: 'sofa.png',
  rating: 4.5,
  reviews: 125,
  original_price: 299000,
  price: 249000,
  colors: ['브라운', '그레이', '베이지', '네이비']
};

// 컴포넌트 테스트용 래퍼
const App = () => {
  return <ItemPage product={sampleProduct} />;
};

export default App;
