import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { RootState } from '../../redux/store';
import best from '../../assets/veges1.jpg'
import './BestSales.css'

// Define the product interface
interface Product {
    name: string;
    price: number;
}

// Define the props types for the component
type PropsFromRedux = ConnectedProps<typeof connector>;

// Props interface for the component
interface BestSalesProps extends PropsFromRedux {
    products: Product[];
}

// Define your dummy data
const BestSalesData: Product[] = [
    {
        name: 'Product 1',
        price: 199,
    },
    {
        name: 'Product 2',
        price: 299,
    },
    {
        name: 'Product 3',
        price: 149,
    },
    {
        name: 'Product 4',
        price: 299,
    },
    {
        name: 'Product 5',
        price: 299,
    },
    {
        name: 'Product 6',
        price: 299,
    },
    {
        name: 'Product 7',
        price: 299,
    },
    {
        name: 'Product 8',
        price: 299,
    },
    {
        name: 'Product 9',
        price: 299,
    },
];

const BestSales: React.FC<BestSalesProps> = ({ addToCart }) => {
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const handleAddToCart = (product: Product) => {
        addToCart(product);
        setSuccessMessage(`${product.name} has been added to your cart.`);
        // Clear the success message after a delay (e.g., 3 seconds)
        setTimeout(() => {
            setSuccessMessage(null);
        }, 3000);
    };

    return (
        <div className='Best-container'>
            <h1>Daily Best Sales</h1>
            <div className='Best-Sales-cards'>
                {BestSalesData.map((product, index) => (
                    <div className="card-best" key={index}>
                        <div className="card-img-best">
                            {/* Placeholder for your image */}
                            <div className="img-bes">
                              <img src={best} alt="" />
                            </div>
                        </div>
                        <div className="card-title-best">{product.name}</div>
                        <div className="card-subtitle-best">
                            Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </div>
                        <hr className="card-divider-best" />
                        <div className="card-footer-best">
                            <div className="card-price-best">
                                <span>$</span>{product.price}
                            </div>
                            <button
                                className="card-btn-best"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {successMessage && (
                <div className="success-message">
                    {successMessage}
                </div>
            )}
        </div>
    );
};

// Connect the component to Redux
const connector = connect(null, { addToCart });

export default connector(BestSales);
