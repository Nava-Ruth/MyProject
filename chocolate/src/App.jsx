import './App.css';
import React, { useState } from "react"; // ייבוא useState
import { MyProvider } from "./Context/context";
import { BrowserRouter } from "react-router-dom";
import { CreateStore } from "./Context/store";
import MyApp from "./components/MyApp";


function App() {

  

  const [products, setProducts] = useState([
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
  ]);

  const store = CreateStore();

  return (
    <MyProvider value={store}>
      <BrowserRouter>
        <MyApp products={products}/>
      </BrowserRouter>
    </MyProvider>

  );
}

export default App;
