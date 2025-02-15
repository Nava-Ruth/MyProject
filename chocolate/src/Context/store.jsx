import { useState } from "react"
import Swal from 'sweetalert2';


export const CreateStore=()=>{

const[users,setUsers]=useState([

{id: 1,name:"ruti",password:"1234",email:"123@r",rool:"manager"},
{id: 2,name:"nava",password:"1111",email:"123@n",rool:"manager"},
{id: 3,name:"tamar",password:"2222",email:"123@t",rool:"user"},
{id: 4,name:"sara",password:"3333",email:"123@s",rool:"user"}
])

const [currentUser,setCurrentUser]=useState(null);

const store = {
  users,
  currentUser,
  login: (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
        customClass: {
          popup: "custom-swal", // עיצוב לחלון כולו
        }
      });
      return false;
    } else {
      setCurrentUser(user);
      return true;

    }
  },

  signup: (newUser) => { 
    // if (!newUser || !newUser.name || !newUser.email || !newUser.password) {
    //   alert("פרטי המשתמש אינם תקינים. אנא מלא את כל השדות.");
    //   return false;
    // }
    if (users.find(u => u.email === newUser.email)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "כתובת מייל קיימת",
        footer: '<a href="#">Why do I have this issue?</a>',
        customClass: {
          popup: "custom-swal", // עיצוב לחלון כולו
        }
      });
      return false;
    } else {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
      setCurrentUser(newUser);
      alert("נרשמת בהצלחה!"); 
      return true;
    }
  },

  logout: () => {
    setCurrentUser(null); 
  },
};

 

return store
}
 