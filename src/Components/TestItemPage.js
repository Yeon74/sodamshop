import React, { useState } from 'react';

const ItemPage = ({ product = {
  name: '편안한 소파',
  category: '소파',
  image: 'sofa.png',
  rating: 4.5,
  reviews: 125,
  original_price: 299000,
  price: 249000,
  colors: ['브라운', '그레이', '베이지', '네이비']
} }) => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  // 이미지 경로 설정 (PUBLIC_URL 사용)
  const imageSrc = process.env.PUBLIC_URL + '/images/' + product.image;
  
  // 디버깅을 위한 콘솔 로그
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
    <div className="page-container" style={styles.page}>
      <style>
        {`
          :root {
            --color-primary: #708238;
            --color-sub1: #D2B48C;
            --color-sub2: #F8EED7;
            --color-white: #FFFFFF;
            --color-gray: #666666;
            --color-black: #333333;
          }
          
          .itempage-container {
            transition: all 0.3s ease;
          }
          .itempage-image {
            transition: all 0.3s ease;
          }
          
          /* 모바일 레이아웃 - 이미지는 중앙, 텍스트는 왼쪽 정렬 */
          @media (max-width: 1024px) {
            .itempage-container {
              flex-direction: column !important;
              gap: 2rem !important;
            }
            .itempage-image {
              width: 65% !important;
              max-width: 280px !important;
              height: 200px !important;
              margin: 0 auto !important;
              align-self: center !important;
            }
            .itempage-info {
              align-self: stretch !important;
              text-align: left !important;
            }
          }
          
          @media (max-width: 768px) {
            .itempage-container {
              gap: 1.5rem !important;
            }
            .itempage-image {
              width: 60% !important;
              max-width: 250px !important;
              height: 180px !important;
            }
            .option-row {
              flex-wrap: wrap;
              font-size: 0.9rem;
              gap: 0.5rem !important;
            }
            .option-color {
              min-width: 50px;
              width: 60px;
            }
            .option-price {
              min-width: 60px;
              width: 70px;
            }
            .page-container {
              padding: 1rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .itempage-image {
              width: 70% !important;
              max-width: 220px !important;
              height: 160px !important;
            }
            .page-container {
              padding: 0.8rem !important;
            }
            .option-row {
              font-size: 0.85rem;
              gap: 0.3rem !important;
            }
            .option-color {
              min-width: 45px;
              width: 55px;
              font-size: 0.8rem;
            }
            .option-price {
              min-width: 55px;
              width: 65px;
              font-size: 0.8rem;
            }
          }
        `}
      </style>
      <p style={styles.path}>가구 &gt; {product.category} &gt; {product.name}</p>

      <div className="itempage-container" style={styles.container}>
        {/* 좌측: 이미지 */}
        <div style={styles.imageContainer}>
          <div className="itempage-image" style={styles.image}>
            <img
              src={imageSrc}
              alt={product.name}
              onError={handleImageError}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            />
          </div>
          
          {/* 색상별 작은 이미지들 */}
          <div style={styles.colorImages}>
            {product.colors.map((colorName, index) => (
              <div 
                key={index}
                style={styles.colorImageBox}
                onClick={() => setColor(colorName)}
              >
                <img
                  src={process.env.PUBLIC_URL + '/images/' + product.image}
                  alt={`${product.name} ${colorName}`}
                  onError={handleImageError}
                  style={styles.colorImage}
                />
                <span style={styles.colorLabel}>{colorName}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 우측: 상세 정보 */}
        <div className="itempage-info" style={styles.info}>
          <p style={styles.brand}>가구 제조사</p>
          <h2 style={styles.name}>{product.name}</h2>
          <div style={styles.rating}>
            ⭐ {product.rating}
            <span style={styles.review}>({product.reviews}개 리뷰)</span>
          </div>

          <div style={styles.price}>
            <span style={styles.original}>
              {product.original_price.toLocaleString()}원
            </span>
            <span style={styles.discount}>
              {product.price.toLocaleString()}원
            </span>
          </div>

          <button style={styles.coupon}>쿠폰받기</button>

          <div style={styles.benefits}>
            <p>적립: 최대 12개월 무이자 할부</p>
            <p>배송: 혜택 5,000원 (상세보기)</p>
          </div>

          <select
            value={color}
            onChange={handleColorChange}
            style={styles.select}
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
              <h4 style={styles.optionTitle}>선택된 옵션</h4>
              {selectedOptions.map((opt) => (
                <div key={opt.color} className="option-row" style={styles.optionRow}>
                  <span className="option-color" style={styles.optionColor}>{opt.color}</span>
                  <button onClick={() => handleOptionQuantity(opt.color, -1)} style={styles.optionQtyBtn}>-</button>
                  <span style={styles.optionQty}>{opt.quantity}</span>
                  <button onClick={() => handleOptionQuantity(opt.color, 1)} style={styles.optionQtyBtn}>+</button>
                  <span className="option-price" style={styles.optionPrice}>{(opt.price * opt.quantity).toLocaleString()}원</span>
                  <button onClick={() => handleRemoveOption(opt.color)} style={styles.optionRemoveBtn}>×</button>
                </div>
              ))}
            </div>
          )}

          {/* 합계 및 장바구니 버튼 - 옵션 선택 후에만 표시 */}
          {selectedOptions.length > 0 && (
            <>
              <div style={styles.total}>
                <strong>합계</strong>
                <span>{totalPrice}원</span>
              </div>

              <button style={styles.cart}>장바구니 담기</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

// 메인 스타일
const styles = {
  page: {
    width: '90%',
    margin: '1rem auto',
    fontFamily: 'sans-serif',
    maxWidth: '900px',
    backgroundColor: 'var(--color-white)',
    padding: '0',
  },
  path: {
    fontSize: '1rem',
    marginBottom: '1.5rem',
    color: 'var(--color-gray)',
    fontWeight: '500',
  },
  container: {
    display: 'flex',
    gap: '2rem',
    maxWidth: '100%',
    alignItems: 'flex-start',
    backgroundColor: 'var(--color-white)',
    padding: '1.5rem',
    borderRadius: '12px',
    boxShadow: '0 2px 20px rgba(0,0,0,0.08)',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    flexShrink: 0,
  },
  image: {
    width: '100%',
    maxWidth: '320px',
    height: '320px',
    background: 'var(--color-sub2)',
    border: '2px solid var(--color-sub1)',
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(112, 130, 56, 0.15)',
    position: 'relative',
  },
  colorImages: {
    display: 'flex',
    gap: '0.5rem',
    maxWidth: '320px',
    flexWrap: 'wrap',
  },
  colorImageBox: {
    width: '70px',
    height: '70px',
    border: '2px solid var(--color-sub1)',
    borderRadius: '8px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    background: 'var(--color-white)',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  colorImage: {
    width: '100%',
    height: '50px',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  colorLabel: {
    fontSize: '0.7rem',
    textAlign: 'center',
    padding: '0.2rem',
    color: 'var(--color-black)',
    fontWeight: '500',
    background: 'var(--color-white)',
    borderTop: '1px solid var(--color-sub1)',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    minWidth: 0,
    textAlign: 'left',
  },
  brand: {
    fontSize: '0.9rem',
    color: 'var(--color-primary)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  name: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    lineHeight: '1.3',
    marginBottom: '0.5rem',
    color: 'var(--color-black)',
  },
  rating: {
    fontSize: '1rem',
    color: 'var(--color-black)',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  review: {
    color: 'var(--color-gray)',
    fontSize: '0.9rem',
  },
  price: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
    padding: '1rem 0',
    borderTop: '1px solid var(--color-sub1)',
    borderBottom: '1px solid var(--color-sub1)',
  },
  original: {
    textDecoration: 'line-through',
    color: 'var(--color-gray)',
    fontSize: '1rem',
  },
  discount: {
    fontSize: '1.6rem',
    fontWeight: 'bold',
    color: 'var(--color-primary)',
  },
  coupon: {
    width: '120px',
    padding: '0.7rem 1rem',
    background: 'var(--color-primary)',
    color: 'var(--color-white)',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(112, 130, 56, 0.3)',
  },
  benefits: {
    fontSize: '0.9rem',
    color: 'var(--color-gray)',
    lineHeight: 1.6,
    padding: '1rem',
    backgroundColor: 'var(--color-sub2)',
    borderRadius: '8px',
    border: '1px solid var(--color-sub1)',
  },
  select: {
    padding: '0.8rem',
    fontSize: '1rem',
    width: '100%',
    maxWidth: '220px',
    border: '2px solid var(--color-sub1)',
    borderRadius: '8px',
    backgroundColor: 'var(--color-white)',
    color: 'var(--color-black)',
    cursor: 'pointer',
    transition: 'border-color 0.3s ease',
  },
  quantity: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: 'var(--color-sub2)',
    borderRadius: '8px',
    border: '1px solid var(--color-sub1)',
  },
  quantityLabel: {
    fontSize: '1rem',
    fontWeight: '600',
    color: 'var(--color-black)',
  },
  qtyBtn: {
    width: '36px',
    height: '36px',
    background: 'var(--color-sub1)',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    borderRadius: '6px',
    color: 'var(--color-black)',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  },
  unitprice: {
    marginLeft: 'auto',
    fontWeight: 'bold',
    color: 'var(--color-primary)',
    fontSize: '1.1rem',
  },
  optionTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: 'var(--color-black)',
    marginBottom: '0.5rem',
  },
  optionRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    margin: '0.5rem 0',
    background: 'var(--color-sub2)',
    padding: '0.8rem',
    borderRadius: '8px',
    fontSize: '1rem',
    border: '1px solid var(--color-sub1)',
    transition: 'all 0.3s ease',
  },
  optionColor: {
    width: '80px',
    minWidth: '60px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'var(--color-primary)',
    background: 'var(--color-white)',
    padding: '0.3rem 0.5rem',
    borderRadius: '6px',
    border: '1px solid var(--color-sub1)',
  },
  optionQtyBtn: {
    width: '32px',
    height: '32px',
    background: 'var(--color-sub1)',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    borderRadius: '6px',
    color: 'var(--color-black)',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  },
  optionQty: {
    width: '32px',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'var(--color-black)',
  },
  optionPrice: {
    width: '90px',
    minWidth: '70px',
    textAlign: 'right',
    fontWeight: 'bold',
    color: 'var(--color-primary)',
    fontSize: '1rem',
  },
  optionRemoveBtn: {
    width: '32px',
    height: '32px',
    background: '#ff6b6b',
    border: 'none',
    fontSize: '1.2rem',
    cursor: 'pointer',
    borderRadius: '6px',
    color: 'var(--color-white)',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  },
  total: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '1.3rem',
    fontWeight: 'bold',
    padding: '1.5rem 0',
    borderTop: '2px solid var(--color-primary)',
    color: 'var(--color-black)',
  },
  cart: {
    padding: '1.2rem',
    background: 'var(--color-primary)',
    color: 'var(--color-white)',
    fontSize: '1.1rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    marginTop: '1rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(112, 130, 56, 0.3)',
  },
};

export default ItemPage;