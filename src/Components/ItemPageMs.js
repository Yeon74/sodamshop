import { useNavigate } from "react-router-dom";
import Itemsinfo from "./Itemsinfo";
import { useEffect } from "react";

const ItemPageMs = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    return (
        <>
        <Itemsinfo/>
        <div className="ms">
            <img src={`${process.env.PUBLIC_URL}/images/item-MS/Detail-ms.png`} alt="image"/>
        </div>
        </>
    );
};

export default ItemPageMs;