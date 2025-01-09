import { useState } from "react"

export const CreateStore=()=>{

const[users,setUsers]=useState([

{id: 1,name:"ruti",pasword:"1234",email:"123@r",rool:"manager"},
{id: 2,name:"nava",pasword:"1111",email:"123@n",rool:"user"},
{id: 3,name:"tamar",pasword:"2222",email:"123@t",rool:"user"},
{id: 4,name:"sara",pasword:"3333",email:"123@s",rool:"user"}
])

const [currentUser,setCurrentUser]=useState(null);

const store={

    users,
    currentUser,
    login: (email,pasword)=>{

        const user=users.find(u=>u.email==email && u.pasword==pasword)
        if(!user)
        {
              alert("אחד הפרטים שגויים");
        }
        else{
            setCurrentUser(user);
        }
    },
    sigenup: (newUser) => {
        if (!newUser || !newUser.name || !newUser.email || !newUser.pas) {
          alert("פרטי המשתמש אינם תקינים. אנא מלא את כל השדות.");
          return;
        }
        if (users.find(u => u.email === newUser.email)) {
          alert("משתמש עם כתובת מייל זו כבר קיים.");
        } else {
          setUsers([...users, { ...newUser, id: users.length + 1 }]);
          setCurrentUser(newUser);
          alert("נרשמת בהצלחה!");
        }
      }
}

return store
}
 