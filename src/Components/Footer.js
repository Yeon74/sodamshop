
const Footer = () => {
  return (
    <footer>
      <img src={`${process.env.PUBLIC_URL}/images/head-logo.png`} alt="head logo image" className="img-w"/>
      <img src={`${process.env.PUBLIC_URL}/images/foot-logo.png`} alt="foot logo image" className="img-h"/>
      <div className="info-wrap">
        <div className="foot-info">
          <button className="foter-btn">Information</button>
          <ul>
            <li>Team. 소담상점</li>
            <li>제휴 안내</li>
            <li>배송 및 교환</li>
            <li>자주 묻는 질문</li>
            <li>문의하기</li>
          </ul>
        </div>
        <div className="foot-note">
          <button className="foter-btn">Notice</button>
          <ul>
            <li>새로운 소식</li>
            <li>베스트 셀러</li>
            <li>더보기</li>
          </ul>
        </div>
      </div>
      <div className="foot-email">
        <p>신상품 소식과 할인 혜택을 받아보세요</p>
        <div className="email-input">
          <input placeholder="이메일 주소를 입력하세요" />
          <button className="foter-btn">신청하기</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;