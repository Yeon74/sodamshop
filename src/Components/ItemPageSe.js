import { LiaStarSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
import ItemsinfoSe from "./ItemsinfoSe";

const ItemPage = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    return (
        <>
        <ItemsinfoSe/>
        <div className="itempage">
            <img className="itempage-img01"src={`${process.env.PUBLIC_URL}/images/item-SE/img01.png`} alt="상세 페이지 이미지"/>
            <img className="itempage-img02"src={`${process.env.PUBLIC_URL}/images/item-SE/img-01.png`} alt="상세 페이지 이미지"/>
            <img className="itempage-img03"src={`${process.env.PUBLIC_URL}/images/item-SE/img-02.webp`} alt="상세 페이지 이미지"/>
            <img className="itempage-img21"src={`${process.env.PUBLIC_URL}/images/item-SE/img-12.webp`} alt="상세 페이지 이미지"/>
        <div className="item-img01">
            <img className="itempage-img04"src={`${process.env.PUBLIC_URL}/images/item-SE/img-03.webp`} alt="상세 페이지 이미지"/>
            <img className="itempage-img05"src={`${process.env.PUBLIC_URL}/images/item-SE/img-04.webp`} alt="상세 페이지 이미지"/>
            </div>
            <img className="itempage-img22"src={`${process.env.PUBLIC_URL}/images/item-SE/img-13.webp`} alt="상세 페이지 이미지"/>
            <img className="itempage-img06"src={`${process.env.PUBLIC_URL}/images/item-SE/img-05.webp`} alt="상세 페이지 이미지"/>
            <img className="itempage-img07"src={`${process.env.PUBLIC_URL}/images/item-SE/img-06.webp`} alt="상세 페이지 이미지"/>
            <img className="itempage-img08"src={`${process.env.PUBLIC_URL}/images/item-SE/img-07.webp`} alt="상세 페이지 이미지"/>
            <p className="ha_home">@seul_ha_home 인스타그램 후기</p>
            <img className="itempage-img09"src={`${process.env.PUBLIC_URL}/images/item-SE/img02.png`} alt="상세 페이지 이미지"/>
            <img className="itempage-img10"src={`${process.env.PUBLIC_URL}/images/item-SE/img-08.webp`} alt="상세 페이지 이미지"/>
            <img className="itempage-img11"src={`${process.env.PUBLIC_URL}/images/item-SE/img-09.webp`} alt="상세 페이지 이미지"/>
            <div className="item-img02">
            <img className="itempage-img12"src={`${process.env.PUBLIC_URL}/images/item-SE/img-10.webp`} alt="상세 페이지 이미지"/>
            <img className="itempage-img13"src={`${process.env.PUBLIC_URL}/images/item-SE/img-11.webp`} alt="상세 페이지 이미지"/>
            </div>
            <img className="itempage-img14"src={`${process.env.PUBLIC_URL}/images/item-SE/img03.png`} alt="상세 페이지 이미지"/>               
            <img className="itempage-img15"src={`${process.env.PUBLIC_URL}/images/item-SE/img06.png`} alt="상세 페이지 이미지"/>
            <img className="itempage-img20"src={`${process.env.PUBLIC_URL}/images/item-SE/img04.png`} alt="상세 페이지 이미지"/>         
            <img className="itempage-img16"src={`${process.env.PUBLIC_URL}/images/item-SE/img07.png`} alt="상세 페이지 이미지"/>        
            <img className="itempage-img17"src={`${process.env.PUBLIC_URL}/images/item-SE/img05.png`} alt="교환 및 반품안내 이미지"/>        
            <img className="itempage-img19"src={`${process.env.PUBLIC_URL}/images/item-SE/img09.png`} alt="교환 및 반품안내 이미지"/>        
            <div className="review">
        <div className="notice">
            <h2>[교환 및 반품안내]</h2>
            <p>세탁 전 제품의 색상 및 사이즈 불량여부를 필히 확인해주세요</p>
            <p>세탁하신 상품은 이후 불량이 발견되더라도 반품 및 환불이 절대 불가합니다.</p>
            <p>주문제작 상품은 단순변심으로 인한 교환 및 환불이 불가합니다.</p>
            <p>모니터 해상도에 따라 약간의 색상차이는 발생할 수 있습니다.</p>
            <p>반품 신청은 제품을 수령하신 날로부터 7일 이내로 신청해주셔야 합니다.</p>
            <p>오배송 및 불량으로 인한 건은 배송비가 부과되지 않습니다.</p>
            <p>(변심 왕복배송비 7,000원 / 차렵이불 10,000원 / 카트린넨 12,000원)</p>
            <p>접수되지 않은 반품 상품을 임의로 발송하실 경우
            분실 또는 반송처리될 수 있으며 필히 고객센터로 문의주시기 바랍니다.</p>
        </div>
        <div className="notice2">
                <h4>배송안내</h4>
                <p>무료배송 : 10만원 이상구매 시 무료배송 (10만원 미만 3,000원)</p>
                <p>제주 및 도서산간 : 5,000원 추가</p>
                <p>배송기간 : 맞춤제작 4~7일 소요 (토,일 제외)</p>
                <p>배송기간 : 1~3일 소요 (토,일 제외)</p>
                <br/>
                <h4>고객센터 안내</h4>
                <p>고객센터 - <span>031.123.456</span></p>
                <p>상담시간 - 평일<span> 월~금 (10:00 ~ 18:00)</span></p>
                <p>상담시간 이외 문의는 Q&A 게시판 또는 카카오톡, 네이버톡톡으로 문의 바랍니다.</p>
        </div>
            <h2>리뷰 9</h2>
            <p className="review-score"><span><LiaStarSolid /></span>4.9</p>
            <p>9개의 리뷰</p>
            <div className="review-star">
            <p><span><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /><LiaStarSolid /></span></p>
            <p>구매자의 100%가 이 상품에 만족했어요</p>
            </div>
            <h3>동영상/사진 모아보기</h3>
            <div className="review-img">
                <img className="review-img01" src={`${process.env.PUBLIC_URL}/images/item-SE/review01.webp`} alt="고객 리뷰 이미지1"/>
                <img className="review-img02" src={`${process.env.PUBLIC_URL}/images/item-SE/review02.webp`} alt="고객 리뷰 이미지2"/>
                <img className="review-img03" src={`${process.env.PUBLIC_URL}/images/item-SE/review03.webp`} alt="고객 리뷰 이미지3"/>
            </div>
            </div>
        </div>
        </>
    );
};

export default ItemPage;