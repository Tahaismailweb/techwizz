import React from 'react';

const Product = () => {
  return (
    <main role="main">
      <div className="product">
        <figure>
          <img
            src="https://raw.githubusercontent.com/itbruno/productpreview/master/assets/img/t-shirt.jpg"
            alt="Product"
            className="product-image"
          />
        </figure>
        <div className="product-description">
          <div className="info">
            <h1>LOREM IPSUM</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="price">89</div>
        </div>
        <div className="product-sidebar">
          <button className="buy">
            <span>BUY ITEM</span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Product;
