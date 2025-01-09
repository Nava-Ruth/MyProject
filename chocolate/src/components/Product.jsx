
import React from 'react';
import Card from './Card'
import { useState } from 'react';
import './styles.css';
 

function Product({addToCart}) {
  const [products,setProduct] =useState(
    [
      { id: 1, name: 'Notebook', price: 80, image: '1.jpg' },
      { id: 2, name: 'Pencil', price: 59, image: '2.jpg' },
      { id: 3, name: 'Backpack', price: 80, image: '3.jpg' },
      { id: 4, name: 'Backpack', price: 80, image: '4.jpg' },
      { id: 5, name: 'Backpack', price: 80, image: '5.jpg' },
      { id: 6, name: 'Backpack', price: 80, image: '6.jpg' },
      { id: 7, name: 'Backpack', price: 80, image: '7.jpg' },
      { id: 8, name: 'Backpack', price: 80, image: '8.jpg' },
      { id: 9, name: 'Backpack', price: 80, image: '5.jpg' },
      { id: 10, name: 'Backpack', price: 80, image: '6.jpg' },
      { id: 11, name: 'Backpack', price: 80, image: '7.jpg' },
      { id: 12, name: 'Backpack', price: 80, image: '8.jpg' },
    ]
  ) 

  return<>
  <div className="card-container">
   {products.map(p => <Card key={p.id} product={p} addToCart={addToCart} />)}
   </div>
  </> 
   
  
}

export default Product;
