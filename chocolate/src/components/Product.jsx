
import React from 'react';
import Card from './Card'
import './styles.css';
import { useContext } from 'react';
import MyContex from "../Context/context";


function Product({products,addToCart,remove}) {
  
  const {currentUser}=useContext(MyContex);
   
  return<>
  <div className="card-container">
   {products.map(p => <Card key={p.id} product={p} addToCart={addToCart} remove={remove} />)}
   </div>

    {currentUser?.rool=="manager"&&
            <button>הוסף מוצר</button> }
           
           
  </> 
   
  
}

export default Product;
