
import React from 'react';
import Card from './Card'
import '../css/styles.css';
import { useContext } from 'react';
import MyContex from "../Context/context";

//מקבלת מוצרים ופונקציות על המוצרים ומעבירה ל-כרטיס
function Product({ products, addToCart, remove }) {

  const { currentUser } = useContext(MyContex);

  return <>
    <div className="card-container">
      {products.map(p => <Card key={p.id} product={p} addToCart={addToCart} remove={remove} />)}
    </div>

    {currentUser?.rool == "manager" &&
      <button>הוסף מוצר</button>}

  </>


}

export default Product;
