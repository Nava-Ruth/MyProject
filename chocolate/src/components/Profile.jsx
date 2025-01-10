import React, { useContext } from 'react';
import MyContex from '../Context/context';
 

function Profile() {

  const user = useContext(MyContex).currentUser?.name ||"אורח";
  return (
    <div>
      <h1>אזור אישי</h1>
      <p>ברוך הבא לאזור האישי שלך!</p>
      <p>{user}</p>
    </div>
  );
}

export default Profile;
