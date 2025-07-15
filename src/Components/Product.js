import { useState } from "react";
import { AiTwotonePlusCircle } from "react-icons/ai";
import Popup from "./Popup";
import productData from "../assets/product.json";
import { GiSeaStar } from "react-icons/gi";
import { FaDisease } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Productt = () => {
    const [isOpen1,setIsOpen1] = useState(false);
    const [isOpen2,setIsOpen2] = useState(false);
    const [isOpen3,setIsOpen3] = useState(false);
    const [isOpen4,setIsOpen4] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='product'>
            {/* <h2>Seasonal Picks<GiSeaStar /></h2> */}
            <h2 className="product-title">Seasonal Picks<FaDisease /></h2>
            <img src={`${process.env.PUBLIC_URL}/images/product-2.jpg `}/>
            <div className='product-icon-1'>
            <button className="product-btn" onClick={()=>{setIsOpen1(!isOpen1)}}><AiTwotonePlusCircle /></button>
            {
                isOpen1 &&
                <Popup>
                    <button onClick={()=>{navigate('/itemsPageEj')}}><img src={`${process.env.PUBLIC_URL}/${productData[0].img}`}
                                alt={productData[0].title}/></button>
                    <h2 className="product-h2">{productData[0].title}</h2>
                    <p className="product-p">{productData[0].description}</p>
                </Popup>
            }
            </div>
            <div className='product-icon-2'>
            <button className="product-btn" onClick={()=>{setIsOpen2(!isOpen2)}}><AiTwotonePlusCircle /></button>
            {
                isOpen2 &&
                <Popup>
                    <button onClick={()=>{navigate('/itempageMs')}}><img src={`${process.env.PUBLIC_URL}/${productData[1].img}`}
                                alt={productData[1].title}/></button>
                    <h2 className="product-h2">{productData[1].title}</h2>
                    <p className="product-p">{productData[1].description}</p>
                </Popup>
            }
            </div>
            <div className='product-icon-3'>
            <button className="product-btn" onClick={()=>{setIsOpen3(!isOpen3)}}><AiTwotonePlusCircle /></button>
            {
                isOpen3 &&
                <Popup>
                    <button onClick={()=>{navigate('/itempageSe')}}><img src={`${process.env.PUBLIC_URL}/${productData[2].img}`}
                                alt={productData[2].title}/></button>
                    <h2 className="product-h2">{productData[2].title}</h2>
                    <p className="product-p">{productData[2].description}</p>
                </Popup>
            }
            </div>
            <div className='product-icon-4'>
            <button className="product-btn" onClick={()=>{setIsOpen4(!isOpen4)}}><AiTwotonePlusCircle /></button>
            {
                isOpen4 &&
                <Popup>
                    <button onClick={()=>{navigate('./itemsinfoJung')}}><img src={`${process.env.PUBLIC_URL}/${productData[3].img}`}
                                alt={productData[3].title}/></button>
                    <h2 className="product-h2">{productData[3].title}</h2>
                    <p className="product-p">{productData[3].description}</p>
                </Popup>
            }
            </div>
        </div>
    );
};

export default Productt;