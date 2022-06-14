import React, {useEffect, useState} from 'react'

const Users = () => {
  
    const [getUsers, setGetUsers] = useState()
    
  useEffect(() => {
    async function fetchUsers() {
      let response = await fetch("http://localhost:5000/api/user/authenticated");
      let data = await response.json();
      console.log(data);
      setGetUsers(data.posts);
      if (response.status !== 401) {
        console.log("inloggad");
      }
    }
    fetchUsers();
  }, []);




  return (
    <div>Users
     




    </div>
  )
}

export default Users