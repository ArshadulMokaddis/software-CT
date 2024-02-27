import React from 'react';
import image from '../components/image/Tide_Logo.png';
import '../components/home.css';

function Home() {
    const productList = [
        {
            name: 'Tide Powder',
            description: 'We have always created products that improve people’s lives now and for generations to come—in fact sustainability and social good have always been a part of our business strategy.',
        },
        {
            name: 'Tide Powder',
            description: 'We have always created products that improve people’s lives now and for generations to come—in fact sustainability and social good have always been a part of our business strategy.',
        }
    ];

    return (
        <div className="container">
          <div className="card">
            <ul className="products">
              {productList.map(product => (
                <li key={product.name}>
                  <div className="product">
                    <div className="product-image">
                      <img src={image} alt="Product" />
                        </div>
                        <div className="product-information">
                           <h4>{product.name}</h4>
                         <p>{product.description}</p>
                           </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Home;
