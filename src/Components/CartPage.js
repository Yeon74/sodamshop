import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

const CartPage = ({cart, onDelete, onUpdateCount}) => {
  const navigate = useNavigate();
  const totalPrice = cart.reduce((sum, item) => {
    return sum + (item.price * item.count);
  }, 0);

  return (
    <>
      <div className="cart-header">
      <button className="home-icon" onClick={()=>{navigate('/')}}><IoIosHome /></button>
      </div>
    <div className="cart-page">
      <h2>My CART</h2>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty!</h3>
          <p>Add your favorite items to your cart.</p>
          <button 
            className="home" 
            onClick={() => navigate('/')}
          >
            Shop Now
          </button>
        </div>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.product_id}>
                <img 
                  src={`${process.env.PUBLIC_URL}${item.main_image_url}`} 
                  alt={item.product_name}
                />
                <div className="item-info">
                  <div className="item-up">
                    <h4>{item.product_name}</h4>
                    <RiDeleteBinLine 
                      className="delete-icon"
                      onClick={() => onDelete(item.product_id)}
                    />
                  </div>
                  <div className="item-down">
                    <div className="quantity-controls">
                      <button
                        onClick={() => onUpdateCount(item.product_id, item.count - 1)}
                        disabled={item.count <= 1}
                        className="quantity-btn decrease"
                      >
                        -
                      </button>
                      <span className="quantity-display">{item.count}</span>
                      <button
                        onClick={() => onUpdateCount(item.product_id, item.count + 1)}
                        className="quantity-btn increase"
                      >
                        +
                      </button>
                    </div>
                    <h3>{item.price.toLocaleString()}원</h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <div className="summary-price">
              <p>Total :</p>
              <h3>{totalPrice.toLocaleString()}원</h3>
            </div>
            <button>주문하기</button>
          </div>
        </>
      )}
    </div>
    </>
  );
};

export default CartPage;