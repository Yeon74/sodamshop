import '../styles/cardsize.scss';
import { WiStars } from "react-icons/wi";

const Cardsize = ({ products, onAddToCart }) => {

  return (
    <section className="cardsize">
      <h2 className="cardsize__title">New Arrivals<WiStars /></h2>
      <div className="cardsize__list">
        {products.map((product) => (
          <div key={product.product_id} className="cardsize__item">
            <div className="cardsize__image">
              <img
                src={`${process.env.PUBLIC_URL}${product.main_image_url}`}
                alt={product.product_name}
              />
            </div>
            <div className="cardsize__info">
              <p className='new'>New <WiStars /></p>
              <h3>{product.product_name}</h3>
              <p className="cardsize__category">{product.category} • {product.material}</p>
              <p className="cardsize__color">컬러: {product.color}</p>
              <p className="cardsize__price">{product.price.toLocaleString()}원</p>
              <button 
                className="cardsize__btn"
                onClick={() => onAddToCart(product)}
              >
                + Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cardsize;