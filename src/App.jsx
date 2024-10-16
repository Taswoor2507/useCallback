import React, { useCallback, useState } from 'react'
import users from './Users';
import "./App.css"
import Search from './Search';
const App = () => {
  const [allUsers, setAllUsers] =  useState(users);
  const [filterUsers , setFilterUsers] = useState(allUsers);
//  console.log(allUsers)

const handleOnChange = useCallback((searchValue)=>{
  const searchUsers = filterUsers.filter((user)=>user.name.toLowerCase().includes(searchValue.toLowerCase()))
  setFilterUsers(searchUsers)
},[allUsers])



  return (
    <div>
       <h1>Use callback hook</h1>
       <hr />
       <Search addingOnchangeFunctionality = {handleOnChange} />
      <h3>All users </h3>
      <div className="users">
        {
          filterUsers.map((user , index)=>{
          return <div key={index}>
               <h2>{user.name}</h2>
               <p>{user.email}</p>
               <small><b>Location</b> :{user.location}</small>
               </div>
          })
        }
      </div>

    </div>
  )
}

export default App
