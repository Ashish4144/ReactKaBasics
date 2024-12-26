import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Products = () => {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
    const response = await fetch('https://fakestoreapi.in/api/products');
    const data = await response.json();
    console.log(data);//
    if(data.status === 'SUCCESS') {
      setProductDetails(data.products);
    }
 } catch (error) {
  console.error('Error fetching products', error);
  }
};
  fetchProducts();
  },[]);  
  return (
    <div className='d-flex flex-wrap'>
      {productDetails.map((product) => ( 
          <div key={product.id} className='card m-3' style={{width: '18rem'}}>
          <img src={product.image} className="card-img-top" alt={product.title}/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <a href="#" className="btn btn-success">Go somewhere</a>
          </div>
        </div>
    ))}
    
    </div>
  );
};

export default Products;
