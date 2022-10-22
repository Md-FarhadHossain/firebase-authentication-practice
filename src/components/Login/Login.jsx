import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/AuthContext'

const Login = () => {

  const {login,user} = useContext(UserContext)

  console.log(user?.email)

  

  
  const handleSignin= (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value

    login(email, password)
    .then(userCredential => {
      console.log(userCredential.user)

  })
  .catch(error => {
      console.log(error)
  })

  }

  return (
    <div>
      <h1>Login</h1>
      <h1>{user?.email}</h1>

      <form onSubmit={handleSignin} >

        <div>
          <label htmlFor="email">Email</label>
          <input className='border' type='email' name='email' placeholder='Email' />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input className='border' type='password' name='password' placeholder='Password' />
        </div>

        <button className='btn bg-blue-500 py-2 px-6 text-lg font-semibold text-white'>Login</button>

      </form>
    </div>
  )
}

export default Login