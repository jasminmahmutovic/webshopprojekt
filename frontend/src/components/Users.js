import React, {useEffect, useState} from 'react'

import Modal from "../modal/Modal";

//style
import "./scss/user.scss"

const Users = () => {
  
    const [getUsers, setGetUsers] = useState()
    const [changedUser, setChangeUser] = useState()
    const [isOpen, setIsOpen] = useState(false)
    
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


    const changeUser = (_id) =>{

      try {
        fetch(`http://localhost:5000/api/user/updateUser/${_id}`, {
          method: "PUT",
          body: JSON.stringify(changedUser),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("success");
      } catch (error) {
        console.error("Error: ", error);
      }

      // const newUser = changedUser.filter((user) => user._id !== _id);
      // setChangeUser(newUser);
    }


    const handleInput = (e) => {
      setChangeUser({...changedUser, [e.target.name]: e.target.value})
      console.log(getUsers)
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
        <button  onClick={() => setIsOpen(!isOpen)}>Ändra information</button>
        
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <form 
            onSubmit={changeUser(user._id)}
            className='changeUserModal'>
            <label>Användrnamn</label>
            <input 
            placeholder="Användarnamn"
            name="username"
            onChange={handleInput}/>

            <label>Lösenord</label>
            <input 
             placeholder="Lösenord"
             name="password"
             type="password"
             onChange={handleInput}/>

            <label>Roll</label>
            <label>Användare</label>
            <input 
             type="checkbox"
             name="role"
             value="user"
             onChange={handleInput}/>
             
             <label>Admin</label>
             <input 
             type="checkbox"
             name="role"
             value="admin"
             onChange={handleInput}/>
             </form>
             <button type='submit'>Gör ändringar</button>
        </Modal>
        </div>
        
       ))}



    </div>
  )
}

export default Users