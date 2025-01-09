import { useContext, useState } from 'react';
import { Routing } from '../components/Routing';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import MyContex from '../context';


function MyApp() {
 
    const user = useContext(MyContex)?.currentUser?.name || "אורח";
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((cart) => [...cart, product]);
        // alert("המוצר נוסף בהצלחה!");
    };

    const removeFromCart = (productId) => {
        setCart((cart) => cart.filter((product) => product.id !== productId));
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price, 0);
    };




    return (
        <>
            <header>
                <nav>
                    <Link to="/home">דף הבית</Link>
                    <Link to="/about">אודות</Link>
                    <Link to="/payment">תשלום</Link>
                    <Link to="/ContactUs">צור קשר</Link>
                    <Link to="/Product">מוצרים</Link>
                    <Link to="/Cart"> <FaShoppingCart /> </Link>
                    <Link to="/profile"> <FaUser /></Link>
                    <Link to="/log"> LogIn/LogOut</Link>
                    <p>{user}</p>
                </nav>
            </header>

            <main>
                <Routing
                    addToCart={addToCart}
                    cart={cart}
                    removeFromCart={removeFromCart}
                    calculateTotal={calculateTotal}
                />
            </main>
        </>
    );
}

export default MyApp;
