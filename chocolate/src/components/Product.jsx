
import React from 'react';
import Card from './Card'
import './styles.css';
 

function Product({products,addToCart}) {
  
   
  return<>
  <div className="card-container">
   {products.map(p => <Card key={p.id} product={p} addToCart={addToCart} />)}
   </div>
  </> 
   
  
}

export default Product;
