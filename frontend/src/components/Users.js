import React, {useEffect, useState} from 'react'

//style
import "./scss/user.scss"

const Users = () => {
  
    const [getUsers, setGetUsers] = useState()
    
    useEffect(() => {
      async function fetchBlogs() {
        let response = await fetch("http://localhost:5000/api/user/getUsers");
        let data = await response.json();
        console.log(data);
        setGetUsers(data.user);
      }
      fetchBlogs();
    }, []);

    const deleteUser = (_id) => {
      try {
        fetch(`http://localhost:5000/api/user/deleteUser/${_id}`, {
          method: "DELETE",
        });
        console.log("success");
      } catch (error) {
        console.error("Error: ", error);
      }
  
      const newUser = getUsers.filter((user) => user._id !== _id);
      setGetUsers(newUser);
    };


  return (
    <div className='userWrapper'>

      <h2>Användare</h2>
     
     {getUsers && 
       getUsers.map((user) => (
        
        <div key={user._id} className="userCard">
        <p>Användarnamn: {user.username}</p>
        <p>Roll: {user.role}</p>
        <button onClick={() => deleteUser(user._id)}>Radera användare</button>
        <button>Ändra information</button>
        </div>
        
       ))}



    </div>
  )
}

export default Users