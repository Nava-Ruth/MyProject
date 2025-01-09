import { FaUser } from 'react-icons/fa';
import MyContex from '../context';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

function NavBar() {

    const { currentUser, logout } = useContext(MyContex);

    const handleLogout = () => {
        logout(); // קריאה לפונקציית ההתנתקות מתוך הקונטקסט
    };

    return (
        <nav>
            
            {!currentUser ? (
                <>
                    <Link to="/log">הרשם/התחבר</Link>
                </>
            ) : (
                <>
                    <button onClick={handleLogout}>התנתקות</button>
                    <Link to="/profile">
                        <FaUser />
                        <span>{currentUser.name}</span>
                    </Link>
                    
                </>
            )}
           
        </nav>
    );
}

export default NavBar;
