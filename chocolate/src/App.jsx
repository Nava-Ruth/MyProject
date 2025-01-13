import './App.css';
import React, { useState } from "react"; // ייבוא useState
import { MyProvider } from "./Context/context";
import { BrowserRouter } from "react-router-dom";
import { CreateStore } from "./Context/store";
import MyApp from "./components/MyApp";


function App() {

  

  const [products, setProducts] = useState([
    { id: 1, name: 'פרלינה', price: 80, image: '1.jpg' },
    { id: 2, name: 'קוקולדה', price: 59, image: '2.jpg' },
    { id: 3, name: 'טופיפה', price:100, image: '3.jpg' },
    { id: 4, name: 'טמפרור', price: 80, image: '4.jpg' },
    { id: 5, name: 'פררו רושה', price: 80, image: '5.jpg' },
    { id: 6, name: 'ליבר', price: 89, image: '6.jpg' },
    { id: 7, name: 'נוטלה', price: 78, image: '7.jpg' },
    { id: 8, name: 'בונבונירה', price: 45, image: '8.jpg' },
    { id: 9, name: 'אנרובר', price: 20, image: '9.jpg' },
    { id: 10, name: 'רוקי רואד', price: 38, image: '10.jpg' },
    { id: 11, name: 'מילקה', price: 150, image: '11.jpg' },
    { id: 12, name: 'מון שרי', price: 65, image: '12.jpg' },
  ]);

  const store = CreateStore();

  const remove=(productId)=>{
    setProducts((products) => products.filter((product) => product.id !== productId));
  }


  return (
    <MyProvider value={store}>
      <BrowserRouter>
        <MyApp products={products} remove={remove}/>
      </BrowserRouter>
    </MyProvider>

  );
}

export default App;
