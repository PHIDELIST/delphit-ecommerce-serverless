import NavPopular from './NavPopular';
import './PopularProducts.css';
import product from '../../assets/mushroom.jpg'

// Mock product data
const mockProducts = [
  {
    name: 'Product 1',
    price: 199,
    imageUrl: product,
  },
  {
    name: 'Product 2',
    price: 299,
    imageUrl: product,
  },

  {
    name: 'Product 3',
    price: 149,
    imageUrl: product,
  },
  {
    name: 'Product 4',
    price: 99,
    imageUrl: product,
  },
  {
    name: 'Product 5',
    price: 249,
    imageUrl: product,
  },
  {
    name: 'Product 6',
    price: 179,
    imageUrl: product,
  },
  {
    name: 'Product 7',
    price: 349,
    imageUrl: product,
  },
  {
    name: 'Product 8',
    price: 129,
    imageUrl: product,
  },
  {
    name: 'Product 9',
    price: 289,
    imageUrl: product,
  },
  {
    name: 'Product 10',
    price: 199,
    imageUrl: product,
  },
];

const PopularProducts = () => {
  return (
    <div className="popular-products-container">
      <NavPopular />
      <div className='products-cards'>
        {mockProducts.map((product, index) => (
                
                    <div className="card-product" key={index}>
                        <div className="container-image">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                    <div className="content-products">
                        <div className="detail-products">
                        <span>{product.name}</span>
                        <p>${product.price}</p>
                        <button>Buy</button>
                        </div>
                        <div className="product-image">
                        <div className="box-image-products">
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        </div>
                </div>
            </div>
        ))}
    </div>
    </div>
  );
};

export default PopularProducts;
