import { useContext, useEffect } from "react";
import MyContex from "../Context/context";
import { useNavigate } from "react-router-dom";

function UserManagerTable() {
    const { users } = useContext(MyContex);

    

    return (
        <div className="table-container">
            <h1>ניהול משתמשים</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>שם</th>
                        <th>אימייל</th>
                        <th>סטטוס</th>
                        <th>פעולות</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.rool}</td>
                            <td className="action-btns">
                                <button>ערוך</button>
                                <button>מחיקה</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserManagerTable;
