import Category from "../assets/Category.json";

const ItemCategory = () => {
  return (
    <div id="category">
      <ul>
        {
          Category.products.map((item) => {
            return (
              <li key={item.product_id}>
                <img 
                  src={`${process.env.PUBLIC_URL}${item.main_image_url}`} 
                  alt={item.product_name}
                />
                <p>{item.product_name}</p>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default ItemCategory;