import {useState } from 'react';
import { Routing } from '../components/Routing';
import { Link } from 'react-router-dom';
import { FaShoppingCart} from 'react-icons/fa';
import NavBar from './NavBar';
import Swal from 'sweetalert2';


function MyApp({products,remove}) {
 
    
    const [cart, setCart] = useState([]);


    const addToCart = (product) => {
        setCart((cart) => [...cart, product]);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "המוצר נוסף בהצלחה",
            showConfirmButton: false,
            timer: 1300,
            customClass: {
              popup: "custom-swal", // עיצוב לחלון כולו
               
            }
          });
    };

    const removeFromCart = (productId) => {
        setCart((cart) => cart.filter((product) => product.id !== productId));
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };
    //הסרת מוצר
    



    return (
        <>
            <header>
                <nav>
                    <Link to="/home">דף הבית</Link>
                    <Link to="/about">אודות</Link>
                    <Link to="/ContactUs">צור קשר</Link>
                    <Link to="/Product">מוצרים</Link>
                    <Link to="/Cart"> <FaShoppingCart /> </Link>
                    <NavBar/>
                </nav>
            </header>

            <main>
                <Routing
                    addToCart={addToCart}
                    cart={cart}
                    removeFromCart={removeFromCart}
                    calculateTotal={calculateTotal}
                    products={products}
                    remove={remove}
                />
            </main>
        </>
    );
}

export default MyApp;
