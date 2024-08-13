import React, { useState } from 'react';
import products from '../components/product';

import paw2 from '../assets/paw2.png'
import bone1 from '../assets/bone1.png'

const DetailProduct = () => {
    const [currentProduct, setCurrentProduct] = useState(products[0]);
    const [mainImage, setMainImage] = useState(currentProduct.src[0]);

    const changeProduct = (product) => {
        setCurrentProduct(product);
        setMainImage(product.src[0]);
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 position-relative">
                    <img src={mainImage} alt="" className="img-fluid" />
                    <div className="position-absolute" style={{ top: '10px', left: '10px', zIndex: 1 }}>
                        <img src={bone1} alt="" style={{ width: '50px', height: '50px' }} />
                    </div>
                    <div className="d-flex mt-3">
                        {currentProduct.src.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className="img-thumbnail mx-1"
                                style={{ width: '60px', height: '60px', cursor: 'pointer' }}
                                onClick={() => setMainImage(img)}
                            />
                        ))}
                    </div>
                </div>
                <div className="col-md-6">
                    <h2>{currentProduct.title}</h2>
                    <p>{currentProduct.description}</p>
                    <h4>Review</h4>
                    <div className="p-4 bg-light rounded position-relative">
                        <p>Lorem ipsum dolor sit amet...</p>
                        <div className="position-absolute" style={{ bottom: '10px', right: '10px' }}>
                            <img src="assets/paw2.png" alt="" style={{ width: '40px', height: '40px' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <h4>Select Another Product</h4>
                {products.map((product) => (
                    <button
                        key={product.id}
                        className="btn btn-outline-primary mx-2"
                        onClick={() => changeProduct(product)}
                    >
                        {product.title}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default DetailProduct;
