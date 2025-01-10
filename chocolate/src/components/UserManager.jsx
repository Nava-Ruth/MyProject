import { useContext, useEffect } from "react";
import MyContex from "../Context/context";
import { useNavigate } from "react-router-dom";

function UserManager() {
    const { users, currentUser } = useContext(MyContex);
    const navigate = useNavigate();

    // אם המשתמש אינו מחובר או שאינו מנהל, להעביר לעמוד הבית
    useEffect(() => {
        if (!currentUser || currentUser.rool !== "manager") {
            navigate("/home");
        }
    }, [currentUser, navigate]);

    return (
        <>
            <h1>ניהול משתמשים</h1>
            <ul>
                {users && users.map(u => (
                    <li key={u.id}>{u.id} | {u.name} | {u.email}</li>
                ))}
            </ul>
        </>
    );
}

export default UserManager;
