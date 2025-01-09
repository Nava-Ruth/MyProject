import { FaUser } from 'react-icons/fa';
import MyContex from '../context';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

function NavBar() {
    const { currentUser, logout } = useContext(MyContex);
    const nav = useNavigate();

    const handleLogout = () => {
        logout(); // קריאה לפונקציית ההתנתקות מתוך הקונטקסט
        nav("/home"); // ניווט לעמוד הבית לאחר ההתנתקות
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

            {currentUser?.rool === "manager" && <Link to="/users">ניהול משתמשים</Link>}
        </nav>
    );
}

export default NavBar;
