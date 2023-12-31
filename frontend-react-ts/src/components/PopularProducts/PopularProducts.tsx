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
                        <button className="card-btn-best">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
                          </button>
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
