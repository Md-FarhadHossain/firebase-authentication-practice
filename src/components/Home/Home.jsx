import React, { useContext } from 'react'
import { UserContext } from '../../context/AuthContext'

const Home = () => {

  const {logOut, user} = useContext(UserContext)

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(err => console.log(err))
  }

  return (
    <div>

      <h1 className='text-3xl'>welcome user: {user?.email}</h1>
      <button className='btn border bg-red-500 hover:bg-red-600' onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Home